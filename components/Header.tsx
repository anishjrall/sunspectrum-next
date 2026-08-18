'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="header-inner">
      <Link href="/" className="brand" onClick={() => setOpen(false)}>
        <img src="/images/logo/sunspectrum-enterprises-logo.png" alt="Sunspectrum Enterprises logo" className="brand-logo" />
        <span className="brand-text"><strong>Sunspectrum</strong><small>ENTERPRISES</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/">Home</Link><Link href="/#services">Services</Link><Link href="/products">Products</Link><Link href="/#projects">Projects</Link><Link href="/about">About</Link><Link href="/faq">FAQ</Link><Link href="/#contact">Contact</Link>
      </nav>
      <div className="header-actions"><a href="tel:+918329298004" className="header-phone">+91 83292 98004</a><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? 'Close' : 'Menu'}</button></div>
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation"><Link href="/" onClick={() => setOpen(false)}>Home</Link><Link href="/#services" onClick={() => setOpen(false)}>Services</Link><Link href="/products" onClick={() => setOpen(false)}>Products</Link><Link href="/#projects" onClick={() => setOpen(false)}>Projects</Link><Link href="/about" onClick={() => setOpen(false)}>About</Link><Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link><Link href="/#contact" onClick={() => setOpen(false)}>Contact</Link></nav>}
  </header>;
}
