"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const VERT = /* glsl */ `
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

// Ray-march edilen akışkan metaball sahnesi: yumuşak birleşen su damlaları, fresnel yansıma, kırılma ve fare ile etkileşim.
const FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform vec2 uRes; uniform float uTime; uniform vec2 uMouse; uniform float uScroll; uniform vec2 uSpread; uniform float uMouseOn;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float smin(float a, float b, float k){ float h = max(k - abs(a - b), 0.0) / k; return min(a, b) - h * h * k * 0.25; }

vec3 mousePos;

float map(vec3 p){
  float d = 1e5;
  for (int i = 0; i < 5; i++){
    float fi = float(i);
    vec3 c = vec3(
      sin(uTime * (0.21 + 0.06 * fi) + fi * 2.1) * uSpread.x * (0.55 + 0.16 * fi),
      cos(uTime * (0.17 + 0.05 * fi) + fi * 1.3) * uSpread.y + uScroll * 1.8,
      sin(uTime * 0.3 + fi) * 0.5
    );
    float r = 0.62 + 0.14 * sin(fi * 3.0 + uTime * 0.4);
    d = smin(d, length(p - c) - r, 0.95);
  }
  d = smin(d, length(p - mousePos) - 0.52, 1.0);
  d += 0.018 * sin(p.x * 6.0 + uTime) * sin(p.y * 5.0 - uTime * 1.2) * sin(p.z * 5.0 + uTime * 0.7);
  return d;
}

vec3 calcNormal(vec3 p){
  vec2 e = vec2(0.0025, -0.0025);
  return normalize(e.xyy * map(p + e.xyy) + e.yyx * map(p + e.yyx) + e.yxy * map(p + e.yxy) + e.xxx * map(p + e.xxx));
}

vec3 env(vec3 d){
  float h = d.y * 0.5 + 0.5;
  vec3 col = mix(vec3(0.0, 0.03, 0.05), vec3(0.04, 0.32, 0.42), pow(h, 1.6));
  col += smoothstep(0.82, 0.95, dot(d, normalize(vec3(-0.5, 0.7, -0.5)))) * vec3(0.8, 1.0, 1.0) * 1.7;
  col += smoothstep(0.9, 0.97, dot(d, normalize(vec3(0.7, 0.2, -0.6)))) * vec3(0.3, 0.85, 1.0) * 1.2;
  col += 0.18 * pow(max(0.0, sin(d.x * 5.0 + d.y * 3.0 + uTime * 0.2)), 8.0) * vec3(0.3, 0.9, 1.0);
  return col;
}

float caustic(vec2 p){
  vec2 q = p; float v = 0.0;
  for (int i = 0; i < 3; i++){
    q += vec2(sin(q.y * 1.7 + uTime * 0.4), cos(q.x * 1.3 - uTime * 0.35)) * 0.6;
    v += abs(sin(q.x * 2.0) * sin(q.y * 2.0));
  }
  return pow(v / 3.0, 3.0);
}

void main(){
  vec2 uv = (vUv - 0.5) * vec2(uRes.x / uRes.y, 1.0) * 2.0;
  mousePos = vec3(uMouse.x * (uRes.x / uRes.y), uMouse.y, 0.0) * 3.1 * uMouseOn + vec3(0.0, 0.0, 9.0) * (1.0 - uMouseOn);
  vec3 ro = vec3(0.0, 0.0, -5.0);
  vec3 rd = normalize(vec3(uv, 1.6));

  float tt = 0.0; float glow = 0.0; bool hit = false;
  for (int i = 0; i < 56; i++){
    float d = map(ro + rd * tt);
    glow += 0.012 / (0.04 + d * d * 3.0);
    if (d < 0.003){ hit = true; break; }
    tt += d * 0.92;
    if (tt > 14.0) break;
  }

  vec3 bg = mix(vec3(0.008, 0.032, 0.045), vec3(0.012, 0.085, 0.115), vUv.y * 0.9);
  bg += caustic(uv * 2.2 + vec2(0.0, uTime * 0.05)) * 0.06 * vec3(0.2, 0.85, 1.0);
  vec3 col = bg + glow * 0.018 * vec3(0.2, 0.85, 1.0);

  if (hit){
    vec3 p = ro + rd * tt;
    vec3 n = calcNormal(p);
    float fres = pow(1.0 - max(dot(n, -rd), 0.0), 3.0);
    vec3 refl = env(reflect(rd, n));
    vec3 refr = env(refract(rd, n, 0.78)) * vec3(0.55, 0.95, 1.0);
    vec3 base = vec3(0.01, 0.1, 0.14);
    col = mix(base + refr * 0.9, refl, clamp(fres * 0.9 + 0.18, 0.0, 1.0));
    col += pow(max(dot(reflect(rd, n), normalize(vec3(-0.4, 0.8, -0.6))), 0.0), 60.0) * 1.2;
    col += glow * 0.01 * vec3(0.3, 0.9, 1.0);
  }

  float vig = smoothstep(1.6, 0.35, length(uv * vec2(0.8, 1.0)));
  col *= 0.55 + 0.45 * vig;
  col += (hash(gl_FragCoord.xy + fract(uTime)) - 0.5) * 0.028;
  gl_FragColor = vec4(pow(max(col, 0.0), vec3(0.92)), 1.0);
}
`;

type Props = { className?: string; calm?: boolean; interactive?: boolean; scrollLink?: boolean };

export function LiquidCanvas({ className = "", calm = false, interactive = true, scrollLink = false }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: "high-performance" });
    } catch {
      setFailed(true);
      return;
    }
    const canvas = renderer.domElement;
    canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
    canvas.setAttribute("aria-hidden", "true");
    el.appendChild(canvas);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const uniforms = {
      uRes: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 4 },
      uMouse: { value: new THREE.Vector2(0.4, 0.1) },
      uScroll: { value: 0 },
      uSpread: { value: new THREE.Vector2(1.9, 1.2) },
      uMouseOn: { value: 0 },
    };
    const mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms });
    const scene = new THREE.Scene();
    const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat));

    let quality = coarse ? 0.5 : 0.7;
    let w = 1, h = 1;
    const size = () => {
      const r = el.getBoundingClientRect();
      w = Math.max(1, r.width); h = Math.max(1, r.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      renderer.setPixelRatio(dpr * quality);
      renderer.setSize(w, h, false);
      uniforms.uRes.value.set(w * dpr * quality, h * dpr * quality);
      const asp = w / h;
      uniforms.uSpread.value.set(Math.min(asp, 1.9) * 1.55 + 0.2, asp < 1 ? 1.9 : 1.2);
    };
    size();
    const ro = new ResizeObserver(size);
    ro.observe(el);

    const target = new THREE.Vector2(0.4, 0.1);
    let mouseOn = 0, mouseOnTarget = 0, last = performance.now(), visible = true, raf = 0, clock = 4;
    let slow = 0, frames = 0;

    const onMove = (e: PointerEvent) => {
      if (!interactive) return;
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 2 - 1;
      const y = -(((e.clientY - r.top) / r.height) * 2 - 1);
      target.set(x, y);
      mouseOnTarget = x > -1.2 && x < 1.2 && y > -1.2 && y < 1.2 && e.clientY >= r.top && e.clientY <= r.bottom ? 1 : 0;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible && !reduce) loop(performance.now()); }, { threshold: 0 });
    io.observe(el);

    const draw = () => renderer.render(scene, cam);
    const loop = (now: number) => {
      cancelAnimationFrame(raf);
      if (!visible || document.hidden) return;
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      clock += dt * (calm ? 0.55 : 1);
      uniforms.uTime.value = clock;
      uniforms.uMouse.value.lerp(target, 1 - Math.pow(0.001, dt));
      mouseOn += (mouseOnTarget - mouseOn) * Math.min(1, dt * 4);
      uniforms.uMouseOn.value = mouseOn;
      if (scrollLink) {
        const r = el.getBoundingClientRect();
        uniforms.uScroll.value = Math.min(1.5, Math.max(0, -r.top / Math.max(1, r.height)));
      }
      draw();
      // Uyarlamalı kalite: kare süresi uzunsa çözünürlüğü düşür.
      frames++;
      if (dt > 0.034) slow++;
      if (frames === 40) { if (slow > 20 && quality > 0.38) { quality -= 0.15; size(); } frames = 0; slow = 0; }
      raf = requestAnimationFrame(loop);
    };
    const onVis = () => { if (!document.hidden && visible && !reduce) { last = performance.now(); loop(last); } };
    document.addEventListener("visibilitychange", onVis);
    const onLost = (e: Event) => { e.preventDefault(); setFailed(true); };
    canvas.addEventListener("webglcontextlost", onLost);

    if (reduce) { draw(); const onR = () => draw(); window.addEventListener("resize", onR); }
    else loop(performance.now());

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect(); ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
      canvas.removeEventListener("webglcontextlost", onLost);
      mat.dispose(); renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
    };
  }, [calm, interactive, scrollLink]);

  return <div ref={wrap} className={`${className} ${failed ? "liquid-fallback" : ""}`} aria-hidden="true" />;
}
