import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";

const productGroups = [
  {
    label: "SOLAR & ENERGY",
    title: "Solar solutions",
    description:
      "Solar equipment for residential, commercial and agricultural applications.",
    products: ["panel", "solar"],
  },
  {
    label: "WATER TREATMENT",
    title: "Water treatment",
    description:
      "Treatment and purification equipment for dependable water quality.",
    products: ["ro", "softener", "commercial", "purifier"],
  },
  {
    label: "HOT WATER",
    title: "Hot water systems",
    description:
      "Efficient hot-water solutions for homes, institutions and commercial sites.",
    products: ["heatpump"],
  },
  {
    label: "PUMPING",
    title: "Pumping systems",
    description:
      "Solar pumping equipment for agricultural and utility applications.",
    products: ["pump"],
  },
] as const;

export default function ProductsPage() {
  return (
    <main className="bg-[#f8f8f4] text-[#11211a]">
      {/* Hero */}
      <section className="border-b border-[#dce2dc] bg-white">
        <div className="mx-auto grid min-h-[520px] w-[calc(100%-28px)] max-w-[1320px] items-center gap-10 py-14 sm:w-[calc(100%-32px)] sm:py-[78px] lg:grid-cols-[1fr_.7fr] lg:gap-24 lg:py-[95px]">
          <div>
            <span className="inline-flex items-center gap-2.5 text-[9px] font-extrabold tracking-[.20em] text-[#718078] uppercase sm:text-[10px]">
              <span className="h-px w-7 bg-current" />
              OUR PRODUCTS
            </span>

            <h1 className="mt-5 max-w-[780px] text-[clamp(45px,11vw,72px)] font-bold leading-[.93] tracking-[-.065em] text-[#073d2d]">
              Equipment for
              <br />
              <span className="text-[#d6ad58]">dependable systems.</span>
            </h1>

            <p className="mt-6 max-w-[620px] text-[14px] leading-[1.75] text-[#68736d] sm:text-[15px]">
              Explore equipment for solar, water treatment, hot water,
              purification and pumping applications. Each product can be
              selected around the requirements of the installation.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              <a
                href="#product-catalogue"
                className="inline-flex min-h-12 items-center gap-2 bg-[#073d2d] px-5 text-[10px] font-extrabold tracking-[.07em] text-white uppercase transition hover:bg-[#0b4b38]"
              >
                Explore products
                <ArrowRight size={15} />
              </a>

              <Link
                href="/#contact"
                className="inline-flex min-h-12 items-center border border-[#cfd7d1] px-5 text-[10px] font-extrabold tracking-[.07em] text-[#073d2d] uppercase transition hover:border-[#073d2d]"
              >
                Request a quote
              </Link>
            </div>
          </div>

          <div className="border-t border-[#dce2dc] lg:border-t-0 lg:border-l lg:pl-10">
            <div className="grid grid-cols-2 lg:grid-cols-1">
              <div className="border-b border-r border-[#dce2dc] py-5 pr-5 lg:border-r-0 lg:py-6 lg:pr-0">
                <span className="text-[30px] font-bold leading-none tracking-[-.05em] text-[#073d2d] sm:text-[36px]">
                  {Object.keys(products).length}
                </span>

                <p className="mt-2 text-[10px] font-extrabold tracking-[.14em] text-[#718078] uppercase">
                  Product ranges
                </p>
              </div>

              <div className="border-b border-[#dce2dc] py-5 pl-5 lg:py-6 lg:pl-0">
                <span className="text-[30px] font-bold leading-none tracking-[-.05em] text-[#073d2d] sm:text-[36px]">
                  5
                </span>

                <p className="mt-2 text-[10px] font-extrabold tracking-[.14em] text-[#718078] uppercase">
                  Application areas
                </p>
              </div>

              <p className="col-span-2 pt-5 text-[12px] leading-[1.7] text-[#68736d] lg:pt-6">
                Need help choosing equipment? Share your site conditions,
                application and expected requirement with our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product catalogue */}
      <section
        id="product-catalogue"
        className="py-14 sm:py-[78px] lg:py-[95px]"
      >
        <div className="mx-auto w-[calc(100%-28px)] max-w-[1320px] sm:w-[calc(100%-32px)]">
          <div className="mb-9 max-w-[720px] sm:mb-11 lg:mb-[55px]">
            <span className="inline-flex items-center gap-2.5 text-[9px] font-extrabold tracking-[.20em] text-[#718078] uppercase sm:text-[10px]">
              <span className="h-px w-7 bg-current" />
              PRODUCT CATALOGUE
            </span>

            <h2 className="mt-4 text-[36px] font-bold leading-[.98] tracking-[-.06em] text-[#073d2d] sm:text-[46px] lg:text-[58px]">
              Find the right equipment.
            </h2>

            <p className="mt-4 max-w-[620px] text-[13px] leading-[1.7] text-[#68736d] sm:text-[14px]">
              Browse our product ranges and open an individual product page
              for features, applications and further information.
            </p>
          </div>

          <div className="space-y-10 sm:space-y-12 lg:space-y-16">
            {productGroups.map((group, groupIndex) => (
              <section key={group.label}>
                <div className="mb-5 flex items-end justify-between gap-5 border-b border-[#dce2dc] pb-4 sm:mb-6">
                  <div>
                    <span className="text-[8px] font-extrabold tracking-[.18em] text-[#0b4b38] uppercase sm:text-[9px]">
                      {group.label}
                    </span>

                    <h3 className="mt-1.5 text-[22px] font-semibold tracking-[-.035em] text-[#11211a] sm:text-[26px]">
                      {group.title}
                    </h3>
                  </div>

                  <span className="hidden text-[9px] font-bold tracking-[.12em] text-[#929d96] uppercase sm:block">
                    {String(groupIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                <div
                  className={`grid gap-3 ${
                    group.products.length === 1
                      ? "grid-cols-1 sm:grid-cols-2"
                      : group.products.length === 2
                        ? "grid-cols-1 sm:grid-cols-2"
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                  }`}
                >
                  {group.products.map((slug) => {
                    const product = products[slug];

                    return (
                      <Link
                        key={slug}
                        href={`/products/${slug}`}
                        className="group overflow-hidden border border-[#dce2dc] bg-white transition hover:border-[#073d2d]"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-[#eef1ed]">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover transition duration-700 group-hover:scale-105"
                          />
                        </div>

                        <div className="p-4 sm:p-5">
                          <div className="flex items-start justify-between gap-3">
                            <h4 className="text-[17px] font-semibold leading-[1.15] tracking-[-.025em] sm:text-[18px]">
                              {product.title}
                            </h4>

                            <span className="grid h-7 w-7 shrink-0 place-items-center border border-[#dce2dc] text-[#718078] transition group-hover:border-[#073d2d] group-hover:bg-[#073d2d] group-hover:text-white">
                              <ArrowRight size={13} />
                            </span>
                          </div>

                          <p className="mt-2.5 text-[11px] leading-[1.65] text-[#68736d] sm:text-[12px]">
                            {product.desc}
                          </p>

                          <span className="mt-4 inline-flex text-[8px] font-extrabold tracking-[.14em] text-[#0b4b38] uppercase">
                            View product
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#d6ad58] py-12 sm:py-[65px] lg:py-[75px]">
        <div className="mx-auto flex w-[calc(100%-28px)] max-w-[1320px] flex-col gap-6 sm:w-[calc(100%-32px)] lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div>
            <span className="text-[9px] font-extrabold tracking-[.20em] text-[#6a572b] uppercase">
              NEED HELP CHOOSING?
            </span>

            <h2 className="mt-3 max-w-[700px] text-[32px] font-bold leading-[.98] tracking-[-.055em] text-[#073d2d] sm:text-[40px] lg:text-[50px]">
              Tell us what your site requires.
            </h2>

            <p className="mt-4 max-w-[560px] text-[13px] leading-[1.7] text-[#655a39] sm:text-[14px]">
              Share your location, application and capacity requirement. Our
              team can help identify the appropriate equipment.
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 bg-[#073d2d] px-6 text-[10px] font-extrabold tracking-[.07em] text-white uppercase transition hover:bg-[#0b4b38] sm:w-fit"
          >
            Request a quote
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}