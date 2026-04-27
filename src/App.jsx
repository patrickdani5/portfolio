import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

const SKILLS = [
  { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js"] },
  { category: "Backend", items: ["Python", "Django", "PHP", "Node.js", "MySQL"] },
  { category: "CMS & E-commerce", items: ["WordPress", "WooCommerce", "Paystack", "Flutterwave"] },
  { category: "Content & SEO", items: ["Content Writing", "SEO Optimization", "Blog Management", "Keyword Research"] },
  { category: "Other Skills", items: ["API Integration", "Database Design", "Git", "Web Hosting", "Maintenance"] },
];

const PROJECTS = [
  {
    name: "NexMart",
    tag: "E-commerce Marketplace",
    desc: "A curated Nigerian e-commerce marketplace built on WordPress/WooCommerce with custom theme, vendor management, and Paystack/Flutterwave payment integration.",
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "Paystack"],
    status: "In Development",
    color: "#3b82f6",
    icon: "🛒",
  },
  {
    name: "NaijaPrep",
    tag: "Exam Prep Platform",
    desc: "A JAMB/WAEC exam preparation web app featuring CBT mock exams, study modes, subject syllabuses, daily questions, streak tracking, and a live countdown.",
    tech: ["HTML", "CSS", "JavaScript", "JSON"],
    status: "In Development",
    color: "#10b981",
    icon: "📚",
  },
  {
    name: "DevRisePro",
    tag: "Tech Blog Platform",
    desc: "A Tech Skills & Digital Career Growth blog covering Coding Tutorials, Digital Skills, Tech Tools, Productivity, and Career & Freelancing. Monetized via AdSense and affiliate marketing.",
    tech: ["WordPress", "Astra", "Elementor", "SEO", "AdSense"],
    status: "In Development",
    color: "#f59e0b",
    icon: "📝",
  },
  {
    name: "ProfitHub",
    tag: "News & Insights Platform",
    desc: "A fully launched Nigerian news and digital insights website covering sports, entertainment, politics, and online business opportunities.",
    tech: ["WordPress", "SEO", "Content Writing"],
    status: "Live",
    link: "https://profithub.com.ng",
    color: "#8b5cf6",
    icon: "📰",
  },
  {
    name: "VaultPro",
    tag: "Investment Platform",
    desc: "A full-stack investment platform featuring dual wallets, tiered investment plans, multi-level referral commissions, admin panel, and automated profit logic.",
    tech: ["HTML", "CSS", "JS", "Node.js", "MySQL"],
    status: "Completed",
    color: "#ef4444",
    icon: "💰",
  },
  {
    name: "TechPath Global Academy",
    tag: "Training Platform",
    desc: "A training institution website with Paystack integration, JWT authentication, course management, and a Node.js/Express backend.",
    tech: ["Node.js", "Express", "MySQL", "Paystack", "JWT"],
    status: "Completed",
    color: "#06b6d4",
    icon: "🎓",
  },
];

const SERVICES = [
  { icon: "🌐", title: "Website Development", desc: "Full frontend & backend web solutions" },
  { icon: "📱", title: "App Development", desc: "Cross-platform mobile applications" },
  { icon: "🛒", title: "E-commerce", desc: "Online stores with payment integration" },
  { icon: "⚙️", title: "WordPress", desc: "Custom themes, plugins & optimization" },
  { icon: "✍️", title: "Content Writing", desc: "SEO-optimized articles & copywriting" },
  { icon: "🔗", title: "API Integration", desc: "Third-party service connections" },
  { icon: "🗄️", title: "Database Design", desc: "Structured, scalable database management" },
  { icon: "🛡️", title: "Maintenance", desc: "Ongoing support & system management" },
];

function useScrollAnimation() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function AnimatedSection({ children }) {
  const [ref, visible] = useScrollAnimation();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
    }}>
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [typed, setTyped] = useState("");
  const [titleIdx, setTitleIdx] = useState(0);

  const titles = ["Full Stack Developer", "WordPress Expert", "Content Writer", "Web Solutions Builder"];

  useEffect(() => {
    let i = 0;
    const current = titles[titleIdx];
    setTyped("");
    const interval = setInterval(() => {
      setTyped(current.slice(0, i + 1));
      i++;
      if (i >= current.length) {
        clearInterval(interval);
        setTimeout(() => setTitleIdx((prev) => (prev + 1) % titles.length), 1800);
      }
    }, 70);
    return () => clearInterval(interval);
  }, [titleIdx]);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("pdani7886@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#060d1f", color: "white", minHeight: "100vh" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.3)} }
        input, textarea {
          width: 100%; background: rgba(255,255,255,0.05);
          border: 1px solid rgba(59,130,246,0.2); border-radius: 8px;
          padding: 12px 14px; color: white; font-size: 14px; outline: none; font-family: inherit;
        }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.3); }
        input:focus, textarea:focus { border-color: rgba(59,130,246,0.5); }
        .nav-desktop { display: flex; gap: 28px; }
        .ham-btn { display: none; background: none; border: none; color: white; font-size: 26px; cursor: pointer; }
        .mobile-nav { display: none; }
        .hero-wrap { display: flex; align-items: center; justify-content: space-between; gap: 40px; }
        .hero-photo-wrap { flex-shrink: 0; animation: float 4s ease-in-out infinite; }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; max-width: 1000px; margin: 0 auto; align-items: center; }
        .services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; max-width: 1100px; margin: 0 auto; }
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; max-width: 1100px; margin: 0 auto; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; max-width: 900px; margin: 0 auto; }
        .stats-row { display: flex; gap: 40px; flex-wrap: wrap; }
        h1.hero-h1 { font-size: 52px; }
        .typed-line { font-size: 28px; }
        .sec-title { font-size: 40px; }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .ham-btn { display: block !important; }
          .mobile-nav { display: flex !important; flex-direction: column; position: fixed; top: 64px; left: 0; right: 0; background: rgba(6,13,31,0.98); z-index: 99; border-bottom: 1px solid rgba(59,130,246,0.2); }
          .hero-wrap { flex-direction: column !important; align-items: center !important; text-align: center !important; }
          .hero-photo-wrap { display: flex !important; justify-content: center !important; margin-top: 30px !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          h1.hero-h1 { font-size: 34px !important; }
          .typed-line { font-size: 22px !important; }
          .sec-title { font-size: 30px !important; }
          .stats-row { gap: 24px !important; }
        }
        @media (max-width: 480px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(6,13,31,0.95)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(59,130,246,0.15)",
        padding: "0 5%", display: "flex", alignItems: "center",
        justifyContent: "space-between", height: 64,
      }}>
        <div style={{ fontWeight: 800, fontSize: 22 }}>
          <span style={{ color: "white" }}>pdani</span><span style={{ color: "#3b82f6" }}>.dev</span>
        </div>
        <div className="nav-desktop">
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => scrollTo(link)} style={{
              background: "none", border: "none", cursor: "pointer",
              color: active === link ? "#3b82f6" : "rgba(255,255,255,0.7)",
              fontWeight: active === link ? 700 : 400, fontSize: 15,
              borderBottom: active === link ? "2px solid #3b82f6" : "2px solid transparent",
              padding: "4px 0", transition: "all 0.2s",
            }}>{link}</button>
          ))}
        </div>
        <button className="ham-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-nav">
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => scrollTo(link)} style={{
              background: "none", border: "none", borderBottom: "1px solid rgba(59,130,246,0.1)",
              color: active === link ? "#3b82f6" : "rgba(255,255,255,0.8)",
              fontSize: 16, fontWeight: 600, padding: "16px 5%",
              textAlign: "left", cursor: "pointer", width: "100%",
            }}>{link}</button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="home" style={{
        minHeight: "100vh", padding: "80px 5% 60px",
        background: `
          radial-gradient(ellipse at 70% 50%, rgba(59,130,246,0.12) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, rgba(16,185,129,0.07) 0%, transparent 50%),
          linear-gradient(135deg, #060d1f 0%, #0a1628 50%, #060d1f 100%)
        `,
        position: "relative", overflow: "hidden", display: "flex", alignItems: "center",
      }}>
        {/* Code background decoration */}
        <div style={{
          position: "absolute", right: "3%", top: "10%",
          fontFamily: "monospace", fontSize: 12,
          color: "rgba(59,130,246,0.12)", lineHeight: 2.2,
          userSelect: "none", pointerEvents: "none",
        }}>
          {`const patrick = {\n  role: "Full Stack Dev",\n  skills: ["React","Django",\n    "WordPress","MySQL"],\n  available: true,\n};\n\nfunction build(idea) {\n  return solve(idea);\n}`}
        </div>

        <div className="hero-wrap" style={{ width: "100%" }}>
          <div style={{ maxWidth: 620, flex: 1 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)",
              borderRadius: 50, padding: "6px 16px", marginBottom: 24,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", display: "inline-block", animation: "pulse 2s infinite" }}></span>
              <span style={{ fontSize: 13, color: "#10b981", letterSpacing: 1 }}>Available for hire</span>
            </div>

            <h1 className="hero-h1" style={{ fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
              Hi, I'm <span style={{ color: "#3b82f6" }}>Patrick Daniel</span>
            </h1>

            <div className="typed-line" style={{ fontWeight: 700, marginBottom: 20, minHeight: 44 }}>
              <span style={{ color: "#60a5fa" }}>{typed}</span>
              <span style={{ animation: "blink 1s infinite", color: "#3b82f6" }}>|</span>
            </div>

            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, lineHeight: 1.8, marginBottom: 36, maxWidth: 520 }}>
              A passionate Full Stack Developer and Content Writer based in Owerri, Nigeria,
              with 5+ years of experience building powerful digital solutions.
              From responsive websites to complex web applications — I turn ideas into reality.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("Projects")} style={{
                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                color: "white", border: "none", borderRadius: 10,
                padding: "14px 32px", fontWeight: 700, fontSize: 16,
                cursor: "pointer", boxShadow: "0 8px 25px rgba(37,99,235,0.4)",
              }}>View Projects</button>
              <button onClick={() => scrollTo("Contact")} style={{
                background: "transparent", color: "#3b82f6",
                border: "2px solid #3b82f6", borderRadius: 10,
                padding: "14px 32px", fontWeight: 700, fontSize: 16, cursor: "pointer",
              }}>Hire Me</button>
            </div>

            <div className="stats-row" style={{ marginTop: 48 }}>
              {[["5+", "Years Experience"], ["20+", "Happy Clients"], ["6+", "Projects Built"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: "#3b82f6" }}>{num}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="hero-photo-wrap">
            <div style={{
              width: 300, height: 380, borderRadius: 24, overflow: "hidden",
              border: "3px solid rgba(59,130,246,0.4)",
              boxShadow: "0 20px 60px rgba(59,130,246,0.25)",
              position: "relative",
            }}>
              <img src="https://i.ibb.co/jvh6zW5N/file-00000000401c71f4abc21b1af1165784.png" alt="Patrick Daniel"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                onError={e => {
                  e.target.style.display = "none";
                  e.target.parentElement.style.cssText += "background:linear-gradient(135deg,rgba(59,130,246,0.2),rgba(16,185,129,0.1));display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;";
                  const d = document.createElement("div");
                  d.innerHTML = '<div style="font-size:80px">👨‍💻</div><div style="font-family:monospace;font-size:12px;color:rgba(59,130,246,0.8)">&lt;PatrickDaniel /&gt;</div>';
                  e.target.parentElement.appendChild(d);
                }}
              />
            </div>
            <div style={{
              marginTop: -360, marginLeft: 260,
              background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.4)",
              borderRadius: 10, padding: "8px 14px", fontSize: 12, color: "#10b981",
              fontWeight: 600, display: "inline-block",
            }}>⚡ React.js</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 5%", background: "rgba(255,255,255,0.02)" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: "#3b82f6", fontSize: 13, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>About Me</div>
            <h2 className="sec-title" style={{ fontWeight: 800 }}>Who I Am</h2>
          </div>
          <div className="about-grid">
            <div>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, fontSize: 16, marginBottom: 20 }}>
                I am <strong style={{ color: "white" }}>Ezechukwu Patrick Ebube Daniel</strong>, a passionate Full Stack Developer
                and Content Writer based in Owerri, Imo State, Nigeria.
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, fontSize: 16, marginBottom: 20 }}>
                With over <strong style={{ color: "#3b82f6" }}>5 years of hands-on experience</strong>, I specialize in building
                robust web applications, e-commerce platforms, WordPress solutions, and SEO-driven content.
                I operate under my personal brand <strong style={{ color: "#3b82f6" }}>pdani.dev</strong>.
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, fontSize: 16 }}>
                Currently studying <strong style={{ color: "white" }}>Computer Engineering at FUTO</strong>,
                I combine academic knowledge with real-world project experience to deliver solutions
                that are technically sound and business-ready.
              </p>
            </div>
            <div className="services-grid">
              {SERVICES.map(s => (
                <div key={s.title} style={{
                  background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.15)",
                  borderRadius: 12, padding: "18px 14px", transition: "all 0.3s", cursor: "default",
                }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.15)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <div style={{ fontSize: 22, marginBottom: 8 }}>{s.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{s.title}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "100px 5%" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: "#3b82f6", fontSize: 13, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>What I Know</div>
            <h2 className="sec-title" style={{ fontWeight: 800 }}>Skills & Technologies</h2>
          </div>
          <div className="skills-grid">
            {SKILLS.map(group => (
              <div key={group.category} style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,13,31,0.8))",
                border: "1px solid rgba(59,130,246,0.2)", borderRadius: 16, padding: 24,
                transition: "transform 0.3s, border-color 0.3s",
              }}
                onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)"; }}
                onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(59,130,246,0.2)"; }}>
                <h3 style={{ color: "#3b82f6", fontSize: 14, fontWeight: 700, marginBottom: 16, letterSpacing: 1 }}>{group.category}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {group.items.map(skill => (
                    <span key={skill} style={{
                      background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)",
                      borderRadius: 20, padding: "5px 12px", fontSize: 12,
                      color: "rgba(255,255,255,0.8)", fontWeight: 500,
                    }}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "100px 5%", background: "rgba(255,255,255,0.02)" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: "#3b82f6", fontSize: 13, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>My Work</div>
            <h2 className="sec-title" style={{ fontWeight: 800 }}>Featured Projects</h2>
          </div>
          <div className="projects-grid">
            {PROJECTS.map(p => (
              <div key={p.name} style={{
                background: "linear-gradient(135deg, rgba(15,25,50,0.9), rgba(6,13,31,0.95))",
                border: `1px solid ${p.color}30`, borderRadius: 20, overflow: "hidden",
                transition: "transform 0.3s, border-color 0.3s", display: "flex", flexDirection: "column",
              }}
                onMouseOver={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = p.color + "60"; }}
                onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = p.color + "30"; }}>
                <div style={{ background: `linear-gradient(135deg, ${p.color}20, transparent)`, padding: "24px 24px 18px", borderBottom: `1px solid ${p.color}20` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <span style={{ fontSize: 36 }}>{p.icon}</span>
                    <span style={{
                      background: p.status === "Live" ? "rgba(16,185,129,0.15)" : p.status === "In Development" ? "rgba(245,158,11,0.15)" : "rgba(59,130,246,0.15)",
                      color: p.status === "Live" ? "#10b981" : p.status === "In Development" ? "#f59e0b" : "#3b82f6",
                      border: `1px solid ${p.status === "Live" ? "#10b981" : p.status === "In Development" ? "#f59e0b" : "#3b82f6"}40`,
                      borderRadius: 20, padding: "4px 12px", fontSize: 11, fontWeight: 600,
                    }}>{p.status}</span>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>{p.name}</h3>
                  <div style={{ color: p.color, fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>{p.tag}</div>
                </div>
                <div style={{ padding: "18px 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.7, marginBottom: 18, flex: 1 }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: p.link ? 16 : 0 }}>
                    {p.tech.map(t => (
                      <span key={t} style={{
                        background: `${p.color}15`, border: `1px solid ${p.color}30`,
                        borderRadius: 6, padding: "3px 10px", fontSize: 11, color: "rgba(255,255,255,0.7)",
                      }}>{t}</span>
                    ))}
                  </div>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" style={{
                      color: p.color, fontSize: 13, fontWeight: 600, textDecoration: "none",
                    }}>🔗 Visit Live Site →</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 5%" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: "#3b82f6", fontSize: 13, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Get In Touch</div>
            <h2 className="sec-title" style={{ fontWeight: 800 }}>Let's Work Together</h2>
            <p style={{ color: "rgba(255,255,255,0.5)", marginTop: 12, fontSize: 16 }}>Have a project in mind? I'd love to hear from you!</p>
          </div>
          <div className="contact-grid">
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>Contact Information</h3>
              {[
                { icon: "📧", label: "Email", value: copiedEmail ? "✅ Copied!" : "pdani7886@gmail.com", action: copyEmail },
                { icon: "📞", label: "WhatsApp", value: "+234 703 361 9151" },
                { icon: "🌐", label: "Website", value: "pdani.dev" },
                { icon: "📍", label: "Location", value: "Owerri, Imo State, Nigeria" },
              ].map(item => (
                <div key={item.label} onClick={item.action} style={{
                  display: "flex", alignItems: "center", gap: 14, marginBottom: 14,
                  padding: 14, borderRadius: 12,
                  background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.1)",
                  cursor: item.action ? "pointer" : "default", transition: "border-color 0.2s",
                }}
                  onMouseOver={e => e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)"}
                  onMouseOut={e => e.currentTarget.style.borderColor = "rgba(59,130,246,0.1)"}>
                  <span style={{ fontSize: 20 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1 }}>{item.label}</div>
                    <div style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", gap: 10, marginTop: 8, flexWrap: "wrap" }}>
                {[
                  { label: "Facebook", url: "https://facebook.com/patrickdani" },
                  { label: "Instagram", url: "https://instagram.com/patrickdani9" },
                  { label: "Twitter/X", url: "https://twitter.com/patrickdani9" },
                  { label: "GitHub", url: "https://github.com/patrickdani5" },
                ].map(s => (
                  <a key={s.label} href={s.url} target="_blank" rel="noreferrer" style={{
                    background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)",
                    borderRadius: 8, padding: "8px 14px", fontSize: 12,
                    color: "rgba(255,255,255,0.7)", textDecoration: "none",
                  }}>{s.label}</a>
                ))}
              </div>
            </div>

            <div style={{
              background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,13,31,0.9))",
              border: "1px solid rgba(59,130,246,0.2)", borderRadius: 20, padding: 28,
            }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 22 }}>Send a Message</h3>
              {[
                { label: "Your Name", type: "text", placeholder: "John Doe" },
                { label: "Your Email", type: "email", placeholder: "john@example.com" },
                { label: "Subject", type: "text", placeholder: "Project Discussion" },
              ].map(field => (
                <div key={field.label} style={{ marginBottom: 14 }}>
                  <label style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", display: "block", marginBottom: 6 }}>{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder} />
                </div>
              ))}
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", display: "block", marginBottom: 6 }}>Message</label>
                <textarea placeholder="Tell me about your project..." rows={4} style={{ resize: "vertical" }} />
              </div>
              <a href="mailto:pdani7886@gmail.com" style={{
                display: "block", width: "100%", textAlign: "center",
                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                color: "white", borderRadius: 10, padding: "14px",
                fontWeight: 700, fontSize: 15, cursor: "pointer",
                textDecoration: "none", boxShadow: "0 8px 25px rgba(37,99,235,0.3)",
              }}>📧 Send Message</a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid rgba(59,130,246,0.1)",
        padding: "30px 5%", textAlign: "center",
        color: "rgba(255,255,255,0.3)", fontSize: 13,
      }}>
        <div style={{ marginBottom: 8, fontWeight: 800, fontSize: 18 }}>
          <span style={{ color: "white" }}>pdani</span><span style={{ color: "#3b82f6" }}>.dev</span>
        </div>
        © 2026 Ezechukwu Patrick Ebube Daniel. All rights reserved.
      </footer>
    </div>
  );
}
