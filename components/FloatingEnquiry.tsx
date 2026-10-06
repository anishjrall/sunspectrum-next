
"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/data";
import { createEnquiryMessage } from "@/lib/enquiry";

export default function FloatingEnquiry() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const submittingRef = useRef(false);
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    setOpen(true);
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedName = name.trim();
    const normalizedPhone = phone.trim();
    const normalizedRequirement = requirement.trim();

    if (
      submittingRef.current
    ) {
      return;
    }

    if (!normalizedPhone || !/^[6-9]\d{9}$/.test(normalizedPhone)) {
      setPhoneError("Enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!normalizedName || !normalizedRequirement) {
      return;
    }

    submittingRef.current = true;
    setSubmitting(true);

    const message = createEnquiryMessage([
      ["Name", normalizedName],
      ["Phone", normalizedPhone],
      ["Requirement", normalizedRequirement],
    ]);

    const submitter = (event.nativeEvent as SubmitEvent).submitter;
    const channel =
      submitter?.getAttribute("value") === "sms" ? "sms" : "whatsapp";
    const enquiryUrl =
      channel === "sms"
        ? `${site.sms}?body=${encodeURIComponent(message)}`
        : `${site.whatsapp}?text=${encodeURIComponent(message)}`;

    if (channel === "sms") {
      window.location.href = enquiryUrl;
    } else {
      window.open(enquiryUrl, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <>
      {/* Enquiry popup */}
      {open && (
        <div
          className="
            fixed
            bottom-[70px]
            right-3
            z-[80]

            w-[calc(100vw-24px)]
            max-w-[300px]

            max-h-[calc(100vh-90px)]
            overflow-y-auto

            rounded-2xl
            border
            border-black/5
            bg-white
            p-3

            text-[#11211a]
            shadow-[0_18px_55px_rgba(8,32,22,.20)]

            sm:right-[27px]
            sm:bottom-[94px]
            sm:w-[310px]
            sm:max-w-[310px]
            sm:max-h-[calc(100vh-120px)]
            sm:overflow-y-auto
            sm:rounded-[16px]
            sm:p-4
          "
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close enquiry"
            className="
              absolute
              right-2
              top-2
              grid
              h-7
              w-7
              place-items-center
              text-[#66736b]
              transition
              hover:text-[#073d2d]
            "
          >
            <CloseIcon />
          </button>

          {/* Brand */}
          <div className="flex items-center gap-2 pr-6">
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
              "
            >
              <MessageIcon />
            </div>

            <div>
              <strong className="block text-[13px] font-extrabold leading-none">
                SunSpectrum
              </strong>

              <span className="mt-1 block text-[6px] font-extrabold tracking-[.18em] text-[#78837d]">
                ENERGY · WATER · ENGINEERING
              </span>
            </div>
          </div>

          {/* Heading */}
          <h3
            className="
              mt-3
              text-[17px]
              font-extrabold
              leading-tight
              tracking-[-.03em]
            "
          >
            Have a requirement?
          </h3>

          <p className="mt-1 text-[10px] leading-[1.45] text-[#657169]">
            Tell us what you need and we&apos;ll help you find the right
            solution.
          </p>

          {/* Services */}
          <div className="my-2.5 grid gap-1">
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
                  text-[9px]
                  leading-tight
                  text-[#58655e]
                "
              >
                <CheckIcon />
                {item}
              </span>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="grid gap-1.5">
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
              "
            />

            <input
              type="tel"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
                setPhoneError("");
              }}
              placeholder="Phone number"
              required
              inputMode="numeric"
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
              "
            />
            {phoneError && (
              <p className="text-[9px] text-red-700" role="alert">
                {phoneError}
              </p>
            )}

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
                leading-[1.35]
                text-[#11211a]
                outline-none
                placeholder:text-[#929d96]
                focus:border-[#073d2d]
              "
            />

            <button
              type="submit"
              value="whatsapp"
              disabled={submitting}
              className="
                flex
                min-h-9
                items-center
                justify-center
                gap-1.5
                bg-[#073d2d]
                px-2
                text-[9px]
                font-extrabold
                tracking-[.03em]
                text-white
                uppercase
                transition
                hover:bg-[#0b4b38]
              "
            >
              <MessageIcon small />
              Send Enquiry on WhatsApp
            </button>

            <button
              type="submit"
              value="sms"
              disabled={submitting}
              className="
                flex
                min-h-9
                items-center
                justify-center
                gap-1.5
                border
                border-[#d7ddd8]
                px-2
                text-[9px]
                font-extrabold
                tracking-[.03em]
                text-[#073d2d]
                uppercase
                transition
                hover:bg-[#f5f7f4]
              "
            >
              <MessageIcon small />
              Send Enquiry by SMS
            </button>
          </form>

          {/* Call buttons */}
          <div className="mt-1.5 grid grid-cols-2 gap-1.5">
            <a
              href={site.phoneHref}
              className="
                flex
                min-h-9
                items-center
                justify-center
                gap-1
                border
                border-[#d7ddd8]
                text-[9px]
                font-extrabold
                text-[#073d2d]
                transition
                hover:bg-[#f5f7f4]
              "
            >
              <PhoneIcon />
              Call us
            </a>

            <a
              href={site.secondaryPhoneHref}
              className="
                flex
                min-h-9
                items-center
                justify-center
                gap-1
                border
                border-[#d7ddd8]
                text-[9px]
                font-extrabold
                text-[#073d2d]
                transition
                hover:bg-[#f5f7f4]
              "
            >
              <PhoneIcon />
              {site.secondaryPhone}
            </a>
          </div>

          <p className="mt-1.5 text-center text-[7px] text-[#8a938e]">
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
      width="13"
      height="13"
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
      width="12"
      height="12"
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
      width="16"
      height="16"
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
