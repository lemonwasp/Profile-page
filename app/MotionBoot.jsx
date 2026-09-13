"use client";

import { useEffect } from "react";

export default function MotionBoot() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(
      document.querySelectorAll(
        ".section, .footer, .hero-meta, .pipeline-panel, .real-shot-wrap, .flow-card, .reconstruction-flow"
      )
    );

    if (!("IntersectionObserver" in window)) {
      root.classList.add("motion-ready");
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
