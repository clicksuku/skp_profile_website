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
    title: "ML Zoomcamp — Airbnb Price & Listing Classifier",
    description:
      "A machine learning capstone predicting Airbnb Vienna nightly prices and classifying Host vs Superhost listings, served through FastAPI and deployed with Docker and Kubernetes.",
    tags: ["Machine learning", "FastAPI", "Kubernetes"],
    href: "https://github.com/clicksuku/SundarkpCode/tree/master/ML%20Zoomcamp%202025/FinalProject",
  },
  {
    number: "02",
    title: "LLM Zoomcamp — Payments Card Assistant",
    description:
      "An LLM payments assistant that OCRs card details, validates them through an MCP server, retrieves decline-code context with Qdrant RAG, and tracks quality with Opik evaluation and monitoring.",
    tags: ["LLM engineering", "MCP", "RAG"],
    href: "https://github.com/clicksuku/SundarkpCode/tree/master/LLM%20Zoomcamp%202025",
  },
  {
    number: "03",
    title: "RAG profile analyzer",
    description:
      "A retrieval-augmented Streamlit app that vectorizes a professional profile with Pinecone and BGE embeddings, then answers questions about it through OpenAI and LangChain.",
    tags: ["RAG", "Pinecone", "LangChain"],
    href: "https://github.com/clicksuku/SundarkpCode/blob/master/RAG_LLM_Profile(PineCone%2C%20OpenAI%2C%20Python)/Skp_RAGApp.py",
  },
  {
    number: "04",
    title: "Data Engineering Zoomcamp Capstone — Olist Commerce",
    description:
      "A capstone data pipeline for Olist's Brazilian e-commerce dataset — Mage AI orchestrates ingestion into GCS and BigQuery, with DBT modeling customer, seller, and marketing dimensions.",
    tags: ["Data engineering", "BigQuery", "dbt"],
    href: "https://github.com/clicksuku/SundarkpCode/tree/master/DataEngineering%20Course%20%5BBigQuery%2C%20Mage%20AI%2C%20Buckets%2C%20Metabase%2C%20DBT%5D/sundarkp-olist-commerce%20-%20Data%20Engineering%20CapStone%20Project%20%5BBigQuery%2C%20Mage%20AI%2C%20Buckets%2C%20Metabase%2C%20DBT%5D",
  },
  {
    number: "05",
    title: "SendOpenURLs",
    description:
      "A Chrome extension, published on the Chrome Web Store, that emails a user's open browser tabs to Gmail and reopens saved URL lists on demand.",
    tags: ["Chrome extension", "jQuery", "Browser tooling"],
    href: "https://github.com/clicksuku/SundarkpCode/tree/master/e-SendOpenURLs%20%5BChrome%20Extn%5D",
  },
  {
    number: "06",
    title: "YoutubePlaylister",
    description:
      "A Django app that catalogs every video across a user's YouTube playlists via the YouTube Data API, so takedown or misplaced videos stay easy to trace and export.",
    tags: ["Django", "Python", "YouTube API"],
    href: "https://github.com/clicksuku/SundarkpCode/tree/master/YoutubePlayLister%5BPython%20Django%5D",
  },
  {
    number: "07",
    title: "Rediff Viewer",
    description:
      "A Chrome extension, published on the Chrome Web Store, that rewrites Rediff.com article links to open in ad-free, single-page print mode.",
    tags: ["Chrome extension", "jQuery", "Browser tooling"],
    href: "https://github.com/clicksuku/SundarkpCode/tree/master/RediffViewer%5BChrome%20Extn%5D",
  },
  {
    number: "08",
    title: "Video Resize",
    description:
      "A set of shell scripts for batch video and image processing — resizing, renaming, and reformatting media in bulk.",
    tags: ["Shell scripting", "ffmpeg", "Automation"],
    href: "https://github.com/clicksuku/SundarkpCode/tree/master/VideoResize%20%5BScript%5D",
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
              <p>Technology and engineering executive with 20+ years of experience building, scaling, and transforming consumer and enterprise technology platforms that generate billions in revenue and serve millions of users. Proven track record of growing engineering organizations to 140+ professionals, leading global teams, managing multi-million-dollar budgets, and contributing to strategic and board-level planning.</p>
              <p>Combines deep technical expertise in cloud-native architecture, distributed systems, AI/ML, and GenAI with strong business acumen and organizational leadership. Experienced across fintech and payments, omnichannel commerce, security, and enterprise platforms, with a focus on platform modernization, product innovation, and operational excellence.</p>
              <p>Passionate about building high-performing engineering organizations, defining technology vision, and translating complex business challenges into scalable, customer-centric platforms that drive sustainable growth and measurable business outcomes.</p>
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
              <a className="project-item" href={project.href} key={project.number} target="_blank" rel="noreferrer">
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
