"use client";

import { useState } from "react";

export default function FloatingEnquiry() {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = `Hello SunSpectrum Enterprises,

I would like to make an enquiry.

Name: ${name}
Phone: ${phone}
Requirement: ${requirement}`;

    const whatsappUrl = `https://wa.me/918329298004?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      {/* Enquiry popup */}
      {open && (
        <div
          className="
            fixed
            bottom-[76px]
            right-3
            z-[80]

            w-[calc(100vw-24px)]
            max-w-[305px]

            rounded-[14px]
            border border-black/5
            bg-white
            p-3.5
            text-[#11211a]

            shadow-[0_18px_55px_rgba(8,32,22,.20)]

            max-h-[calc(100dvh-92px)]
            overflow-y-auto

            sm:right-[25px]
            sm:bottom-[98px]
            sm:max-w-[335px]
            sm:p-[22px]
            sm:max-h-none
            sm:overflow-visible
          "
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close enquiry popup"
            className="
              absolute
              right-2
              top-2
              grid
              h-8
              w-8
              place-items-center
              text-[#66736b]
              transition
              hover:text-[#073d2d]
            "
          >
            <CloseIcon />
          </button>

          {/* Brand */}
          <div className="flex items-center gap-2.5 pr-7">
            <div
              className="
                grid
                h-8
                w-8
                shrink-0
                place-items-center
                rounded-full
                bg-[#eef1ed]
                text-[#073d2d]

                sm:h-9
                sm:w-9
              "
            >
              <MessageIcon />
            </div>

            <div>
              <strong
                className="
                  block
                  text-[13px]
                  leading-none
                  tracking-[-.03em]

                  sm:text-[14px]
                "
              >
                SunSpectrum
              </strong>

              <span
                className="
                  mt-1
                  block
                  text-[6px]
                  font-extrabold
                  tracking-[.20em]
                  text-[#78837d]

                  sm:text-[7px]
                "
              >
                ENERGY · WATER · ENGINEERING
              </span>
            </div>
          </div>

          {/* Heading */}
          <h3
            className="
              mt-4
              text-[18px]
              font-extrabold
              leading-[1.1]
              tracking-[-.04em]

              sm:mt-5
              sm:text-[20px]
            "
          >
            Have a requirement?
          </h3>

          <p
            className="
              mt-1.5
              text-[11px]
              leading-[1.5]
              text-[#657169]

              sm:mt-2
              sm:text-[13px]
              sm:leading-[1.6]
            "
          >
            Tell us what you need and we&apos;ll help you find the right
            solution.
          </p>

          {/* Services */}
          <div
            className="
              my-3
              grid
              gap-1.5

              sm:my-4
              sm:gap-2
            "
          >
            {[
              "Solar & energy systems",
              "Water & pumping solutions",
              "EPC & engineering",
            ].map((item) => (
              <span
                key={item}
                className="
                  flex
                  items-center
                  gap-1.5
                  text-[10px]
                  leading-[1.3]
                  text-[#58655e]

                  sm:gap-2
                  sm:text-[12px]
                "
              >
                <CheckIcon />
                {item}
              </span>
            ))}
          </div>

          {/* Enquiry form */}
          <form onSubmit={handleSubmit} className="grid gap-1.5 sm:gap-2">
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              required
              className="
                h-9
                w-full
                border
                border-[#d7ddd8]
                bg-[#fafbf9]
                px-2.5
                text-[10px]
                text-[#11211a]
                outline-none
                placeholder:text-[#929d96]
                focus:border-[#073d2d]

                sm:h-11
                sm:px-3
                sm:text-[11px]
              "
            />

            <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Phone number"
              required
              className="
                h-9
                w-full
                border
                border-[#d7ddd8]
                bg-[#fafbf9]
                px-2.5
                text-[10px]
                text-[#11211a]
                outline-none
                placeholder:text-[#929d96]
                focus:border-[#073d2d]

                sm:h-11
                sm:px-3
                sm:text-[11px]
              "
            />

            <textarea
              value={requirement}
              onChange={(event) => setRequirement(event.target.value)}
              placeholder="What do you need?"
              required
              rows={2}
              className="
                w-full
                resize-none
                border
                border-[#d7ddd8]
                bg-[#fafbf9]
                px-2.5
                py-2
                text-[10px]
                leading-[1.4]
                text-[#11211a]
                outline-none
                placeholder:text-[#929d96]
                focus:border-[#073d2d]

                sm:px-3
                sm:py-2.5
                sm:text-[11px]
              "
            />

            <button
              type="submit"
              className="
                flex
                min-h-10
                items-center
                justify-center
                gap-1.5
                bg-[#073d2d]
                px-2
                text-[9px]
                font-extrabold
                tracking-[.04em]
                text-white
                uppercase
                transition
                hover:bg-[#0b4b38]

                sm:min-h-12
                sm:gap-2
                sm:text-[10px]
              "
            >
              <MessageIcon small />
              Send Enquiry on WhatsApp
            </button>
          </form>

          {/* Call */}
          <a
            href="tel:+918329298004"
            className="
              mt-1.5
              flex
              min-h-10
              items-center
              justify-center
              gap-1.5
              border
              border-[#d7ddd8]
              text-[10px]
              font-extrabold
              text-[#073d2d]
              transition
              hover:bg-[#f5f7f4]

              sm:mt-2
              sm:min-h-12
              sm:gap-2
              sm:text-[11px]
            "
          >
            <PhoneIcon />
            Call us
          </a>

          <p
            className="
              mt-2
              text-center
              text-[8px]
              text-[#8a938e]

              sm:mt-3
              sm:text-[10px]
            "
          >
            Usually replies quickly
          </p>
        </div>
      )}

      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close enquiry" : "Open enquiry"}
        className={`
          fixed
          bottom-3
          right-3
          z-[81]
          grid
          h-12
          w-12
          place-items-center
          rounded-full
          border
          shadow-[0_8px_25px_rgba(0,0,0,.16)]
          transition

          sm:bottom-[26px]
          sm:right-[27px]
          sm:h-[58px]
          sm:w-[58px]

          ${
            open
              ? "border-[#dce2dc] bg-white text-[#073d2d]"
              : "border-white/35 bg-[#073d2d] text-white"
          }
        `}
      >
        {open ? <CloseIcon /> : <MessageIcon />}
      </button>
    </>
  );
}

/* ---------------- Icons ---------------- */

function MessageIcon({ small = false }: { small?: boolean }) {
  return (
    <svg
      width={small ? 13 : 17}
      height={small ? 13 : 17}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5c-1.3 0-2.5-.3-3.6-.9L4 19l.9-4.1A7.4 7.4 0 0 1 5 11.5 7.5 7.5 0 1 1 20 11.5Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 4.5 8 3l2.2 5-2 1.5a14 14 0 0 0 6.3 6.3l1.5-2 5 2.2-1.5 3c-.4.8-1.3 1.2-2.2 1-8.1-1.8-13.6-7.3-15.4-15.4-.2-.9.2-1.8 1.1-2.1Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#20a267"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}