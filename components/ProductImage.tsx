'use client';
import { useState } from 'react';
export default function ProductImage({src,alt}:{src:string;alt:string}){const [failed,setFailed]=useState(false);return <div className="product-image">{!failed?<img src={src} alt={alt} onError={()=>setFailed(true)}/>:<div className="image-fallback"><span>Product photography</span><strong>{alt}</strong><small>Copy the existing /images directory into public/images to use the original product media.</small></div>}</div>}
