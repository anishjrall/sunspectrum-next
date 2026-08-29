import { whyUs } from "@/lib/data";

export default function WhySunspectrum() {
  return (
    <section className="bg-[#073d2d] py-14 text-white sm:py-[78px] lg:py-[100px]">
      <div className="mx-auto grid w-[calc(100%-28px)] max-w-[1320px] gap-9 sm:w-[calc(100%-32px)] sm:gap-[45px] lg:grid-cols-[.7fr_1.3fr] lg:gap-[90px]">
        {/* Intro */}
        <div>
          <Eyebrow>WHY SUNSPECTRUM</Eyebrow>

          <h2 className="mt-4 text-[40px] font-bold leading-[.98] tracking-[-.06em] sm:mt-[18px] sm:text-[clamp(43px,5vw,65px)]">
            Built around
            <br />
            the site.
          </h2>

          <p className="mt-5 max-w-[390px] text-[14px] leading-[1.7] text-white/55 sm:mt-6 sm:text-[14px] sm:leading-[1.8]">
            Good engineering starts with understanding the requirement,
            conditions and expected outcome.
          </p>
        </div>

        {/* Reasons */}
        <div className="border-t border-white/15">
          {whyUs.map(([number, title, text]) => (
            <div
              key={number}
              className="
                grid grid-cols-[32px_1fr]
                gap-x-3
                gap-y-2
                border-b border-white/15
                py-5

                sm:grid-cols-[42px_1fr]
                sm:gap-x-4
                sm:gap-y-2.5
                sm:py-7

                lg:grid-cols-[70px_230px_1fr]
                lg:items-start
                lg:gap-[18px]
              "
            >
              {/* Number */}
              <span className="pt-0.5 text-[10px] font-extrabold tracking-[.14em] text-[#d6ad58]">
                {number}
              </span>

              {/* Title */}
              <h3 className="text-[16px] font-semibold leading-[1.25] sm:text-[17px]">
                {title}
              </h3>

              {/* Description */}
              <p
                className="
                  col-start-2
                  text-[13px]
                  leading-[1.6]
                  text-white/55

                  sm:text-[13px]
                  sm:leading-[1.7]

                  lg:col-start-3
                  lg:row-start-1
                "
              >
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
    <span className="inline-flex items-center gap-2.5 text-[9px] font-extrabold tracking-[.20em] text-[#d6ad58] uppercase sm:text-[10px]">
      <span className="h-px w-7 bg-current" />
      {children}
    </span>
  );
}