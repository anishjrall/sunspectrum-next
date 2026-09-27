import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import { products, type ProductSlug } from "@/lib/data";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  if (!(slug in products)) {
    notFound();
  }

  const product = products[slug as ProductSlug];

  return (
    <main className="bg-[#f8f8f4] text-[#11211a]">

      {/* PRODUCT HERO */}
      <section className="border-b border-[#dce2dc] bg-white">
        <div className="mx-auto w-[calc(100%-28px)] max-w-[1320px] sm:w-[calc(100%-32px)]">

          {/* Back link */}
          <div className="py-4 sm:py-5">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-[9px] font-extrabold tracking-[.14em] text-[#718078] uppercase transition hover:text-[#073d2d]"
            >
              <ArrowLeftIcon className="h-3.5 w-3.5" />
              All products
            </Link>
          </div>

          <div className="grid overflow-hidden pb-5 sm:pb-6 lg:grid-cols-[1.05fr_.95fr] lg:pb-7">

            {/* IMAGE */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#eef1ed] sm:aspect-video lg:aspect-auto lg:min-h-[540px]">
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />

              <div className="absolute left-3.5 top-3.5 bg-[#073d2d] px-2.5 py-1.5 sm:left-5 sm:top-5 sm:px-3 sm:py-2">
                <span className="text-[8px] font-extrabold tracking-[.16em] text-white uppercase">
                  SUNSPECTRUM
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-center bg-[#f8f8f4] px-0 py-7 sm:px-6 sm:py-9 lg:px-11 lg:py-10 xl:px-14">

              <span className="inline-flex w-fit items-center gap-2 text-[9px] font-extrabold tracking-[.2em] text-[#0b4b38] uppercase">
                <span className="h-px w-6 bg-current" />
                PRODUCT SOLUTION
              </span>

              <h1 className="mt-3.5 max-w-[620px] text-[40px] font-bold leading-[.95] tracking-[-.06em] text-[#073d2d] sm:text-[52px] lg:text-[60px] xl:text-[66px]">
                {product.title}
              </h1>

              <p className="mt-4 max-w-[520px] text-[13px] leading-[1.7] text-[#68736d] sm:text-[14px] sm:leading-[1.75]">
                {product.desc}
              </p>

              {/* QUICK FEATURES */}
              <div className="mt-5 grid grid-cols-1 border-y border-[#dce2dc] sm:grid-cols-2">
                {product.specs.slice(0, 4).map((spec, index) => (
                  <div
                    key={spec}
                    className={`
                      flex items-start gap-2.5 py-3
                      ${index % 2 === 1 ? "sm:border-l sm:border-[#dce2dc] sm:pl-4" : "sm:pr-4"}
                      ${index >= 2 ? "sm:border-t sm:border-[#dce2dc]" : ""}
                    `}
                  >
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#0b4b38]" />

                    <span className="text-[11px] leading-[1.45] text-[#4f5c55]">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="mt-5 grid grid-cols-1 gap-2 sm:flex">
                <a
                  href="tel:+918329298004"
                  className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#073d2d] px-5 text-[10px] font-extrabold tracking-[.07em] text-white uppercase transition hover:bg-[#0b4b38]"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Call us
                </a>

                <a
                  href="tel:+917353131310"
                  className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#cfd7d1] bg-white px-5 text-[10px] font-extrabold tracking-[.07em] text-[#073d2d] uppercase transition hover:border-[#073d2d]"
                >
                  <PhoneIcon className="h-4 w-4" />
                  +91 73531 31310
                </a>

                <a
                  href="https://wa.me/918329298004"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#cfd7d1] bg-white px-5 text-[10px] font-extrabold tracking-[.07em] text-[#073d2d] uppercase transition hover:border-[#073d2d]"
                >
                  <ChatBubbleLeftRightIcon className="h-4 w-4" />
                  WhatsApp
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* SUPPORT NOTE */}
              <div className="mt-3.5 flex items-center gap-2 text-[8px] font-bold tracking-[.08em] text-[#89948e] uppercase">
                <ShieldCheckIcon className="h-3.5 w-3.5 text-[#0b4b38]" />
                Site-specific solutions & support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT OVERVIEW */}
      <section className="border-b border-[#dce2dc] bg-white py-11 sm:py-14 lg:py-16">
        <div className="mx-auto grid w-[calc(100%-28px)] max-w-[1320px] gap-6 sm:w-[calc(100%-32px)] sm:gap-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-16">

          <div>
            <Eyebrow>PRODUCT OVERVIEW</Eyebrow>

            <h2 className="mt-3.5 max-w-[430px] text-[32px] font-bold leading-[.98] tracking-[-.055em] text-[#073d2d] sm:text-[42px] lg:text-[50px]">
              Built around the requirement.
            </h2>
          </div>

          <div className="max-w-[700px]">
            <p className="text-[13px] leading-[1.75] text-[#68736d] sm:text-[15px] sm:leading-[1.8]">
              {product.desc}
            </p>

            <p className="mt-3.5 text-[12px] leading-[1.75] text-[#68736d] sm:text-[13px]">
              SunSpectrum Enterprises helps assess the application,
              site conditions and required capacity before recommending
              the appropriate system.
            </p>

            <Link
              href="/#contact"
              className="mt-5 inline-flex items-center gap-2 text-[9px] font-extrabold tracking-[.12em] text-[#073d2d] uppercase"
            >
              Discuss your requirement
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="bg-[#eef1ed] py-11 sm:py-14 lg:py-16">
        <div className="mx-auto w-[calc(100%-28px)] max-w-[1320px] sm:w-[calc(100%-32px)]">

          <div className="mb-6 sm:mb-8">
            <Eyebrow>PRODUCT DETAILS</Eyebrow>

            <h2 className="mt-3.5 text-[32px] font-bold leading-none tracking-[-.055em] text-[#073d2d] sm:text-[42px] lg:text-[50px]">
              Key features
            </h2>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-[#d3dad3] sm:grid-cols-2 lg:grid-cols-3">
            {product.specs.map((spec, index) => (
              <div
                key={spec}
                className="flex min-h-[105px] items-start gap-3 border-b border-r border-[#d3dad3] bg-white p-4 sm:min-h-[125px] sm:p-5 lg:p-6"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center bg-[#eef1ed] text-[#0b4b38]">
                  <CheckCircleIcon className="h-4 w-4" />
                </span>

                <div>
                  <span className="text-[8px] font-extrabold tracking-[.16em] text-[#929d96]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-1.5 text-[12px] leading-[1.55] text-[#4f5c55] sm:text-[13px]">
                    {spec}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE HANDLE IT */}
      <section className="bg-white py-11 sm:py-14 lg:py-16">
        <div className="mx-auto grid w-[calc(100%-28px)] max-w-[1320px] gap-6 sm:w-[calc(100%-32px)] sm:gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">

          <div>
            <Eyebrow>OUR APPROACH</Eyebrow>

            <h2 className="mt-3.5 max-w-[560px] text-[32px] font-bold leading-[.98] tracking-[-.055em] text-[#073d2d] sm:text-[42px] lg:text-[50px]">
              From selection to support.
            </h2>

            <p className="mt-4 max-w-[560px] text-[12.5px] leading-[1.75] text-[#68736d] sm:text-[13px]">
              We focus on the actual requirement rather than simply
              supplying equipment. The right system depends on the
              application, site conditions and expected outcome.
            </p>
          </div>

          <div className="border-t border-[#dce2dc]">
            {[
              [
                "01",
                "Understand",
                "Understand the site, application and requirement.",
              ],
              [
                "02",
                "Recommend",
                "Identify an appropriate system and scope.",
              ],
              [
                "03",
                "Execute",
                "Coordinate installation, testing and commissioning.",
              ],
              [
                "04",
                "Support",
                "Continue with service and maintenance support.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="grid grid-cols-[30px_1fr] gap-2.5 border-b border-[#dce2dc] py-3.5 sm:grid-cols-[40px_120px_1fr] sm:gap-4 sm:py-4"
              >
                <span className="text-[8px] font-extrabold tracking-[.14em] text-[#d6ad58]">
                  {number}
                </span>

                <h3 className="text-[13px] font-semibold text-[#073d2d] sm:text-[14px]">
                  {title}
                </h3>

                <p className="col-start-2 text-[11px] leading-[1.55] text-[#68736d] sm:col-start-3 sm:text-[11.5px]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#d6ad58] py-10 sm:py-12 lg:py-14">
        <div className="mx-auto flex w-[calc(100%-28px)] max-w-[1320px] flex-col gap-5 sm:w-[calc(100%-32px)] sm:gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">

          <div>
            <span className="text-[8px] font-extrabold tracking-[.2em] text-[#6a572b] uppercase">
              NEED THIS SYSTEM?
            </span>

            <h2 className="mt-2.5 max-w-[650px] text-[31px] font-bold leading-[.98] tracking-[-.055em] text-[#073d2d] sm:text-[40px] lg:text-[48px]">
              Let&apos;s discuss your requirement.
            </h2>

            <p className="mt-2.5 max-w-[520px] text-[11.5px] leading-[1.65] text-[#655a39] sm:text-[12px]">
              Tell us about your site, application and expected requirement.
              Our team can help define the appropriate scope.
            </p>
          </div>

          <div className="grid shrink-0 grid-cols-1 gap-2 sm:flex">
            <a
              href="tel:+918329298004"
              className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#073d2d] px-5 text-[10px] font-extrabold tracking-[.07em] text-white uppercase"
            >
              <PhoneIcon className="h-4 w-4" />
              Call us
            </a>

            <Link
              href="/#contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#9d884d] px-5 text-[10px] font-extrabold tracking-[.07em] text-[#073d2d] uppercase"
            >
              Request a quote
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[8px] font-extrabold tracking-[.2em] text-[#718078] uppercase sm:text-[9px]">
      <span className="h-px w-6 bg-current" />
      {children}
    </span>
  );
}