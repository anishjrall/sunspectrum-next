let issuedReferenceNumbers = new Set<string>();

export function createReferenceNumber() {
  const today = new Date();
  const datePart = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("");

  let referenceNumber = "";
  do {
    referenceNumber = `${datePart}${Math.floor(1000 + Math.random() * 9000)}`;
  } while (issuedReferenceNumbers.has(referenceNumber));

  issuedReferenceNumbers.add(referenceNumber);

  if (issuedReferenceNumbers.size > 1000) {
    issuedReferenceNumbers = new Set(
      Array.from(issuedReferenceNumbers).slice(-500)
    );
  }

  return referenceNumber;
}

export function createEnquiryMessage(
  details: Array<[label: string, value: string]>
) {
  return `Hello SunSpectrum Enterprises,

I would like to make an enquiry.

${details.map(([label, value]) => `${label}: ${value}`).join("\n")}
Refer num- ${createReferenceNumber()}`;
}
