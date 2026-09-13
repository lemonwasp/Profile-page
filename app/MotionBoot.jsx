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

    const alreadyInView = (target) => {
      const rect = target.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    };

    targets.forEach((target) => {
      if (alreadyInView(target)) target.classList.add("is-visible");
    });

    root.classList.add("motion-ready");

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

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

    targets.forEach((target) => {
      if (!target.classList.contains("is-visible")) observer.observe(target);
    });

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
