import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#073d2d] text-white">
      <div className="mx-auto grid w-[calc(100%-28px)] max-w-[1320px] grid-cols-2 gap-x-7 gap-y-9 py-[50px] sm:w-[calc(100%-32px)] sm:gap-[42px_28px] sm:py-[65px_55px] lg:grid-cols-[1.5fr_.7fr_.9fr_1.1fr] lg:gap-[50px] lg:py-[70px_55px]">

        {/* Brand — full width on mobile */}
        <div className="col-span-2 lg:col-span-1">
          <Link
            href="/"
            className="flex items-center gap-2.5"
          >
            <Image
              src="/images/logo/sunspectrum-enterprises-logo.png"
              alt="SunSpectrum Enterprises"
              width={49}
              height={49}
              className="h-[43px] w-[43px] object-contain sm:h-[49px] sm:w-[49px]"
            />

            <span className="flex flex-col">
              <strong className="text-[17px] leading-none tracking-[-.045em] sm:text-[18px]">
                SunSpectrum
              </strong>

              <small className="mt-1.5 text-[6.5px] font-extrabold tracking-[.25em] text-[#89978f] sm:text-[7px]">
                ENTERPRISES
              </small>
            </span>
          </Link>

          <p className="mt-[18px] max-w-[370px] text-[12px] leading-[1.7] text-white/50 sm:mt-[21px] sm:text-[13px]">
            Solar, water, pumping and engineering solutions designed around
            real site requirements.
          </p>

          <span className="mt-2 inline-block border border-white/10 px-2.5 py-2 text-[8px] font-extrabold tracking-[.15em] text-[#d6ad58]">
            EST. 2011
          </span>
        </div>

        {/* Explore */}
        <FooterCol title="Explore">
          <Link href="/#services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/#industries">Industries</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </FooterCol>

        {/* Solutions */}
        <FooterCol title="Solutions">
          <Link href="/#services">Solar</Link>
          <Link href="/#services">Water</Link>
          <Link href="/#services">Pumping</Link>
          <Link href="/#services">EPC</Link>
          <Link href="/#services">Electrical</Link>
        </FooterCol>

        {/* Contact — full width on mobile */}
        {/* Contact */}
<div className="col-span-2 lg:col-span-1">
  <FooterCol title="Contact">
    <a href="tel:+918329298004">
      +91 83292 98004
    </a>

    <a href="tel:+917353131310">
      +91 73531 31310
    </a>

    <a
      href="https://wa.me/918329298004"
      target="_blank"
      rel="noreferrer"
    >
      WhatsApp
    </a>

    <a href="mailto:sunspectrum01@gmail.com">
      sunspectrum01@gmail.com
    </a>

    {/* Office */}
    <div className="mt-2 max-w-[290px]">
      <span className="block text-[9px] font-extrabold tracking-[.12em] text-white/30 uppercase">
        Office
      </span>

      <p className="mt-1.5 text-[11px] leading-[1.65] text-white/40">
        1088, 6th Main, E and F Block,
        <br />
        Ramakrishna Nagar,
        <br />
        Mysore - 570022
        <br />
        Near Andolana Circle
      </p>

      {/* Mini Map */}
      <a
        href="https://maps.google.com/maps?q=12.2840129%2C76.6166227&z=17&hl=en"
        target="_blank"
        rel="noreferrer"
        className="group relative mt-3 block h-[145px] w-full overflow-hidden border border-white/10"
      >
        <iframe
          title="SunSpectrum Enterprises Office Location"
          src="https://maps.google.com/maps?q=12.2840129%2C76.6166227&z=17&hl=en&output=embed"
          className="pointer-events-none h-full w-full border-0 grayscale-[25%] opacity-75 transition duration-300 group-hover:opacity-90"
          loading="lazy"
        />

        {/* Map overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[#073d2d]/10 transition group-hover:bg-transparent" />
      </a>

      <a
        href="https://maps.google.com/maps?q=12.2840129%2C76.6166227&z=17&hl=en"
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-block text-[9px] font-extrabold tracking-[.08em] text-[#d6ad58] uppercase transition hover:text-white"
      >
        Open in Google Maps ↗
      </a>
    </div>
  </FooterCol>
</div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex min-h-[60px] w-[calc(100%-28px)] max-w-[1320px] flex-col justify-center gap-1.5 border-t border-white/10 py-[17px] text-[9px] leading-[1.5] text-white/30 sm:w-[calc(100%-32px)] sm:flex-row sm:items-center sm:justify-between sm:py-0">
        <span>
          © {new Date().getFullYear()} SunSpectrum Enterprises
        </span>

        <span>
          Energy · Water · Engineering
        </span>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start">
      <h3 className="mb-[17px] text-[8px] font-extrabold tracking-[.2em] text-white/35 uppercase sm:mb-[21px] sm:text-[9px]">
        {title}
      </h3>

      <div className="flex flex-col gap-[10px] text-[12px] text-white/60 sm:gap-[11px] [&_a:hover]:text-white">
        {children}
      </div>
    </div>
  );
}