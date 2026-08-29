import Image from "next/image";
import { clients } from "@/lib/data";

export default function TrustStrip() {
  return (
    <section className="border-b border-[#dce2dc] bg-white">
      <div className="mx-auto flex w-[calc(100%-28px)] max-w-[1320px] flex-col gap-3 py-4 sm:w-[calc(100%-32px)] sm:gap-[18px] sm:py-6 lg:min-h-[120px] lg:flex-row lg:items-center lg:gap-[45px] lg:py-0">
        {/* Label */}
        <span className="shrink-0 text-[9px] font-extrabold tracking-[.14em] text-[#727c76] uppercase sm:text-[10px] lg:w-[180px]">
          Trusted by leading organizations
        </span>

        {/* Logos */}
        <div className="flex w-full items-center gap-5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6 lg:justify-between lg:gap-7">
          {clients.map(([name, image]) => (
            <div
              key={name}
              className="relative h-10 w-[100px] shrink-0 sm:h-12 sm:w-[125px] lg:h-[53px] lg:w-[140px]"
            >
              <Image
                src={image}
                alt={name}
                fill
                sizes="140px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}