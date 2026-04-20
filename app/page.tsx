"use client";

import { useEffect, useState, useRef } from "react";


// SVG Wireframe decorations
const BlackHoleGrid = () => (
  <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.12 }}>
    <ellipse cx="160" cy="160" rx="140" ry="40" stroke="#1A3D6E" strokeWidth="0.8"/>
    <ellipse cx="160" cy="160" rx="110" ry="30" stroke="#1A3D6E" strokeWidth="0.8"/>
    <ellipse cx="160" cy="160" rx="80" ry="22" stroke="#1A3D6E" strokeWidth="0.8"/>
    <ellipse cx="160" cy="160" rx="50" ry="14" stroke="#1A3D6E" strokeWidth="0.8"/>
    <ellipse cx="160" cy="160" rx="20" ry="6" stroke="#1A3D6E" strokeWidth="0.8"/>
    <line x1="20" y1="160" x2="300" y2="160" stroke="#1A3D6E" strokeWidth="0.5"/>
    <line x1="160" y1="20" x2="160" y2="300" stroke="#1A3D6E" strokeWidth="0.5"/>
    <line x1="50" y1="80" x2="270" y2="240" stroke="#1A3D6E" strokeWidth="0.4"/>
    <line x1="50" y1="240" x2="270" y2="80" stroke="#1A3D6E" strokeWidth="0.4"/>
    <circle cx="160" cy="160" r="18" stroke="#1A3D6E" strokeWidth="1.2"/>
    <circle cx="160" cy="160" r="8" fill="#1A3D6E" fillOpacity="0.3"/>
  </svg>
);

const OrbitalDiagram = () => (
  <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.12 }}>
    <circle cx="130" cy="130" r="20" stroke="#1A3D6E" strokeWidth="1"/>
    <ellipse cx="130" cy="130" rx="70" ry="25" stroke="#1A3D6E" strokeWidth="0.7" transform="rotate(-30 130 130)"/>
    <ellipse cx="130" cy="130" rx="100" ry="35" stroke="#1A3D6E" strokeWidth="0.7" transform="rotate(20 130 130)"/>
    <ellipse cx="130" cy="130" rx="120" ry="45" stroke="#1A3D6E" strokeWidth="0.7" transform="rotate(60 130 130)"/>
    <circle cx="185" cy="95" r="4" fill="#1A3D6E" fillOpacity="0.6"/>
    <circle cx="60" cy="155" r="3" fill="#1A3D6E" fillOpacity="0.6"/>
    <circle cx="200" cy="170" r="2.5" fill="#1A3D6E" fillOpacity="0.5"/>
  </svg>
);

const TopoHead = () => (
  <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.11 }}>
    <path d="M140 40 C180 40 220 70 230 110 C240 150 220 190 200 210 C180 230 160 240 140 240 C120 240 100 230 80 210 C60 190 40 150 50 110 C60 70 100 40 140 40Z" stroke="#1A3D6E" strokeWidth="0.8" fill="none"/>
    <path d="M140 55 C175 55 210 80 218 115 C226 150 208 186 190 204 C172 222 156 230 140 230 C124 230 108 222 90 204 C72 186 54 150 62 115 C70 80 105 55 140 55Z" stroke="#1A3D6E" strokeWidth="0.8" fill="none"/>
    <path d="M140 70 C170 70 200 90 206 120 C212 150 196 182 180 198 C164 214 152 220 140 220 C128 220 116 214 100 198 C84 182 68 150 74 120 C80 90 110 70 140 70Z" stroke="#1A3D6E" strokeWidth="0.8" fill="none"/>
    <path d="M140 90 C162 90 186 106 190 128 C194 150 182 174 168 188 C154 202 147 206 140 206 C133 206 126 202 112 188 C98 174 86 150 90 128 C94 106 118 90 140 90Z" stroke="#1A3D6E" strokeWidth="0.8" fill="none"/>
    <path d="M140 110 C155 110 170 122 172 136 C174 150 166 164 156 172 C146 180 143 182 140 182 C137 182 134 180 124 172 C114 164 106 150 108 136 C110 122 125 110 140 110Z" stroke="#1A3D6E" strokeWidth="0.8" fill="none"/>
  </svg>
);

const HUDBrackets = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.12 }}>
    <path d="M10 40 L10 10 L40 10" stroke="#1A3D6E" strokeWidth="1.5"/>
    <path d="M160 10 L190 10 L190 40" stroke="#1A3D6E" strokeWidth="1.5"/>
    <path d="M10 160 L10 190 L40 190" stroke="#1A3D6E" strokeWidth="1.5"/>
    <path d="M160 190 L190 190 L190 160" stroke="#1A3D6E" strokeWidth="1.5"/>
    <circle cx="100" cy="100" r="30" stroke="#1A3D6E" strokeWidth="0.6" strokeDasharray="4 3"/>
    <line x1="100" y1="60" x2="100" y2="140" stroke="#1A3D6E" strokeWidth="0.5"/>
    <line x1="60" y1="100" x2="140" y2="100" stroke="#1A3D6E" strokeWidth="0.5"/>
  </svg>
);

const WormholeFunnel = () => (
  <svg width="240" height="340" viewBox="0 0 240 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.11 }}>
    <ellipse cx="120" cy="40" rx="100" ry="20" stroke="#1A3D6E" strokeWidth="0.8"/>
    <ellipse cx="120" cy="90" rx="80" ry="16" stroke="#1A3D6E" strokeWidth="0.8"/>
    <ellipse cx="120" cy="140" rx="60" ry="12" stroke="#1A3D6E" strokeWidth="0.8"/>
    <ellipse cx="120" cy="190" rx="40" ry="9" stroke="#1A3D6E" strokeWidth="0.8"/>
    <ellipse cx="120" cy="240" rx="24" ry="6" stroke="#1A3D6E" strokeWidth="0.8"/>
    <ellipse cx="120" cy="290" rx="12" ry="4" stroke="#1A3D6E" strokeWidth="0.8"/>
    <line x1="20" y1="40" x2="108" y2="290" stroke="#1A3D6E" strokeWidth="0.5"/>
    <line x1="220" y1="40" x2="132" y2="290" stroke="#1A3D6E" strokeWidth="0.5"/>
  </svg>
);

const Crosshair = () => (
  <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.12 }}>
    <circle cx="120" cy="120" r="80" stroke="#1A3D6E" strokeWidth="0.8"/>
    <circle cx="120" cy="120" r="50" stroke="#1A3D6E" strokeWidth="0.8"/>
    <circle cx="120" cy="120" r="20" stroke="#1A3D6E" strokeWidth="1"/>
    <line x1="20" y1="120" x2="90" y2="120" stroke="#1A3D6E" strokeWidth="1"/>
    <line x1="150" y1="120" x2="220" y2="120" stroke="#1A3D6E" strokeWidth="1"/>
    <line x1="120" y1="20" x2="120" y2="90" stroke="#1A3D6E" strokeWidth="1"/>
    <line x1="120" y1="150" x2="120" y2="220" stroke="#1A3D6E" strokeWidth="1"/>
    <line x1="50" y1="50" x2="68" y2="68" stroke="#1A3D6E" strokeWidth="0.5"/>
    <line x1="190" y1="50" x2="172" y2="68" stroke="#1A3D6E" strokeWidth="0.5"/>
    <line x1="50" y1="190" x2="68" y2="172" stroke="#1A3D6E" strokeWidth="0.5"/>
    <line x1="190" y1="190" x2="172" y2="172" stroke="#1A3D6E" strokeWidth="0.5"/>
  </svg>
);

const Barcode = () => (
  <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.15 }}>
    {[0,4,7,11,15,18,22,26,29,33,37,40,44,48,51,55,59,62,66,70,74,77,81,85,88,92,96,99,103,107,110,114,118,121,125,129,132,136,140,143,147,151,154,158,162,165,169,173].map((x, i) => (
      <rect key={i} x={x} y="5" width={i % 3 === 0 ? 2 : 1} height="40" fill="#0C0B08"/>
    ))}
    <text x="90" y="58" textAnchor="middle" fontSize="7" fontFamily="monospace" fill="#0C0B08">JOHN-DUAN-2025</text>
  </svg>
);

// Social media logos
const logos: Record<string, React.ReactElement> = {
  beehiiv: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c1.036 0 1.875.84 1.875 1.875S13.036 8.25 12 8.25 10.125 7.41 10.125 6.375 10.964 4.5 12 4.5zm4.5 10.125c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5v-1.5c0-.621.504-1.125 1.125-1.125h6.75c.621 0 1.125.504 1.125 1.125v1.5zm-1.125-4.5H8.625A1.125 1.125 0 0 1 7.5 9c0-.621.504-1.125 1.125-1.125h6.75C16.496 7.875 17 8.379 17 9a1.125 1.125 0 0 1-1.125 1.125z"/></svg>
  ),
  instagram: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
  ),
  youtube: (
    <svg width="36" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
  ),
  twitter: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.845L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  ),
  linkedin: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  ),
  substack: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
  ),
  email: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
  ),
  tiktok: (
    <svg width="28" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
  ),
};

// Ticker Bar
function TickerBar() {
  const text = "SUBSCRIBE TO THE BECOMING NEWSLETTER · DISCOVER YOUR OUTSTANDING PASSION PROJECT · WATCH MY VIDEO ESSAYS & DOCUMENTARIES ON YOUTUBE · USE MY SOFTWARES TO STOP PROCRASTINATING AND START CREATING · ";
  const repeated = text.repeat(3);
  return (
    <div style={{ background: "#0C0B08", color: "#F4F1EA", overflow: "hidden", whiteSpace: "nowrap", position: "relative", zIndex: 50 }}>
      <div
        style={{
          display: "inline-block",
          animation: "marquee 40s linear infinite",
          fontFamily: "var(--font-ibm-mono)",
          fontSize: "11px",
          letterSpacing: "0.08em",
          padding: "10px 0",
        }}
      >
        {repeated}{repeated}
      </div>
    </div>
  );
}

// Sticky Nav
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(244,241,234,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(12,11,8,0.1)" : "1px solid transparent",
        transition: "all 0.3s ease",
        padding: "0 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
        <a href="#" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem", fontWeight: 600, color: "#0C0B08", textDecoration: "none", letterSpacing: "0.02em" }}>
          John Duan
        </a>
        {/* Desktop nav */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="hidden-mobile">
          {["Creation", "Adventure", "Startup", "Consultancy"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "12px", letterSpacing: "0.08em", color: "#0C0B08", textDecoration: "none", opacity: 0.7, transition: "opacity 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
            >
              {link}
            </a>
          ))}
          <a
            href="https://johnduan-articles.beehiiv.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-ibm-mono)",
              fontSize: "11px",
              letterSpacing: "0.1em",
              color: "#F4F1EA",
              background: "#1A3D6E",
              padding: "8px 20px",
              textDecoration: "none",
              transition: "background 0.2s",
              border: "1px solid #1A3D6E",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#0f2744")}
            onMouseLeave={e => (e.currentTarget.style.background = "#1A3D6E")}
          >
            SUBSCRIBE
          </a>
        </div>
        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px" }}
          className="show-mobile"
          aria-label="Menu"
        >
          <div style={{ width: "22px", height: "2px", background: "#0C0B08", marginBottom: "5px", transition: "all 0.3s" }} />
          <div style={{ width: "22px", height: "2px", background: "#0C0B08", marginBottom: "5px" }} />
          <div style={{ width: "22px", height: "2px", background: "#0C0B08" }} />
        </button>
      </div>
      {menuOpen && (
        <div style={{ background: "#F4F1EA", borderTop: "1px solid rgba(12,11,8,0.1)", padding: "1rem 2rem" }}>
          {["Creation", "Adventure", "Startup", "Consultancy"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ display: "block", fontFamily: "var(--font-ibm-mono)", fontSize: "12px", letterSpacing: "0.08em", color: "#0C0B08", textDecoration: "none", padding: "10px 0", borderBottom: "1px solid rgba(12,11,8,0.08)" }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// Hero
function Hero() {
  return (
    <section
      id="hero"
      style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", padding: "6rem 2rem 4rem" }}
    >
      {/* Dragon illustration */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/dragon.jpg"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "130%",
          width: "auto",
          maxWidth: "55%",
          objectFit: "cover",
          objectPosition: "left top",
          filter: "grayscale(100%) sepia(100%) hue-rotate(190deg) saturate(300%) brightness(0.75) contrast(1.1)",
          mixBlendMode: "multiply",
          opacity: 0.38,
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 50%, transparent 82%), linear-gradient(to right, transparent 0%, black 45%, black 85%, transparent 100%)",
          WebkitMaskComposite: "source-in",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 50%, transparent 82%), linear-gradient(to right, transparent 0%, black 45%, black 85%, transparent 100%)",
          maskComposite: "intersect",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Decorative SVGs */}
      <div style={{ position: "absolute", top: 0, right: 0, pointerEvents: "none", zIndex: 1 }}>
        <BlackHoleGrid />
      </div>
      <div style={{ position: "absolute", bottom: 60, left: 0, pointerEvents: "none", zIndex: 1 }}>
        <OrbitalDiagram />
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "11px", letterSpacing: "0.2em", color: "#1A3D6E", marginBottom: "2rem", opacity: 0.8 }}>
          COMPOUND · CONNECT · CREATE
        </p>

        <div style={{ marginBottom: "0.2rem" }}>
          <h1 className="hero-name-distort" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(4rem, 10vw, 9rem)", fontWeight: 700, lineHeight: 0.88, color: "#0C0B08", letterSpacing: "-0.02em", textTransform: "uppercase" }}>
            John
          </h1>
        </div>
        <div style={{ marginBottom: "2.5rem" }}>
          <h1 className="hero-name-distort" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(4rem, 10vw, 9rem)", fontWeight: 700, lineHeight: 0.88, fontStyle: "italic", color: "#1A3D6E", letterSpacing: "-0.02em", textTransform: "uppercase" }}>
            Duan
          </h1>
        </div>

        <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1rem, 2vw, 1.35rem)", fontWeight: 400, color: "#0C0B08", opacity: 0.75, maxWidth: "480px", lineHeight: 1.5, marginBottom: "2.5rem" }}>
          Creator. Founder. Explorer.<br />I inspire people to see their potential and live extraordinary lives.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          <a
            href="https://johnduan-articles.beehiiv.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "12px", letterSpacing: "0.08em", color: "#F4F1EA", background: "#1A3D6E", padding: "14px 28px", textDecoration: "none", display: "inline-block", transition: "background 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#0f2744")}
            onMouseLeave={e => (e.currentTarget.style.background = "#1A3D6E")}
          >
            Read The Becoming →
          </a>
          <a
            href="https://www.youtube.com/channel/UCB9z6AVOAMBn_ZB4otxylLw"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "12px", letterSpacing: "0.08em", color: "#0C0B08", background: "transparent", padding: "14px 28px", textDecoration: "none", display: "inline-block", border: "1px solid rgba(12,11,8,0.3)", transition: "border-color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "#1A3D6E")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(12,11,8,0.3)")}
          >
            Watch the Work
          </a>
        </div>

        <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
          {[
            { num: "01", label: "Startup in Progress" },
            { num: "∞", label: "Ideas in the Queue" },
          ].map((s) => (
            <div key={s.num} style={{ borderLeft: "2px solid #1A3D6E", paddingLeft: "1rem" }}>
              <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.5rem", fontWeight: 700, color: "#0C0B08", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "10px", letterSpacing: "0.12em", color: "#0C0B08", opacity: 0.5, marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About
function About() {
  const tags = ["Founder", "Adventure Athlete", "Cognitive Science", "Spiritual Growth"];
  return (
    <section id="about" style={{ position: "relative", padding: "8rem 2rem", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, right: 0, pointerEvents: "none", zIndex: 1 }}>
        <TopoHead />
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "11px", letterSpacing: "0.2em", color: "#1A3D6E", marginBottom: "1.5rem", opacity: 0.8 }}>
          // About
        </p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 700, lineHeight: 1.05, color: "#0C0B08", marginBottom: "2.5rem" }}>
          About{" "}
          <em style={{ fontStyle: "italic", color: "#1A3D6E" }}>me</em>
        </h2>
        <div style={{ maxWidth: "680px" }}>
          <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.1rem, 2vw, 1.35rem)", lineHeight: 1.7, color: "#0C0B08", opacity: 0.85, marginBottom: "2.5rem" }}>
            Hey, I&apos;m John. I am an 18-year-old founder, aspiring life scientist and adventure athlete. My work sits at the intersection of spiritual growth, cognitive science, and high-performance living.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  color: "#1A3D6E",
                  border: "1px solid #1A3D6E",
                  padding: "5px 12px",
                  opacity: 0.8,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Creation
function Creation() {
  const cards = [
    { title: "Articles", desc: "Newsletters & blogs via Beehiiv and Substack", href: "https://johnduan-articles.beehiiv.com", external: true },
    { title: "Video Essays & Documentaries", desc: "YouTube", href: "https://youtube.com", external: true },
    { title: "Photography", desc: "Visual documentation of the journey", href: "/photography", external: false },
  ];
  return (
    <section id="creation" style={{ position: "relative", padding: "8rem 2rem", overflow: "hidden", borderTop: "1px solid rgba(12,11,8,0.1)" }}>
      <div style={{ position: "absolute", top: 20, right: 20, pointerEvents: "none", zIndex: 1 }}>
        <HUDBrackets />
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "11px", letterSpacing: "0.2em", color: "#1A3D6E", marginBottom: "1.5rem", opacity: 0.8 }}>
          // Creation
        </p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, lineHeight: 1.1, color: "#0C0B08", marginBottom: "1rem", maxWidth: "700px" }}>
          <span style={{ color: "#1A3D6E" }}>Be the person you are destined to become.</span>
        </h2>
        <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1rem, 1.8vw, 1.25rem)", color: "#0C0B08", opacity: 0.7, marginBottom: "3.5rem", maxWidth: "560px", lineHeight: 1.6 }}>
          The Becoming discusses purpose, mind and body to help you live your life on a higher level.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5px" }}>
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              className="sweep-card"
              style={{
                display: "block",
                padding: "2.5rem",
                border: "1px solid rgba(12,11,8,0.12)",
                background: "#F4F1EA",
                textDecoration: "none",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#1A3D6E")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(12,11,8,0.12)")}
            >
              <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "10px", letterSpacing: "0.15em", color: "#1A3D6E", marginBottom: "1rem", opacity: 0.7 }}>
                &gt; open --channel
              </p>
              <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.8rem", fontWeight: 600, color: "#0C0B08", marginBottom: "0.5rem", lineHeight: 1.1 }}>
                {card.title}
              </h3>
              <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "11px", color: "#0C0B08", opacity: 0.5, letterSpacing: "0.05em" }}>
                {card.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Adventure
function Adventure() {
  const cards = [
    { title: "Cycling", icon: "◎", desc: "Endurance on the open road" },
    { title: "Mountaineering", icon: "△", desc: "High altitude ascents" },
    { title: "Snowboarding", icon: "◇", desc: "Vertical descent, controlled chaos" },
  ];
  return (
    <section id="adventure" style={{ position: "relative", padding: "8rem 2rem", overflow: "hidden", borderTop: "1px solid rgba(12,11,8,0.1)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "11px", letterSpacing: "0.2em", color: "#1A3D6E", marginBottom: "1.5rem", opacity: 0.8 }}>
          // Adventure
        </p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, lineHeight: 1.1, color: "#0C0B08", marginBottom: "1rem" }}>
          Stay hybrid for <em style={{ fontStyle: "italic", color: "#1A3D6E" }}>adventures.</em>
        </h2>
        <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1rem, 1.8vw, 1.25rem)", color: "#0C0B08", opacity: 0.7, marginBottom: "3.5rem", maxWidth: "600px", lineHeight: 1.6 }}>
          I use triathlon as my default training style. At the moment, I am priming my body for cycling, mountaineering, climbing and snowboarding.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
          {cards.map((card) => (
            <div
              key={card.title}
              className="highlight-card"
              style={{
                padding: "2.5rem",
                border: "1px solid rgba(26,61,110,0.2)",
                cursor: "default",
              }}
            >
              <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "1.5rem", color: "#1A3D6E", marginBottom: "1.2rem", opacity: 0.6 }}>
                {card.icon}
              </div>
              <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "2rem", fontWeight: 600, color: "#0C0B08", marginBottom: "0.5rem" }}>
                {card.title}
              </h3>
              <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "11px", color: "#0C0B08", opacity: 0.5, letterSpacing: "0.05em" }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Startup
function Startup() {
  const bars = [
    { label: "Concept", pct: 100 },
    { label: "MVP Build", pct: 60 },
    { label: "First Users", pct: 20 },
    { label: "Launch", pct: 6 },
  ];

  const logs = [
    "> init project --name=antidelay",
    "> status: ACTIVE",
    "> sprint: 04 / building mvp",
    "> next: user_interviews",
    "> eta: TBD",
    "> [cursor]",
  ];

  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="startup" ref={ref} style={{ position: "relative", padding: "8rem 2rem", overflow: "hidden", borderTop: "1px solid rgba(12,11,8,0.1)" }}>
      <div style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", zIndex: 1 }}>
        <WormholeFunnel />
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "11px", letterSpacing: "0.2em", color: "#1A3D6E", marginBottom: "1.5rem", opacity: 0.8 }}>
          // Startup
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="startup-grid">
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.1, color: "#0C0B08", marginBottom: "1.2rem" }}>
              Procrastination is sabotaging your life.
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", color: "#0C0B08", opacity: 0.7, lineHeight: 1.65, marginBottom: "3rem" }}>
              Spend less time on logistics and more time on meaning. I solve problems to help you eliminate procrastination and amplify creativity.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
              {bars.map((b) => (
                <div key={b.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "11px", letterSpacing: "0.08em", color: "#0C0B08", opacity: 0.7 }}>{b.label}</span>
                    <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "11px", color: "#1A3D6E" }}>{b.pct}%</span>
                  </div>
                  <div style={{ height: "2px", background: "rgba(12,11,8,0.1)", position: "relative" }}>
                    <div
                      className="progress-bar-fill"
                      style={{ width: visible ? `${b.pct}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal log */}
          <div style={{ background: "#0C0B08", padding: "2rem", fontFamily: "var(--font-ibm-mono)", fontSize: "12px", lineHeight: 2, color: "#F4F1EA", border: "1px solid #1A3D6E" }}>
            <div style={{ color: "#1A3D6E", marginBottom: "1rem", fontSize: "10px", letterSpacing: "0.15em" }}>
              TERMINAL · JOHN-DEV-LOG
            </div>
            {logs.map((line, i) => (
              <div key={i} style={{ opacity: i === logs.length - 1 ? 0 : 0.85 }}>
                {line === "> [cursor]" ? (
                  <span style={{ color: "#1A3D6E" }} className="cursor-blink">&gt; </span>
                ) : (
                  <span style={{ color: i % 2 === 0 ? "#F4F1EA" : "#1A3D6E" }}>{line}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Consultancy
function Consultancy() {
  const socials = [
    { platform: "instagram", name: "@sizheduan01", href: "https://www.instagram.com/sizheduan01/" },
    { platform: "youtube", name: "John Duan", href: "https://www.youtube.com/channel/UCB9z6AVOAMBn_ZB4otxylLw" },
    { platform: "twitter", name: "@silas_theone", href: "https://x.com/silas_theone" },
    { platform: "linkedin", name: "John Duan", href: "https://www.linkedin.com/in/john-duan-0a92623b9/" },
    { platform: "beehiiv", name: "The Becoming", href: "https://johnduan-articles.beehiiv.com" },
    { platform: "substack", name: "John Duan", href: "https://substack.com/@johnduan" },
    { platform: "email", name: "silastheonedev@gmail.com", href: "mailto:silastheonedev@gmail.com" },
    { platform: "tiktok", name: "@johnduan08", href: "https://www.tiktok.com/@johnduan08?lang=en" },
  ];

  return (
    <section id="consultancy" style={{ position: "relative", padding: "8rem 2rem", overflow: "hidden", borderTop: "1px solid rgba(12,11,8,0.1)" }}>
      <div style={{ position: "absolute", top: "50%", right: 40, transform: "translateY(-50%)", pointerEvents: "none", zIndex: 1 }}>
        <Crosshair />
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "11px", letterSpacing: "0.2em", color: "#1A3D6E", marginBottom: "1.5rem", opacity: 0.8 }}>
          // Consultancy
        </p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, lineHeight: 1.1, color: "#0C0B08", marginBottom: "1rem", maxWidth: "700px" }}>
          Discover your purpose. Be in the <span style={{ color: "#1A3D6E" }}>top 1%</span>.
        </h2>
        <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1rem, 1.8vw, 1.25rem)", color: "#0C0B08", opacity: 0.7, marginBottom: "3.5rem", maxWidth: "540px", lineHeight: 1.65 }}>
          I help ambitious students discover their passion project that is inseparable from their identity.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0" }}>
          {socials.map((s) => (
            <a
              key={s.platform}
              href={s.href}
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              style={{
                display: "block",
                padding: "1.5rem",
                borderBottom: "1px solid rgba(12,11,8,0.08)",
                borderRight: "1px solid rgba(12,11,8,0.08)",
                textDecoration: "none",
                transition: "background 0.2s",
                background: "transparent",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(26,61,110,0.04)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "10px", letterSpacing: "0.1em", color: "#0C0B08", opacity: 0.4, marginBottom: "0.4rem" }}>
                &gt; connect --platform={s.platform}
              </p>
              <div style={{ color: "#0C0B08", transition: "color 0.2s", display: "flex", alignItems: "center" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#1A3D6E")}
                onMouseLeave={e => (e.currentTarget.style.color = "#0C0B08")}
              >
                {logos[s.platform]}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const [utc, setUtc] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setUtc(now.toUTCString().replace("GMT", "UTC"));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer style={{ borderTop: "1px solid rgba(12,11,8,0.15)", padding: "3rem 2rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: 0, right: 40, pointerEvents: "none" }}>
        <Barcode />
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
        <div>
          <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.6rem", fontWeight: 600, color: "#0C0B08", marginBottom: "0.3rem" }}>
            John Duan
          </p>
          <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "10px", letterSpacing: "0.08em", color: "#0C0B08", opacity: 0.4 }}>
            © 2025–2026 · John Duan · All Signals Reserved
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", letterSpacing: "0.12em", color: "#1A3D6E", opacity: 0.6, marginBottom: "4px" }}>
            LIVE UTC CLOCK
          </p>
          <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "12px", letterSpacing: "0.06em", color: "#0C0B08", opacity: 0.7 }}>
            {utc}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main style={{ background: "#F4F1EA", minHeight: "100vh" }}>
      {/* Fine grain tile — sits above everything */}
      <div style={{
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: "120px 120px",
        backgroundRepeat: "repeat",
        opacity: 0.38,
        mixBlendMode: "multiply" as const,
      }} />
      <div style={{ position: "relative", overflow: "hidden" }}>
        <TickerBar />
        <Nav />
        <Hero />
        <About />
        <Creation />
        <Adventure />
        <Startup />
        <Consultancy />
        <Footer />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; flex-direction: column; }
          .startup-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </main>
  );
}
