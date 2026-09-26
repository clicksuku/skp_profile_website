"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Award,
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import SiteNavigation from "./components/SiteNavigation";

const experience = [
  {
    date: "Mar 2025 — Present",
    role: "Technology Leader",
    company: "Yubi Fintech Limited",
    description:
      "Leading the Platforms organization across Identity, Inbound, Outbound, UI Platforms, and the Center of Excellence. Driving AI and LLM cost rationalization, Temporal workflow orchestration, ClickHouse and S3 data platforms, Keycloak authentication, observability modernization, and reporting and audit platforms.",
    tags: ["Leadership", "AI / LLM", "Temporal", "Platforms"],
  },
  {
    date: "Dec 2024 — Feb 2025",
    role: "Software Architect",
    company: "Saafe · Freelance Consultant",
    description:
      "Reviewed the architecture and designed a scale-ready path for the product and its supporting systems.",
    tags: ["Architecture", "Scale", "Consulting"],
  },
  {
    date: "Sep 2023 — Nov 2024",
    role: "Technology Leader",
    company: "CaratLane · A Tata Company",
    description:
      "Managed a 140-person organization and a budget of approximately ₹100 crore across Consumer Experience, In-Store Experience, platform engineering, quality, PMO, and architecture. Delivered loyalty, real-user monitoring, A/B testing, rate limiting, data security, innovation, and ideas platforms.",
    tags: ["140+ team", "Omni-channel", "Cloud native", "Strategy"],
  },
  {
    date: "Sep 2017 — Aug 2023",
    role: "Senior Engineering Manager",
    company: "PayPal India",
    description:
      "Built cryptocurrency core payments and platform products from scratch, contributing to a platform generating USD 4B in TPV. Led payment network expansion for emerging markets and a USD 100M transaction expense optimization initiative.",
    tags: ["Payments", "Crypto", "Global platforms", "People leadership"],
  },
  {
    date: "Jun 2015 — Aug 2017",
    role: "Engineering Manager",
    company: "Flipkart India",
    description:
      "Built the FLEX parallel logistics network, a logistics CRM product, and mobile capabilities for field operations, including continuous tracking and synchronization optimization.",
    tags: ["Logistics", "Android", "Java", "React"],
  },
  {
    date: "Apr 2012 — Jun 2015",
    role: "Engineering Manager",
    company: "Symantec Corporation",
    description:
      "Built next-generation Norton Security and Device Management software for SMEs and managed Norton Identity Safe, a cross-platform security product.",
    tags: ["Security", "Encryption", "Android", "iOS"],
  },
  {
    date: "Dec 2006 — Nov 2011",
    role: "Technical Program Manager / Development Lead",
    company: "Microsoft Corporation",
    description:
      "Owned Silverlight XAML parser and input experiences, then re-architected Remote Desktop license management for 56M users and solutions addressing 23M non-genuine users.",
    tags: ["Windows", "Silverlight", "RDP", "Program leadership"],
  },
  {
    date: "Oct 2003 — Dec 2006",
    role: "Member Technical Staff",
    company: "HCL Technologies",
    description:
      "Built a high-data product solution for the semiconductor manufacturing industry across development, build engineering, and functional specification work.",
    tags: ["Semiconductors", "Data systems", "Engineering"],
  },
];

const projects = [
  {
    number: "01",
    title: "LLM Engineering / Zoomcamp 2025",
    description:
      "A practical LLM engineering project exploring the systems, retrieval, and evaluation patterns needed to move from a language model demo to a dependable application.",
    tags: ["LLM engineering", "Python", "Evaluation"],
    href: "https://github.com/clicksuku/SundarkpCode/tree/master/LLM%20Zoomcamp%202025%20Project",
  },
  {
    number: "02",
    title: "RAG profile analyzer",
    description:
      "An AI-based resume analysis experiment using retrieval-augmented generation to ask better questions of a professional profile.",
    tags: ["RAG", "OpenAI", "Pinecone"],
    href: "https://sundarkp.substack.com/p/rag-ging-sundarkps-profile-attempting",
  },
  {
    number: "03",
    title: "RAG and machine learning pipelines",
    description:
      "Open-source learning projects covering profile RAG pipelines, Pinecone, OpenAI, Python, and machine learning practice.",
    tags: ["Machine learning", "RAG", "Data engineering"],
    href: "https://github.com/clicksuku/SundarkpCode/tree/master/RAG_LLM_Profile(PineCone%2C%20OpenAI%2C%20Python)",
  },
];

const certificates = [
  {
    number: "01",
    title: "Anthropic Claude Certificates",
    issuer: "Anthropic · Certificates",
    description: "Professional learning and certificates focused on Claude, responsible AI, and practical AI-assisted work.",
    href: undefined,
  },
  {
    number: "02",
    title: "LLM Engineering Zoomcamp",
    issuer: "Certificate · September 2025",
    description: "Applied practice in building, evaluating, and shipping modern LLM applications.",
    href: undefined,
  },
  {
    number: "03",
    title: "Data Engineering Professional",
    issuer: "Professional certification · April 2024",
    description: "Hands-on data engineering foundations across pipelines, storage, orchestration, and analytics.",
    href: undefined,
  },
  {
    number: "04",
    title: "CockroachDB Certification",
    issuer: "Technical certification",
    description: "Distributed SQL, resilient data architecture, and operating databases at global scale.",
    href: undefined,
  },
  {
    number: "05",
    title: "PMP Certified Professional",
    issuer: "Project Management Professional",
    description: "Structured leadership across delivery, planning, stakeholders, and complex programs.",
    href: undefined,
  },
];

function SectionHeading({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="section-heading">
      <span className="section-index">{index}</span>
      <h2>{children}</h2>
      <span className="section-rule" />
    </div>
  );
}

export default function Home() {
  const [certificateIndex, setCertificateIndex] = useState(0);
  const visibleCertificates = [
    certificates[certificateIndex],
    certificates[(certificateIndex + 1) % certificates.length],
  ];

  const previousCertificate = () => {
    setCertificateIndex((current) => (current - 1 + certificates.length) % certificates.length);
  };

  const nextCertificate = () => {
    setCertificateIndex((current) => (current + 1) % certificates.length);
  };

  return (
    <main>
      <SiteNavigation />

      <div className="site-column" id="top">
        <section className="hero" aria-labelledby="intro-title">
          <div className="hero-links" aria-label="External links">
            <a href="https://github.com/clicksuku/SundarkpCode" target="_blank" rel="noreferrer"><Github size={15} /> GitHub repository</a>
            <a href="https://www.linkedin.com/in/sundarkp/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
            <a href="https://www.credly.com/users/sundarkp" target="_blank" rel="noreferrer"><Award size={15} /> Certificates</a>
            <a href="https://sundarkp.substack.com/" target="_blank" rel="noreferrer"><ArrowUpRight size={15} /> Blog</a>
          </div>
          <p className="hero-kicker">Hello, I&apos;m</p>
          <h1 id="intro-title">Sundara<br /><span>Kumar.</span></h1>
          <p className="hero-summary">Technology leader with 20+ years of experience architecting and scaling platforms across fintech, payments, e-commerce, and enterprise software.</p>
          <a className="text-link" href="#about">A little more about me <MoveUpRight size={16} /></a>
          <div className="scroll-cue"><span /> Scroll to explore</div>
        </section>

        <section className="content-section about-section" id="about">
          <SectionHeading index="01">About me</SectionHeading>
          <div className="about-grid">
            <div className="about-copy">
              <p className="lead">I build teams, platforms, and products that turn ambitious technology into measurable business value.</p>
              <p>Across 20+ years, I&apos;ve led global engineering teams of 140+ across AI, payments, fintech, commerce, security, and omni-channel experiences. My work spans product ownership, architecture, platform modernization, observability, and GenAI.</p>
              <p>I&apos;m most interested in meaningful customer and business problems, especially the ones that need both a clear technology vision and the patience to make the details work.</p>
            </div>
            <div className="portrait-wrap">
              <div className="portrait-accent" />
              <Image src="/profile.jpeg" alt="Portrait of Sundara Kumar" width={800} height={800} priority className="portrait" />
              <span className="portrait-caption">Sundara Kumar / Engineer</span>
            </div>
          </div>
        </section>

        <section className="content-section" id="experience">
          <SectionHeading index="03">Experience</SectionHeading>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.role}`}>
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-body">
                  <div className="timeline-heading"><h3>{item.role}</h3><BriefcaseBusiness size={17} /></div>
                  <p className="company">{item.company}</p>
                  <p>{item.description}</p>
                  <div className="tag-row">{item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
          <a className="outline-link" href="/resume.pdf" target="_blank" rel="noreferrer">View full résumé <Download size={16} /></a>
        </section>

        <section className="content-section projects-section" id="projects">
          <SectionHeading index="04">Selected thinking</SectionHeading>
          <div className="project-list">
            {projects.map((project) => (
              <a className="project-item" href={project.href} key={project.number}>
                <span className="project-number">{project.number}</span>
                <div className="project-body"><h3>{project.title} <ArrowUpRight size={18} /></h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div>
              </a>
            ))}
          </div>
        </section>

        <section className="content-section certificates-section" id="certificates">
          <SectionHeading index="05">Certificates</SectionHeading>
          <div className="certificate-carousel" aria-label="Certificates carousel">
            <div className="certificate-track">
              {visibleCertificates.map((certificate) => (
                <article className="certificate-card" key={certificate.number}>
                  <div className="certificate-card-top"><Award size={25} /><span>{certificate.number} / {certificates.length}</span></div>
                  <h3>{certificate.title}</h3>
                  <p className="certificate-issuer">{certificate.issuer}</p>
                  <p>{certificate.description}</p>
                  {certificate.href && <a className="certificate-link" href={certificate.href} target="_blank" rel="noreferrer">Open badge wallet <ArrowUpRight size={15} /></a>}
                </article>
              ))}
            </div>
            <div className="carousel-controls">
              <div className="carousel-dots" aria-label="Select certificate">
                {certificates.map((certificate, index) => (
                  <button className={index === certificateIndex ? "active" : ""} key={certificate.number} onClick={() => setCertificateIndex(index)} aria-label={`Show certificate ${index + 1}`} />
                ))}
              </div>
              <div className="carousel-buttons">
                <button onClick={previousCertificate} aria-label="Previous certificate"><ChevronLeft size={18} /></button>
                <button onClick={nextCertificate} aria-label="Next certificate"><ChevronRight size={18} /></button>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-spark"><Sparkles size={18} /></div>
          <p className="eyebrow">05 / Start a conversation</p>
          <h2>Have a useful<br /><em>problem?</em></h2>
          <p className="contact-copy">I&apos;m always interested in good questions, ambitious ideas, and teams who care about the details.</p>
          <div className="contact-details">
            <a className="contact-link" href="mailto:clicksuku@live.com"><Mail size={18} /> clicksuku@live.com <ArrowUpRight size={17} /></a>
            <a className="contact-link" href="tel:+917397764512"><span className="phone-icon">+91</span> +91 73977 64512 <ArrowUpRight size={17} /></a>
          </div>
          <div className="contact-socials">
            <a href="https://github.com/clicksuku/SundarkpCode" target="_blank" rel="noreferrer"><Github size={16} /> GitHub repository</a>
            <a href="https://www.linkedin.com/in/sundarkp/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a href="https://sundarkp.substack.com/" target="_blank" rel="noreferrer"><ArrowUpRight size={16} /> Blog</a>
            <a href="https://linktr.ee/sundarkp" target="_blank" rel="noreferrer"><ArrowUpRight size={16} /> Linktree</a>
          </div>
          <a className="cover-letter-link" href="/cover-letter.pdf" target="_blank" rel="noreferrer">Read my cover letter <ArrowUpRight size={15} /></a>
        </section>

        <footer>
          <span>© 2026 Sundara Kumar</span>
          <span>Made with intention · Next.js / Tailwind CSS</span>
        </footer>
      </div>
    </main>
  );
}
