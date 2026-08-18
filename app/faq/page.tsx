import FAQList from '@/components/FAQList';
export const metadata={title:'FAQ'};
export default function FAQPage(){return <main><section className="page-hero"><div className="container"><span className="eyebrow">FAQ</span><h1>Clear answers before you call.</h1><p>Common questions about solar, water treatment, installation, AMC and service.</p></div></section><section className="section"><div className="container"><div className="faq-layout"><div className="faq-intro"><span className="eyebrow">Questions</span><h2>What clients want to know.</h2></div><FAQList/></div></div></section></main>}
