"use client";

import {
  ArrowUpRightIcon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { site } from "@/lib/data";
import { createEnquiryMessage } from "@/lib/enquiry";

type ProductEnquiryActionsProps = {
  productName: string;
};

function createMessage(productName: string) {
  return createEnquiryMessage([["Product", productName]]);
}

export default function ProductEnquiryActions({
  productName,
}: ProductEnquiryActionsProps) {
  const [submitting, setSubmitting] = useState(false);
  const submittingRef = useRef(false);

  function openWhatsApp() {
    if (submittingRef.current) {
      return;
    }

    submittingRef.current = true;
    setSubmitting(true);
    const message = createMessage(productName);
    window.open(
      `${site.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function openSms() {
    if (submittingRef.current) {
      return;
    }

    submittingRef.current = true;
    setSubmitting(true);
    const message = createMessage(productName);
    window.location.href = `${site.sms}?body=${encodeURIComponent(
      message
    )}`;
  }

  const buttonClass =
    "inline-flex min-h-11 items-center justify-center gap-2 border border-[#cfd7d1] bg-white px-5 text-[10px] font-extrabold tracking-[.07em] text-[#073d2d] uppercase transition hover:border-[#073d2d]";

  return (
    <>
      <button
        type="button"
        onClick={openWhatsApp}
        disabled={submitting}
        className={buttonClass}
      >
        <ChatBubbleLeftRightIcon className="h-4 w-4" />
        WhatsApp
        <ArrowUpRightIcon className="h-3.5 w-3.5" />
      </button>

      <button
        type="button"
        onClick={openSms}
        disabled={submitting}
        className={buttonClass}
      >
        <DevicePhoneMobileIcon className="h-4 w-4" />
        SMS
      </button>
    </>
  );
}
