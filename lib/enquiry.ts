export function createEnquiryMessage(
  details: Array<[label: string, value: string]>
) {
  return `Hello SunSpectrum Enterprises,

I would like to make an enquiry.

${details.map(([label, value]) => `${label}: ${value}`).join("\n")}`;
}
