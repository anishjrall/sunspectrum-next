import { industries } from "@/lib/data";

const icons: Record<string, React.ReactNode> = {
  Manufacturing: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M4 21V9l7 4V7l9 4v10" />
      <path d="M7 17h1M7 14h1M14 17h1M17 17h1M14 14h1M17 14h1" />
    </svg>
  ),

  Hospitals: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 21V5h16v16" />
      <path d="M9 9h6M12 6v6" />
      <path d="M8 21v-5h8v5" />
    </svg>
  ),

  Hotels: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 21V4h14v17" />
      <path d="M8 8h2M14 8h2M8 12h2M14 12h2" />
      <path d="M3 21h18" />
    </svg>
  ),

  "Educational institutions": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 10 9-5 9 5-9 5-9-5Z" />
      <path d="M7 12v5c3 2 7 2 10 0v-5" />
      <path d="M21 10v6" />
    </svg>
  ),

  "Commercial buildings": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 21V4h16v17" />
      <path d="M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2" />
    </svg>
  ),

  "Government projects": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 9 9-5 9 5" />
      <path d="M5 10v8M9 10v8M15 10v8M19 10v8" />
      <path d="M3 21h18M3 18h18" />
    </svg>
  ),

  Agriculture: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21V10" />
      <path d="M12 13c-5 0-7-3-7-7 4 0 7 2 7 7Z" />
      <path d="M12 16c5 0 7-3 7-7-4 0-7 2-7 7Z" />
    </svg>
  ),
};

export default function Industries() {
  return (
    <section
      id="industries"
      className="scroll-mt-20 bg-[#eef1ed] py-14 sm:py-[70px] lg:py-[90px]"
    >
      <div className="mx-auto grid w-[calc(100%-28px)] max-w-[1320px] gap-6 sm:w-[calc(100%-32px)] sm:gap-[30px] lg:grid-cols-[.65fr_1.35fr] lg:gap-20">

        {/* Heading */}
        <div>
          <Eyebrow>INDUSTRIES</Eyebrow>

          <h2 className="mt-4 text-[clamp(34px,10vw,42px)] font-bold leading-none tracking-[-.055em] sm:text-[clamp(38px,4.4vw,56px)]">
            Designed for different operating environments.
          </h2>

          <p className="mt-5 text-[13px] leading-[1.6] text-[#68736d] sm:text-[14px]">
            Systems planned around the demands of each sector.
          </p>
        </div>

        {/* Industry cards */}
        <div className="grid grid-cols-1 border-l border-t border-[#d3dad3] sm:grid-cols-2">
          {industries.map(([title, text]) => (
            <div
              key={title}
              className="
                min-h-[140px]
                border-b
                border-r
                border-[#d3dad3]
                bg-[#eef1ed]
                p-5
                transition-colors
                hover:bg-white
                sm:min-h-[165px]
                sm:p-[22px]
              "
            >
              {/* Icon */}
              <div
                className="
                  h-[22px]
                  w-[22px]
                  text-[#0b4b38]

                  [&_svg]:h-full
                  [&_svg]:w-full
                  [&_svg]:fill-none
                  [&_svg]:stroke-current
                  [&_svg]:stroke-[1.5]
                  [&_svg]:stroke-linecap-round
                  [&_svg]:stroke-linejoin-round
                "
              >
                {icons[title]}
              </div>

              <h3 className="mt-4 text-[15px] font-semibold tracking-[-.02em] sm:mt-5 sm:text-[17px]">
                {title}
              </h3>

              <p className="mt-1.5 max-w-[280px] text-[11px] leading-[1.55] text-[#68736d] sm:text-[12px] sm:leading-[1.6]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-[9px] font-extrabold tracking-[.20em] text-[#718078] uppercase sm:text-[10px]">
      <span className="h-px w-7 bg-current" />
      {children}
    </span>
  );
}