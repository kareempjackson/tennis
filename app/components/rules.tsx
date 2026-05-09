"use client";

import { useState } from "react";

const rules = [
  "Challenge up to 3 spots above your rank.",
  "Defenders must accept within 48 hours or forfeit.",
  "Play anywhere. Mount Cinnamon court fees split evenly.",
  "Players provide their own tennis balls.",
  "Best two out of three sets. Winner reports.",
];

export default function Rules() {
  const [open, setOpen] = useState(false);

  return (
    <section id="rules" className="px-4 sm:px-5 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <hr className="border-0 border-t border-[var(--color-sand-border)]" />
      </div>
      <div className="max-w-[1280px] mx-auto py-14 sm:py-16 md:py-20">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="w-full flex items-center justify-between gap-4 sm:gap-6 text-left group"
        >
          <div className="min-w-0">
            <span className="block mb-3 sm:mb-4 text-[9px] sm:text-[10px] uppercase tracking-[2.5px] sm:tracking-[3px] text-[var(--color-cinnamon)] font-semibold">
              Fine Print
            </span>
            <h2
              className="font-[family-name:var(--font-display)] font-black uppercase text-[var(--color-navy)] leading-[0.92]"
              style={{ fontSize: "clamp(26px, 6vw, 52px)", letterSpacing: "-0.01em" }}
            >
              Rules & Guidelines
            </h2>
          </div>
          <span
            aria-hidden
            className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 border border-[var(--color-cinnamon)]/30 text-[var(--color-cinnamon)] transition-all duration-300 group-hover:bg-[var(--color-cinnamon)] group-hover:text-white shrink-0 text-[20px] sm:text-[22px]"
            style={{
              transform: open ? "rotate(45deg)" : "rotate(0)",
            }}
          >
            +
          </span>
        </button>

        <div
          className={`grid transition-all duration-500 ease-out overflow-hidden ${
            open ? "grid-rows-[1fr] opacity-100 mt-8 sm:mt-10" : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="min-h-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {rules.map((rule, i) => (
                <div
                  key={i}
                  className="bg-[var(--color-sand)] p-5 sm:p-6 flex flex-col gap-3 min-h-[120px] sm:min-h-[140px]"
                >
                  <span
                    className="font-[family-name:var(--font-display)] font-bold text-[var(--color-cinnamon)] leading-none text-[16px] sm:text-[18px]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[13px] font-light text-[var(--color-navy)]/55 leading-[1.6]">
                    {rule}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
