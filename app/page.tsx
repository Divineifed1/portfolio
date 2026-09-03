"use client";

import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Menu, Sparkles, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import styles from "./logo.module.css";

const work = [
  { id: "01", tag: "IN PROGRESS", title: "RemitX AI", desc: "A calmer way to move money across borders, guided by intelligent workflows.", href: "https://remit-x-ai.vercel.app", type: "remit" },
  { id: "02", tag: "IN PROGRESS", title: "Watchera", desc: "A focused security experience built around awareness, not anxiety.", href: "https://watchera-nine.vercel.app", type: "watch" },
  { id: "03", tag: "SHIPPED", title: "Doxa Language Hub", desc: "A digital home for language learning, connection, and culture.", href: "https://doxalanguagehub.com", type: "doxa" },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "remit") return <div className="visual remit"><div className="remit-pill">$ 2,400.00 <span>→</span></div><div className="orbit one"/><div className="orbit two"/><div className="orb"/><p>MOVE FREELY</p></div>;
  if (type === "watch") return <div className="visual watch"><div className="scan"/><div className="watch-card"><span>WATCHERA</span><strong>All clear</strong><small>YOUR DIGITAL WORLD IS SECURE</small></div><div className="target"/></div>;
  return <div className="visual doxa"><span className="doxa-word">doxa</span><span className="language">language<br/>hub</span><div className="doxa-sun">✳</div><p>WORDS BUILD WORLDS</p></div>;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  return <main>
    <header className="nav"><a className={styles.wordmark} href="#top" aria-label="Divine Ifediorah home"><Image src="/divine.jpeg" alt="Divine Ifediorah" width={96} height={96} priority /><span>Divine Ifediorah</span></a><nav className={open ? "open" : ""}><a href="#work" onClick={() => setOpen(false)}>Work</a><a href="#about" onClick={() => setOpen(false)}>About</a><a href="#contact" onClick={() => setOpen(false)}>Contact</a></nav><button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button></header>

    <section id="top" className="hero section"><div className="eyebrow"><Sparkles size={14}/> FULL STACK/BLOCKCHAIN ENGINEER</div><h1>Thoughtful digital<br/><em>experiences</em>, built<br/>to move people.</h1><div className="hero-bottom"><p>Based in Nigeria, working everywhere.<br/>I turn ambitious ideas into useful products.</p><a className="round-link" href="#work" aria-label="View selected work"><ArrowDownRight size={28}/></a></div><div className="hero-grid"/></section>

    <section id="work" className="work section"><div className="section-top"><span className="eyebrow">SELECTED WORK <b>(03)</b></span><p>Ideas in motion — from first sketch<br/>to real-world product.</p></div><div className="projects">{work.map((project) => <article className="project" key={project.id}><a href={project.href} target="_blank" rel="noreferrer" className="project-image"><ProjectVisual type={project.type}/><span className="launch"><ArrowUpRight size={21}/></span></a><div className="project-meta"><span>{project.id} / {project.tag}</span><h2>{project.title}</h2><p>{project.desc}</p></div></article>)}</div></section>

    <section className="contributed section"><div className="contributed-copy"><span className="eyebrow">ALSO CONTRIBUTED TO</span><h2>Good work is<br/>always <em>shared.</em></h2></div><div className="contrib-list"><a href="https://cheesepay.xyz" target="_blank" rel="noreferrer"><span>01</span><strong>CheesePay</strong><ArrowUpRight/></a><a href="https://kindfi.org" target="_blank" rel="noreferrer"><span>02</span><strong>KindFi</strong><ArrowUpRight/></a></div></section>

    <section id="about" className="about section"><span className="eyebrow">A LITTLE ABOUT ME</span><div><h2>I like the space where<br/>logic meets <em>feeling.</em></h2><p>I’m Divine Ifediorah — a product-minded engineer drawn to clear interfaces, useful systems, and the tiny decisions that make a product feel inevitable.</p><p>My practice is equal parts strategy and craft. I partner with people building things that deserve to exist.</p></div></section>

    <footer id="contact" className="footer section"><span className="eyebrow">HAVE SOMETHING IN MIND?</span><a className="email" href="mailto:hello@divineifediorah.com">Let’s make it<br/><em>real.</em> <ArrowUpRight/></a><div className="footer-bottom"><span>© 2026 Divine Ifediorah</span><div><a href="https://github.com//Divineifed1" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a></div><span>Made with intent.</span></div></footer>
  </main>;
}
