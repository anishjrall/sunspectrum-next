import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, ProductSlug, site } from '@/lib/data';
import ProductImage from '@/components/ProductImage';
export function generateStaticParams(){return Object.keys(products).map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=products[slug as ProductSlug];return p?{title:p.title,description:p.desc}:{title:'Product'};}
export default async function ProductPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=products[slug as ProductSlug];if(!p)return notFound();return <main><section className="product-detail"><div className="container"><div className="product-detail-grid"><ProductImage src={p.image} alt={p.title}/><div className="product-detail-copy"><span className="eyebrow">Product / {slug}</span><h1>{p.title}</h1><p>{p.desc}</p><ul className="spec-list">{p.specs.map(s=><li key={s}>{s}</li>)}</ul><div className="product-actions"><a className="button button-green" href={`${site.whatsapp}?text=${encodeURIComponent(`Hello Sunspectrum Enterprises, I want to enquire about ${p.title}.`)}`}>Enquire on WhatsApp ↗</a><Link className="button button-light" href="/products">All products</Link></div></div></div></div></section></main>}
