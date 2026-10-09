const steps = [
  {
    n: "01",
    t: "Anlatın",
    d: "Ne olduğunu iki cümleyle yazın: sorun, ilçe, varsa fotoğraf. Önce güvenlik adımlarını rehberimizde bulabilirsiniz.",
  },
  {
    n: "02",
    t: "Yönlendirilin",
    d: "Talebiniz, ilgili işe uygun bağımsız bir tesisatçıya iletilir. Platform hizmeti kendisi vermez ve fiyat belirlemez.",
  },
  {
    n: "03",
    t: "Netleştirin",
    d: "Kapsamı, süreyi ve ücreti işe başlamadan tesisatçıyla konuşun. Yazılı ya da mesajla teyit almanız her zaman iyi bir adımdır.",
  },
];

export function Process() {
  return (
    <section
      className="on-deep px-[var(--gut)] py-24 md:py-40"
      aria-labelledby="surec-h"
    >
      <div className="mx-auto grid max-w-[1700px] gap-14 lg:grid-cols-[1fr_1.4fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="mono text-ice/50">05 — Süreç</p>
          <h2 id="surec-h" className="display d-xl mt-5">
            Üç
            <br />
            <span className="serif text-aqua">adımda.</span>
          </h2>
        </div>
        <ol className="space-y-6">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="sticky rounded-[2rem] border border-ice/15 bg-ink p-8 md:p-12"
              style={{ top: `${7 + i * 1.6}rem` }}
            >
              <span className="display d-xl text-aqua">{s.n}</span>
              <h3 className="display d-lg mt-4">{s.t}</h3>
              <p className="lead mt-5 max-w-lg text-ice/70">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
