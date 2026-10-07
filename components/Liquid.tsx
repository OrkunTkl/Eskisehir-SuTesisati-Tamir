"use client";
import dynamic from "next/dynamic";
export const Liquid = dynamic(() => import("./LiquidCanvas").then((m) => m.LiquidCanvas), {
  ssr: false,
  loading: () => <div className="liquid-fallback absolute inset-0" aria-hidden="true" />,
});
