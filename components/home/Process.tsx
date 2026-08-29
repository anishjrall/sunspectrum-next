import { deliverySteps } from "@/lib/data";

export default function Process() {
  return (
    <section className="bg-white py-16 sm:py-[78px] lg:py-[100px]">
      <div className="mx-auto w-[calc(100%-28px)] max-w-[1320px] sm:w-[calc(100%-32px)]">
        <div className="mb-[30px] sm:mb-9 lg:mb-[45px]">
          <Eyebrow>OUR PROCESS</Eyebrow>
          <h2 className="mt-[15px] text-[clamp(34px,10vw,42px)] font-bold leading-none tracking-[-.055em] sm:text-[clamp(38px,4.3vw,58px)]">
            From requirement to handover.
          </h2>
        </div>

        <div className="grid grid-cols-1 border-l border-t border-[#dce2dc] sm:grid-cols-2 lg:grid-cols-5">
          {deliverySteps.map(([number, title, text]) => (
            <div
              key={number}
              className="min-h-[190px] border-b border-r border-[#dce2dc] p-[23px] sm:min-h-[205px] sm:p-[27px] lg:min-h-[235px]"
            >
              <span className="text-[9px] font-extrabold tracking-[.15em] text-[#0b4b38] sm:text-[10px]">
                {number}
              </span>
              <h3 className="mt-[42px] text-[17px] font-semibold sm:mt-[60px] sm:text-[18px]">
                {title}
              </h3>
              <p className="mt-2.5 text-[11.5px] leading-[1.65] text-[#68736d] sm:text-[12px]">
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
