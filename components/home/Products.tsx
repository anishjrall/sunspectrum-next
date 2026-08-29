import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";

export default function Products() {
  const items = Object.entries(products);

  return (
    <section
      id="products"
      className="bg-[#eef1ed] py-14 sm:py-[78px] lg:py-[100px]"
    >
      <div className="mx-auto w-[calc(100%-28px)] max-w-[1320px] sm:w-[calc(100%-32px)]">
        {/* Heading */}
        <div className="mb-7 grid gap-6 sm:mb-9 lg:mb-[45px] lg:grid-cols-[1fr_.6fr] lg:items-end lg:gap-[70px]">
          <div>
            <Eyebrow>OUR PRODUCTS</Eyebrow>

            <h2 className="mt-4 text-[38px] font-bold leading-[1.02] tracking-[-.055em] sm:text-[clamp(38px,4.3vw,58px)]">
              Equipment for dependable systems.
            </h2>
          </div>

          <p className="text-[14px] leading-[1.65] text-[#68736d] sm:text-[14px] sm:leading-[1.75]">
            Explore solar, water treatment, hot-water and pumping equipment
            suited to residential, commercial and industrial applications.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-[15px]">
          {items.map(([slug, product], index) => (
            <Link
              href={`/products/${slug}`}
              key={slug}
              className={`group overflow-hidden bg-white ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div
                className={`
                  relative
                  min-h-[290px]
                  overflow-hidden

                  sm:min-h-[285px]

                  ${
                    index === 0
                      ? "sm:min-h-[460px] lg:min-h-[585px]"
                      : ""
                  }
                `}
              >
                {/* Image */}
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-[26px]">
                  <span className="text-[9px] font-extrabold tracking-[.17em] text-white/65 uppercase sm:text-[8px]">
                    PRODUCT {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-2 text-[19px] font-semibold leading-[1.2] tracking-[-.03em] sm:text-[22px]">
                    {product.title}
                  </h3>

                  <p className="mt-2 max-w-[420px] text-[13px] leading-[1.55] text-white/75 sm:text-[12px] sm:leading-[1.6]">
                    {product.desc}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-extrabold tracking-[.12em] text-[#ead6a3] uppercase sm:text-[10px]">
                    View product
                    <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </Link>
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