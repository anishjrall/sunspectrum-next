'use client';
import { useState } from 'react';
import { faqs } from '@/lib/data';
export default function FAQList() { const [active,setActive]=useState<number|null>(0); return <div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-row ${active===i?'is-open':''}`} key={q}><button onClick={()=>setActive(active===i?null:i)} aria-expanded={active===i}><span>{q}</span><span className="faq-plus" aria-hidden="true">{active===i?'−':'+'}</span></button>{active===i&&<div className="faq-answer"><p>{a}</p></div>}</div>)}</div> }
