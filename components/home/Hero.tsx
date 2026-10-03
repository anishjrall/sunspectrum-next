import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const stats = [
    ["15+", "Years of Experience"],
    ["500+", "Projects Completed"],
    ["1000+", "Happy Clients"],
    ["7+", "Industries Served"],
  ];

  return (
    <section className="relative min-h-[680px] overflow-hidden text-white sm:min-h-[650px] lg:min-h-[630px]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/solar-hero.png"
          alt="Rooftop solar installation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] sm:object-[58%_center] lg:object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,30,21,.92)_0%,rgba(5,30,21,.76)_48%,rgba(5,30,21,.94)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,30,21,.95)_0%,rgba(5,30,21,.78)_37%,rgba(5,30,21,.15)_72%,rgba(5,30,21,.18)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[680px] w-[calc(100%-28px)] max-w-[1320px] flex-col py-[52px] sm:min-h-[650px] sm:w-[calc(100%-32px)] sm:pt-[76px] sm:pb-[38px] lg:min-h-[630px] lg:pt-[105px] lg:pb-[44px]">
        {/* Hero copy */}
        <div className="max-w-[670px]">
          <span className="inline-flex items-center gap-2.5 text-[9px] font-extrabold tracking-[.20em] text-[#ead6a3] uppercase sm:text-[10px]">
            <span className="h-px w-7 bg-current" />
            ENERGY · WATER · ENGINEERING
          </span>

          <h1 className="mt-5 text-[48px] font-bold leading-[.96] tracking-[-.065em] sm:mt-[23px] sm:text-[clamp(48px,9vw,70px)] lg:text-[clamp(52px,6.3vw,88px)]">
            Powering a
            <br />
            Smarter <span className="text-[#d6ad58]">Tomorrow</span>
          </h1>

          <p className="mt-5 max-w-[570px] text-[14px] leading-[1.65] text-white/75 sm:text-[15px] lg:text-[17px] lg:leading-[1.65]">
            Complete Solar, Water, Pumping and EPC solutions for a sustainable
            and efficient future.
          </p>

          {/* Buttons */}
          <div className="mt-6 grid grid-cols-1 gap-2.5 sm:flex sm:flex-wrap lg:mt-8">
            <Link
              href="#services"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 bg-[#d6ad58] px-5 text-[10px] font-extrabold tracking-[.06em] text-[#073d2d] uppercase transition hover:bg-white sm:w-auto sm:px-[22px]"
            >
              Explore our solutions
              <ArrowRight size={17} />
            </Link>

            <a
              href="#contact"
              className="inline-flex min-h-12 w-full items-center justify-center border border-white/55 px-5 text-[10px] font-extrabold tracking-[.06em] text-white uppercase transition hover:bg-white/10 sm:w-auto sm:px-[22px]"
            >
              Get a quote
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid w-full grid-cols-2 sm:mt-20 sm:grid-cols-4">
          {stats.map(([value, label], index) => (
            <div
              key={label}
              className={`
                min-w-0 px-3 py-3
                sm:px-[18px] sm:py-0
                lg:px-7

                ${index % 2 === 1 ? "border-l border-white/20" : ""}
                ${index >= 2 ? "border-t border-white/20" : ""}

                sm:border-t-0
                sm:border-l
                sm:first:border-l-0
              `}
            >
              <strong className="block text-[27px] leading-none tracking-[-.04em] sm:text-[28px] lg:text-[31px]">
                {value}
              </strong>

              <span className="mt-1.5 block max-w-[130px] text-[10px] leading-[1.4] text-white/60 sm:text-[10px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}