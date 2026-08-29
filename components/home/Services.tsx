import Link from "next/link";
import {
  ArrowUpRight,
  Droplets,
  Settings2,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react";
import { services } from "@/lib/data";

const icons = [Sun, Droplets, Zap, Settings2, ShieldCheck];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-14 sm:py-[78px] lg:py-[95px]"
    >
      <div className="mx-auto w-[calc(100%-28px)] max-w-[1320px] sm:w-[calc(100%-32px)]">
        <SectionHeading />

        {/* Service cards */}
        <div className="grid grid-cols-2 border-l border-t border-[#dce2dc] lg:grid-cols-5">
          {services.map((service, index) => {
            const Icon = icons[index] || Settings2;

            return (
              <Link
                href={service.href}
                key={service.code}
                className="
                  group relative
                  min-h-[170px]
                  border-b border-r border-[#dce2dc]
                  p-4
                  transition
                  hover:bg-[#073d2d]
                  hover:text-white

                  sm:min-h-[220px]
                  sm:p-6

                  lg:min-h-[240px]
                  lg:p-6
                "
              >
                {/* Number */}
                <span className="text-[9px] font-extrabold tracking-[.14em] text-[#929d96] sm:text-[10px]">
                  {service.code}
                </span>

                {/* Arrow */}
                <span className="absolute right-3.5 top-3.5 text-[#8b968f] transition group-hover:text-[#d6ad58] sm:right-5 sm:top-5">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                    className="sm:h-[17px] sm:w-[17px]"
                  />
                </span>

                {/* Icon */}
                <div className="mt-7 text-[#0b4b38] transition group-hover:text-[#d6ad58] sm:mt-[42px] lg:mt-[50px]">
                  <Icon
                    size={24}
                    strokeWidth={1.7}
                    className="sm:h-[27px] sm:w-[27px]"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-3 text-[15px] font-semibold leading-[1.2] tracking-[-.025em] sm:mt-[19px] sm:text-[17px] lg:text-[18px]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[12px] leading-[1.55] text-[#68736d] transition group-hover:text-white/60 sm:max-w-[330px] sm:text-[12px] sm:leading-[1.65]">
                  {service.text}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionHeading() {
  return (
    <div className="mx-auto mb-7 max-w-[720px] text-center sm:mb-9 lg:mb-[45px]">
      <span className="inline-flex items-center justify-center gap-2.5 text-[9px] font-extrabold tracking-[.20em] text-[#718078] uppercase sm:text-[10px]">
        <span className="h-px w-7 bg-current" />
        OUR SERVICES
      </span>

      <h2 className="mt-4 text-[36px] font-bold leading-[1.02] tracking-[-.055em] sm:mt-[15px] sm:text-[clamp(38px,4.3vw,58px)]">
        Solutions built around your requirements.
      </h2>

      <p className="mx-auto mt-4 max-w-[610px] text-[14px] leading-[1.65] text-[#68736d] sm:mt-[18px] sm:text-[14px] sm:leading-[1.75]">
        From solar and water treatment to pumping, electrical and EPC
        execution, we handle practical systems from planning through support.
      </p>
    </div>
  );
}