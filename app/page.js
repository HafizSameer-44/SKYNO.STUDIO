"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play, Sparkles, Menu, X } from "lucide-react";

const services = [
  {
    n: "01",
    title: "AI Advertising",
    text: "Campaign concepts, synthetic visuals and intelligent creative systems built to make brands impossible to ignore."
  },
  {
    n: "02",
    title: "VFX & CGI",
    text: "Cinematic product worlds, surreal environments and high-impact visual effects designed for modern media."
  },
  {
    n: "03",
    title: "Visual Systems",
    text: "A repeatable visual language for campaigns, launches and social content — from one hero film to an entire system."
  }
];

const work = [
  ["01", "Synthetic Motion", "AI / Film"],
  ["02", "Future Product", "CGI / VFX"],
  ["03", "Neon Matter", "AI / Visual"],
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -420]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 220]);

  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const closeMenu = () => setMenu(false);

  return (
    <main>
      <div className="cursor-glow" />

      <header className="nav">
        <a href="#top" className="brand" onClick={closeMenu}>
          <img src="/logo.jpg" alt="Skyno Studio logo" />
          <span>SKYNO<span>.</span>STUDIO</span>
        </a>

        <nav className={menu ? "nav-links open" : "nav-links"}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#studio" onClick={closeMenu}>Studio</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">Start a project <ArrowUpRight size={15} /></a>

        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      <section id="top" ref={heroRef} className="hero">
        <motion.div className="hero-grid" style={{ y: gridY }} />
        <motion.div className="orb orb-one" style={{ y: orbY }} />
        <motion.div className="orb orb-two" />
        <div className="scanline" />

        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >
            <span className="live-dot" /> AI-POWERED ADVERTISING STUDIO
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .9, delay: .12 }}
          >
            IMAGINATION
            <span>ENGINEERED.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8, delay: .3 }}
          >
            We combine <b>AI, VFX and visual systems</b> to build advertising
            that feels less like content — and more like a new reality.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .45 }}
          >
            <a href="#work" className="button primary">Explore our work <ArrowUpRight size={17} /></a>
            <a href="#studio" className="button secondary"><Play size={15} fill="currentColor" /> Enter the studio</a>
          </motion.div>
        </div>

        <div className="hero-mark">
          <motion.img
            src="/logo.jpg"
            alt=""
            initial={{ opacity: 0, scale: .65, rotate: -8 }}
            animate={{ opacity: .9, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: .15, ease: "easeOut" }}
          />
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
        </div>

        <div className="hero-bottom">
          <span>01 / 04</span>
          <div className="line"><i /></div>
          <span>SCROLL TO DISCOVER</span>
        </div>
      </section>

      <section className="statement">
        <div className="section-label">THE NEW CREATIVE STACK</div>
        <h2>
          THE FUTURE OF ADVERTISING
          <em>ISN&apos;T JUST SEEN.</em>
          IT&apos;S EXPERIENCED.
        </h2>
      </section>

      <section id="work" className="work section">
        <div className="section-head">
          <div>
            <div className="section-label">SELECTED WORK</div>
            <h3>Visuals from<br /><span>another frequency.</span></h3>
          </div>
          <p>Concept-first campaigns created for brands that refuse to look ordinary.</p>
        </div>

        <div className="work-grid">
          {work.map(([n, title, type], i) => (
            <motion.article
              className={`work-card card-${i + 1}`}
              key={n}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: .7, delay: i * .1 }}
            >
              <div className="noise" />
              <div className="work-art">
                <div className="art-ring" />
                <div className="art-core">{n}</div>
              </div>
              <div className="work-meta">
                <div><small>{n}</small><strong>{title}</strong></div>
                <span>{type}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="services" className="services section">
        <div className="section-label">WHAT WE BUILD</div>
        <div className="service-list">
          {services.map((s, i) => (
            <motion.div
              className="service-row"
              key={s.n}
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .65, delay: i * .08 }}
            >
              <span className="service-number">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ArrowUpRight className="service-arrow" />
            </motion.div>
          ))}
        </div>
      </section>

      <section id="studio" className="manifesto">
        <div className="manifesto-bg">
          <motion.div
            className="big-logo"
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            <img src="/logo.jpg" alt="" />
          </motion.div>
        </div>
        <div className="manifesto-content">
          <div className="section-label">SKYNO STUDIO</div>
          <h2>NO TEMPLATE.<br /><span>NO LIMITS.</span></h2>
          <p>
            Skyno is a next-generation advertising studio where creative direction,
            generative AI and production technology work as one. We turn ambitious
            ideas into visual experiences people remember.
          </p>
          <div className="manifesto-tags">
            <span><Sparkles size={14} /> AI</span>
            <span>VFX</span>
            <span>CGI</span>
            <span>VISUAL SYSTEMS</span>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="contact-inner">
          <div className="section-label">HAVE A VISION?</div>
          <h2>LET&apos;S MAKE<br /><span>IT REAL.</span></h2>
          <p>Tell us what you&apos;re imagining. We&apos;ll build the visual language around it.</p>
          <a className="contact-button" href="mailto:hello@skyno.studio">
            hello@skyno.studio <ArrowUpRight />
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <img src="/logo.jpg" alt="Skyno Studio" />
          <span>SKYNO.STUDIO</span>
        </div>
        <span>AI • VFX • VISUAL SYSTEMS</span>
        <span>© {new Date().getFullYear()} SKYNO STUDIO</span>
      </footer>
    </main>
  );
}