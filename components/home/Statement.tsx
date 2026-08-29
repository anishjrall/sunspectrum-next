export default function Statement() {
  return (
    <section className="border-y border-[#dce2dc] bg-[#f8f8f4] py-14 sm:py-[78px] lg:py-[95px]">
      <div className="mx-auto grid w-[calc(100%-28px)] max-w-[1320px] gap-7 sm:w-[calc(100%-32px)] sm:gap-7 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
        {/* Label */}
        <div>
          <span className="inline-flex items-center gap-2.5 text-[9px] font-extrabold tracking-[.20em] text-[#718078] uppercase sm:text-[10px]">
            <span className="h-px w-7 bg-current" />
            SUNSPECTRUM ENTERPRISES
          </span>
        </div>

        {/* Statement */}
        <div>
          <h2 className="max-w-[760px] text-[36px] font-bold leading-[1.03] tracking-[-.055em] sm:text-[clamp(38px,4.5vw,58px)] sm:leading-none">
            Practical engineering for energy, water and utility infrastructure.
          </h2>

          <p className="mt-5 max-w-[650px] text-[14px] leading-[1.65] text-[#68736d] sm:mt-6 sm:text-[15px] sm:leading-[1.75]">
            We plan systems around actual site conditions, operating needs,
            performance and serviceability — not just equipment specifications.
          </p>
        </div>
      </div>
    </section>
  );
}