export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#d6ad58] px-0 py-14 sm:py-[78px] lg:pt-[92px] lg:pb-[30px]"
    >
      <div className="mx-auto grid w-[calc(100%-28px)] max-w-[1320px] gap-8 sm:w-[calc(100%-32px)] sm:gap-[30px] lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:gap-20">
        {/* Heading */}
        <div>
          <Eyebrow>START A PROJECT</Eyebrow>

          <h2 className="mt-4 max-w-[650px] text-[40px] font-bold leading-[1] tracking-[-.06em] text-[#073d2d] sm:mt-[17px] sm:text-[clamp(45px,5.8vw,75px)] sm:leading-[.96]">
            Have a site requirement?
            <br />
            Let&apos;s talk.
          </h2>
        </div>

        {/* CTA */}
        <div>
          <p className="max-w-[410px] text-[14px] leading-[1.65] text-[#655a39] sm:text-[14px] sm:leading-[1.75]">
            Share your site location, capacity requirement and expected
            timeline. We&apos;ll help define the right scope.
          </p>

          <div className="mt-4 text-[12px] leading-[1.7] text-[#655a39]">
            <p>1088, 6th Main, E and F Block, Ramakrishna Nagar, Mysore - 570022</p>
            <p>Near Andolana Circle</p>
            <a
              href="https://maps.google.com/maps?q=12.2840129%2C76.6166227&z=17&hl=en"
              target="_blank"
              rel="noreferrer"
              className="font-bold underline underline-offset-2"
            >
              View location on Google Maps ↗
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-2.5 sm:flex sm:flex-wrap">
            <a
              href="tel:+918329298004"
              className="inline-flex min-h-12 w-full items-center justify-center bg-[#073d2d] px-5 text-[10px] font-extrabold tracking-[.06em] text-white uppercase transition hover:bg-[#0b4b38] sm:w-auto sm:px-[22px]"
            >
              Call +91 83292 98004
            </a>

            <a
              href="tel:+917353131310"
              className="inline-flex min-h-12 w-full items-center justify-center border border-[#9d884d] px-5 text-[10px] font-extrabold tracking-[.06em] text-[#073d2d] uppercase transition hover:bg-white/20 sm:w-auto sm:px-[22px]"
            >
              Call +91 73531 31310
            </a>

            <a
              href="https://wa.me/918329298004"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center border border-[#9d884d] px-5 text-[10px] font-extrabold tracking-[.06em] text-[#073d2d] uppercase transition hover:bg-white/20 sm:w-auto sm:px-[22px]"
            >
              WhatsApp ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-[9px] font-extrabold tracking-[.20em] text-[#6a572b] uppercase sm:text-[10px]">
      <span className="h-px w-7 bg-current" />
      {children}
    </span>
  );
}