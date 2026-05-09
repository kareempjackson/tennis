import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(165deg, #0C2340 0%, #060F1F 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-12 py-12 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr] gap-8 sm:gap-10 md:gap-12">
          <div className="sm:col-span-2 md:col-span-1">
            <Image
              src="/images/logo-header-v2.svg"
              alt="Mount Cinnamon Beach & Wellness Resort"
              width={250}
              height={111}
              className="h-10 sm:h-12 w-auto opacity-90"
            />
            <p className="mt-5 sm:mt-6 text-[12px] sm:text-[13px] font-light text-white/45 leading-[1.7] max-w-[340px]">
              The Grenada Community Tennis Ladder is presented by Mount
              Cinnamon Beach & Wellness Resort, Grand Anse Beach, Grenada.
            </p>
          </div>

          <div>
            <span className="block mb-4 sm:mb-5 text-[9px] sm:text-[10px] uppercase tracking-[2.5px] sm:tracking-[3px] text-[var(--color-cinnamon)] font-semibold">
              Follow
            </span>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/barrycolly/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] sm:text-[13px] text-white/65 hover:text-white transition-colors break-words"
                >
                  @barrycolly
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mountcinnamongrenada/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] sm:text-[13px] text-white/65 hover:text-white transition-colors break-words"
                >
                  @mountcinnamongrenada
                </a>
              </li>
              <li>
                <a
                  href="https://www.mountcinnamon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] sm:text-[13px] text-white/65 hover:text-white transition-colors break-words"
                >
                  mountcinnamon.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="block mb-4 sm:mb-5 text-[9px] sm:text-[10px] uppercase tracking-[2.5px] sm:tracking-[3px] text-[var(--color-cinnamon)] font-semibold">
              Contact
            </span>
            <ul className="space-y-3 text-[12px] sm:text-[13px] text-white/65">
              <li>
                <a
                  href="mailto:admin@grenadatennisladder.com"
                  className="hover:text-white transition-colors"
                >
                  admin@grenadatennisladder.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+14734399900"
                  className="hover:text-white transition-colors"
                >
                  +1 473-439-9900
                </a>
              </li>
              <li className="text-white/45">
                Grand Anse Beach, St. George's, Grenada
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 sm:mt-12 md:mt-14 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-t border-white/10"
        >
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[1.8px] sm:tracking-[2px] text-white/30 font-medium">
            Grenada Community Tennis Ladder · Est. 2026
          </span>
          <span className="text-[10px] sm:text-[11px] text-white/25 font-light">
            © {new Date().getFullYear()} Mount Cinnamon Resort. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
