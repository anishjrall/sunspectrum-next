"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/data";

const logoPath = "/images/logo/sunspectrum-enterprises-logo.png";

const navItems = [
  ["Services", "/#services"],
  ["Products", "/products"],
  ["Industries", "/#industries"],
  ["Projects", "/#projects"],
  ["About", "/#about"],
  ["Contact", "/#contact"],
] as const;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleQuoteClick(event: React.MouseEvent<HTMLAnchorElement>) {
    closeMenu();

    if (window.location.pathname !== "/") {
      return;
    }

    event.preventDefault();
    window.history.pushState(null, "", "/#contact");
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <header className="relative z-50">
      {/* Top strip */}
      <div className="h-[32px] bg-[#073d2d] text-white sm:h-[38px]">
        <div className="mx-auto flex h-full w-[calc(100%-24px)] max-w-[1320px] items-center justify-between sm:w-[calc(100%-32px)]">
          <div className="flex items-center gap-2 text-[7px] font-bold tracking-[.12em] uppercase sm:gap-[13px] sm:text-[10px] sm:tracking-[.18em]">
            <span>Solar</span>

            <i className="h-1 w-1 shrink-0 rounded-full bg-[#d6ad58]" />

            <span>Water</span>

            <i className="h-1 w-1 shrink-0 rounded-full bg-[#d6ad58]" />

            <span>Engineering</span>
          </div>

          <div className="flex shrink-0 items-center gap-2 text-[8px] font-bold tracking-[.04em] sm:gap-3 sm:text-[10px] sm:tracking-[.08em]">
            <a href={site.phoneHref}>{site.phone}</a>
            <span className="text-[#d6ad58]">·</span>
            <a href={site.secondaryPhoneHref}>{site.secondaryPhone}</a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="relative border-b border-[#dce2dc] bg-[#f8f8f4]/95 backdrop-blur-xl">
        <div
          className="
            mx-auto
            flex
            min-h-[62px]
            w-[calc(100%-24px)]
            max-w-[1320px]
            items-center
            justify-between
            gap-3

            sm:w-[calc(100%-32px)]
            sm:min-h-[72px]

            lg:min-h-[84px]
            lg:gap-[30px]
          "
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-w-0 shrink items-center gap-2 sm:gap-[11px]"
          >
            <Image
              src={logoPath}
              alt="SunSpectrum Enterprises"
              width={49}
              height={49}
              priority
              className="
                h-[36px]
                w-[36px]
                shrink-0
                object-contain

                sm:h-[43px]
                sm:w-[43px]

                lg:h-[49px]
                lg:w-[49px]
              "
            />

            <span className="flex min-w-0 flex-col">
              <strong
                className="
                  text-[14px]
                  leading-none
                  tracking-[-.045em]
                  sm:text-[16px]
                  lg:text-[18px]
                "
              >
                SunSpectrum
              </strong>

              <small
                className="
                  mt-1
                  text-[5.5px]
                  font-extrabold
                  tracking-[.20em]
                  text-[#69756e]
                  sm:text-[6px]
                  lg:mt-1.5
                  lg:text-[8px]
                  lg:tracking-[.28em]
                "
              >
                ENTERPRISES
              </small>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-7">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="
                  relative
                  py-[30px]
                  text-[11px]
                  font-bold
                  text-[#4f5c55]

                  after:absolute
                  after:bottom-[21px]
                  after:left-0
                  after:right-full
                  after:h-0.5
                  after:bg-[#073d2d]
                  after:transition-all

                  hover:text-[#073d2d]
                  hover:after:right-0

                  xl:text-[12px]
                "
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop quote */}
          <Link
            href="/#contact"
            onClick={handleQuoteClick}
            className="
              hidden
              min-h-12
              shrink-0
              items-center
              justify-center
              bg-[#073d2d]
              px-[21px]
              text-[10px]
              font-extrabold
              tracking-[.1em]
              text-white
              uppercase
              transition
              hover:bg-[#0b4b38]
              lg:inline-flex
            "
          >
            Get a quote
          </Link>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quote */}
            <Link
              href="/#contact"
              onClick={handleQuoteClick}
              className="
                inline-flex
                min-h-9
                items-center
                justify-center
                bg-[#073d2d]
                px-3
                text-[8px]
                font-extrabold
                tracking-[.06em]
                text-white
                uppercase

                sm:min-h-10
                sm:px-3.5
                sm:text-[9px]
              "
            >
              Get a quote
            </Link>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              className="
                grid
                h-9
                w-9
                shrink-0
                place-items-center
                rounded-[7px]
                border
                border-[#dce2dc]
                bg-white
                text-[#073d2d]
                transition
                hover:bg-[#eef1ed]

                sm:h-10
                sm:w-10
                sm:rounded-[8px]
              "
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`
            absolute
            right-3
            top-[calc(100%+8px)]
            z-50
            w-[280px]
            overflow-hidden
            rounded-[12px]
            border
            border-[#dce2dc]
            bg-[#f8f8f4]
            shadow-[0_16px_40px_rgba(7,61,45,.15)]
            transition-all
            duration-200

            sm:right-4
            sm:w-[300px]
            sm:rounded-[13px]

            lg:hidden

            ${
              menuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0"
            }
          `}
        >
          <div className="px-4 py-2.5 sm:px-5 sm:py-3">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="
                  flex
                  min-h-[41px]
                  items-center
                  justify-between
                  border-b
                  border-[#e1e5e1]
                  text-[11px]
                  font-bold
                  text-[#405049]
                  transition
                  hover:text-[#073d2d]

                  last:border-b-0

                  sm:min-h-[44px]
                  sm:text-[12px]
                "
              >
                <span>{label}</span>

                <ArrowIcon />
              </Link>
            ))}

            {/* Quote */}
            <Link
              href="/#contact"
              onClick={closeMenu}
              className="
                mt-3
                flex
                min-h-10
                items-center
                justify-center
                rounded-[6px]
                bg-[#073d2d]
                text-[9px]
                font-extrabold
                tracking-[.08em]
                text-white
                uppercase
                transition
                hover:bg-[#0b4b38]

                sm:mt-3.5
                sm:min-h-11
              "
            >
              Request a quote
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

/* Simple inline SVG icons */

function MenuIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-[#89958e]"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}