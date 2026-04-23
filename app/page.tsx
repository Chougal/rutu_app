"use client"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Globe,
  Cpu,
  ChevronDown,
  Send,
  Github,
  Linkedin,
  Award,
  Calendar,
  BookOpen,
  Star,
  Zap,
} from "lucide-react"

// ===================== DATA =====================

const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "D.Y. Patil College",
    year: "Completed",
    icon: "🎓",
    color: "#6c63ff",
    description: "Advanced studies in computer science, software engineering, and modern application development.",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "D.R. Mane College, Kagal",
    year: "Completed",
    icon: "🎓",
    color: "#ff6584",
    description: "Foundation in programming, database management, networking, and software development.",
  },
  {
    id: 3,
    degree: "12th Standard (HSC)",
    institution: "M.H. Shinde Mahavidyalay",
    year: "Completed",
    icon: "📚",
    color: "#43d9ad",
    description: "Higher Secondary Certificate from Maharashtra State Board.",
  },
  {
    id: 4,
    degree: "11th Standard",
    institution: "M.H. Shinde Mahavidyalay",
    year: "Completed",
    icon: "📖",
    color: "#ffa500",
    description: "Junior College from Maharashtra State Board.",
  },
  {
    id: 5,
    degree: "10th Standard (SSC)",
    institution: "Dattajirao Mohite Patil High School",
    year: "Completed",
    icon: "🏫",
    color: "#ff4757",
    description: "Secondary School Certificate from Maharashtra State Board.",
  },
]

const skills = [
  { category: "Frontend", icon: <Globe size={22} />, color: "#6c63ff", techs: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "TypeScript"] },
  { category: "Backend", icon: <Code size={22} />, color: "#ff6584", techs: ["Node.js", "Express.js", "REST API", "Python", "Java"] },
  { category: "Database", icon: <Database size={22} />, color: "#43d9ad", techs: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"] },
  { category: "Tools & Others", icon: <Cpu size={22} />, color: "#ffa500", techs: ["Git", "GitHub", "VS Code", "Postman", "Linux", "Docker"] },
]

const stats = [
  { label: "Years of Study", value: "7+", icon: <BookOpen size={20} />, color: "#6c63ff" },
  { label: "Degrees Earned", value: "2", icon: <Award size={20} />, color: "#ff6584" },
  { label: "Projects Built", value: "15+", icon: <Zap size={20} />, color: "#43d9ad" },
  { label: "Technologies", value: "20+", icon: <Star size={20} />, color: "#ffa500" },
]

// ===================== ANIMATED COUNTER =====================
function AnimatedCounter({ value }: { value: string }) {
  return <span style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>{value}</span>
}

// ===================== TYPING EFFECT =====================
function TypeWriter({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [text, setText] = useState("")

  useEffect(() => {
    const current = words[wordIndex]
    const timeout = deleting ? 60 : 100

    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setText(current.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (deleting && charIndex > 0) {
        setText(current.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1800)
      } else if (deleting && charIndex === 0) {
        setDeleting(false)
        setWordIndex((wordIndex + 1) % words.length)
      }
    }, timeout)

    return () => clearTimeout(timer)
  }, [charIndex, deleting, wordIndex, words])

  return (
    <span>
      <span className="gradient-text">{text}</span>
      <span className="animate-blink" style={{ color: "#6c63ff", marginLeft: "2px" }}>|</span>
    </span>
  )
}

// ===================== SKILL CARD =====================
function SkillCard({ skill }: { skill: typeof skills[0] }) {
  return (
    <div className="glass-card" style={{ padding: "1.75rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: `${skill.color}20`,
            border: `1px solid ${skill.color}40`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: skill.color,
          }}
        >
          {skill.icon}
        </div>
        <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1.05rem", fontWeight: 700 }}>
          {skill.category}
        </h3>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {skill.techs.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

// ===================== EDUCATION CARD =====================
function EducationCard({ edu, index }: { edu: typeof education[0]; index: number }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1.5rem",
        animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
      }}
    >
      {/* Timeline indicator */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "14px",
            background: `${edu.color}20`,
            border: `1px solid ${edu.color}40`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.3rem",
            flexShrink: 0,
          }}
        >
          {edu.icon}
        </div>
        {index < education.length - 1 && (
          <div
            style={{
              width: "2px",
              flex: 1,
              minHeight: "30px",
              background: `linear-gradient(to bottom, ${edu.color}60, transparent)`,
              margin: "0.5rem 0",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div
        className="glass-card"
        style={{
          padding: "1.5rem",
          flex: 1,
          marginBottom: index < education.length - 1 ? "1.25rem" : "0",
          borderLeft: `3px solid ${edu.color}`,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem" }}>
          <div>
            <h3
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "1.05rem",
                fontWeight: 700,
                marginBottom: "0.3rem",
                color: "var(--foreground)",
              }}
            >
              {edu.degree}
            </h3>
            <p
              style={{
                color: edu.color,
                fontSize: "0.9rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <GraduationCap size={14} />
              {edu.institution}
            </p>
          </div>
          <span
            style={{
              background: `${edu.color}20`,
              color: edu.color,
              border: `1px solid ${edu.color}40`,
              padding: "0.25rem 0.75rem",
              borderRadius: "50px",
              fontSize: "0.75rem",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              whiteSpace: "nowrap",
            }}
          >
            <Calendar size={12} />
            {edu.year}
          </span>
        </div>
        <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem", marginTop: "0.75rem", lineHeight: 1.6 }}>
          {edu.description}
        </p>
      </div>
    </div>
  )
}

// ===================== CONTACT FORM =====================
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setSending(false)
    setSent(true)
    setForm({ name: "", email: "", message: "" })
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
        <div>
          <label style={{ display: "block", color: "var(--muted-foreground)", fontSize: "0.85rem", marginBottom: "0.5rem", fontWeight: 500 }}>
            Your Name *
          </label>
          <input
            type="text"
            className="contact-input"
            placeholder="Abhishek Chougale"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label style={{ display: "block", color: "var(--muted-foreground)", fontSize: "0.85rem", marginBottom: "0.5rem", fontWeight: 500 }}>
            Email Address *
          </label>
          <input
            type="email"
            className="contact-input"
            placeholder="you@example.com"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label style={{ display: "block", color: "var(--muted-foreground)", fontSize: "0.85rem", marginBottom: "0.5rem", fontWeight: 500 }}>
          Message *
        </label>
        <textarea
          className="contact-input"
          rows={5}
          placeholder="I'd love to collaborate on a project..."
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{ resize: "vertical" }}
        />
      </div>
      <button
        type="submit"
        disabled={sending || sent}
        className="btn-primary"
        style={{
          width: "fit-content",
          opacity: sending ? 0.7 : 1,
          cursor: sending ? "not-allowed" : "pointer",
        }}
      >
        {sent ? (
          "✅ Message Sent!"
        ) : sending ? (
          "Sending..."
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}

// ===================== MAIN PAGE =====================
export default function HomePage() {
  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section
        id="home"
        className="bg-mesh"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Orbs */}
        <div
          className="orb orb-purple animate-float"
          style={{ width: "500px", height: "500px", top: "-100px", right: "-100px" }}
        />
        <div
          className="orb orb-pink"
          style={{ width: "400px", height: "400px", bottom: "-50px", left: "-100px" }}
        />
        <div
          className="orb orb-cyan"
          style={{ width: "300px", height: "300px", top: "50%", left: "40%" }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "4rem 1.5rem",
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* Left Content */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(108,99,255,0.12)",
                border: "1px solid rgba(108,99,255,0.3)",
                borderRadius: "50px",
                padding: "0.4rem 1rem",
                marginBottom: "1.5rem",
                color: "#8b85ff",
                fontSize: "0.85rem",
                fontWeight: 600,
              }}
            >
              <span style={{ fontSize: "0.7rem" }}>🟢</span>
              Available for opportunities
            </div>

            {/* Name */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
              }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Abhishek</span>
              <br />
              <span style={{ color: "var(--foreground)" }}>Vishnu Chougale</span>
            </h1>

            {/* Typing Effect */}
            <div
              style={{
                fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 600,
                marginBottom: "1.5rem",
                color: "var(--muted-foreground)",
                minHeight: "2.5rem",
              }}
            >
              <TypeWriter
                words={[
                  "Full Stack Developer",
                  "MCA Graduate",
                  "React & Next.js Dev",
                  "Problem Solver",
                  "Tech Enthusiast",
                ]}
              />
            </div>

            {/* Description */}
            <p
              style={{
                color: "var(--muted-foreground)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                maxWidth: "580px",
                marginBottom: "2.5rem",
              }}
            >
              MCA graduate from D.Y. Patil College with a passion for building modern, 
              scalable web applications. I craft elegant digital experiences with clean code 
              and creative problem-solving.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#contact" className="btn-primary">
                <Mail size={18} />
                Get In Touch
              </a>
              <a href="#education" className="btn-outline">
                <GraduationCap size={18} />
                My Journey
              </a>
            </div>

            {/* Social Links */}
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", alignItems: "center" }}>
              <span style={{ color: "var(--muted-foreground)", fontSize: "0.85rem" }}>Find me on:</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "var(--muted-foreground)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#6c63ff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted-foreground)")}
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "var(--muted-foreground)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#0077b5")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted-foreground)")}
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right - Avatar */}
          <div
            className="animate-float hidden lg:block"
            style={{ position: "relative", flexShrink: 0 }}
          >
            <div
              className="animate-pulse-glow"
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6c63ff 0%, #ff6584 50%, #43d9ad 100%)",
                padding: "4px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "var(--background)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "6rem",
                  overflow: "hidden",
                  position: "relative"
                }}
              >
                <img 
                  src="/abhi.jpeg" 
                  alt="Abhishek Chougale" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div style={{ display: 'none', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'absolute' }}>
                  👨‍💻
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <div
              style={{
                position: "absolute",
                bottom: "-10px",
                left: "-20px",
                background: "var(--card)",
                border: "1px solid rgba(108,99,255,0.3)",
                borderRadius: "12px",
                padding: "0.6rem 1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 8px 24px rgba(108,99,255,0.2)",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>🎓</span>
              <div>
                <div style={{ color: "var(--foreground)", fontWeight: 700, fontSize: "0.8rem" }}>MCA</div>
                <div style={{ color: "var(--muted-foreground)", fontSize: "0.7rem" }}>Graduate</div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "-30px",
                background: "var(--card)",
                border: "1px solid rgba(255,101,132,0.3)",
                borderRadius: "12px",
                padding: "0.6rem 1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 8px 24px rgba(255,101,132,0.2)",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>💻</span>
              <div>
                <div style={{ color: "var(--foreground)", fontWeight: 700, fontSize: "0.8rem" }}>Full Stack</div>
                <div style={{ color: "var(--muted-foreground)", fontSize: "0.7rem" }}>Developer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
          className="animate-float"
        >
          <span style={{ color: "var(--muted-foreground)", fontSize: "0.75rem", letterSpacing: "0.1em" }}>SCROLL</span>
          <ChevronDown size={20} style={{ color: "var(--primary)" }} />
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section style={{ padding: "5rem 1.5rem", background: "rgba(12,12,20,0.6)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card"
                style={{ padding: "2rem", textAlign: "center" }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "14px",
                    background: `${stat.color}20`,
                    border: `1px solid ${stat.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: stat.color,
                    margin: "0 auto 1rem",
                  }}
                >
                  {stat.icon}
                </div>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    color: stat.color,
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  <AnimatedCounter value={stat.value} />
                </div>
                <div style={{ color: "var(--muted-foreground)", fontSize: "0.9rem", fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ color: "#6c63ff", fontWeight: 600, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>
              Who I Am
            </p>
            <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
            <div className="section-line" />
            <p className="section-subtitle">
              Get to know me better — my background, passion, and what drives me
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            {/* About Text */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                }}
              >
                Hello! I&apos;m{" "}
                <span className="gradient-text">Abhishek Vishnu Chougale</span>
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "var(--muted-foreground)", lineHeight: 1.8 }}>
                <p>
                  I&apos;m a passionate Full Stack Developer and MCA graduate from Maharashtra. 
                  My journey in technology has been fueled by curiosity and a love for creating 
                  digital solutions that make a real difference.
                </p>
                <p>
                  With a strong academic foundation spanning from SSC at Dattajirao Mohite Patil 
                  school to my MCA at D.Y. Patil College, I&apos;ve built expertise in modern web 
                  technologies, databases, and software engineering practices.
                </p>
                <p>
                  When I&apos;m not coding, I enjoy exploring new technologies, contributing to 
                  projects, and continuously learning to stay updated with the evolving tech landscape.
                </p>
              </div>

              {/* Contact Info */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1.75rem" }}>
                {[
                  { icon: <MapPin size={16} />, text: "Balewadi, Gaganbavda, Maharashtra", color: "#43d9ad" },
                  { icon: <Mail size={16} />, text: "abhishekchougale038@gmail.com", color: "#ff6584" },
                  { icon: <Phone size={16} />, text: "+91 9325519485", color: "#6c63ff" },
                ].map((item) => (
                  <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ color: item.color, flexShrink: 0 }}>{item.icon}</div>
                    <span style={{ color: "var(--muted-foreground)", fontSize: "0.9rem" }}>{item.text}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="#contact" className="btn-primary">
                  <Mail size={16} /> Contact Me
                </a>
                <a href="#skills" className="btn-outline">
                  <Code size={16} /> My Skills
                </a>
              </div>
            </div>

            {/* Profile Card */}
            <div>
              <div
                className="glass-card"
                style={{
                  padding: "2.5rem",
                  textAlign: "center",
                  borderTop: "3px solid #6c63ff",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #6c63ff 0%, #ff6584 100%)",
                    padding: "3px",
                    margin: "0 auto 1.5rem",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: "var(--background)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "3.5rem",
                      overflow: "hidden",
                      position: "relative"
                    }}
                  >
                    <img 
                      src="/abhi.jpeg" 
                      alt="Abhishek Chougale" 
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'absolute' }}>
                      👨‍💻
                    </div>
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    marginBottom: "0.25rem",
                  }}
                >
                  Abhishek Vishnu Chougale
                </h3>
                <p style={{ color: "#6c63ff", fontWeight: 600, fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                  Full Stack Developer
                </p>

                <div style={{ borderTop: "1px solid var(--glass-border)", paddingTop: "1.5rem" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                      textAlign: "center",
                    }}
                  >
                    {[
                      { label: "Degree", value: "MCA" },
                      { label: "Location", value: "Maharashtra" },
                      { label: "Specialty", value: "Web Dev" },
                      { label: "Status", value: "Available" },
                    ].map((item) => (
                      <div key={item.label}>
                        <div style={{ color: "var(--muted-foreground)", fontSize: "0.75rem", marginBottom: "0.2rem" }}>
                          {item.label}
                        </div>
                        <div style={{ color: "var(--foreground)", fontWeight: 700, fontSize: "0.9rem" }}>
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability Badge */}
                <div
                  style={{
                    marginTop: "1.5rem",
                    background: "rgba(67,217,173,0.12)",
                    border: "1px solid rgba(67,217,173,0.3)",
                    borderRadius: "50px",
                    padding: "0.5rem 1.25rem",
                    color: "#43d9ad",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#43d9ad",
                      animation: "pulse-glow 2s infinite",
                    }}
                  />
                  Open to Work
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EDUCATION SECTION ===== */}
      <section id="education" style={{ padding: "6rem 1.5rem", background: "rgba(10,10,18,0.8)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ color: "#ff6584", fontWeight: 600, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>
              Academic Journey
            </p>
            <h2 className="section-title">My <span style={{ background: "linear-gradient(135deg, #ff6584 0%, #6c63ff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Education</span></h2>
            <div className="section-line" style={{ background: "linear-gradient(135deg, #ff6584 0%, #6c63ff 100%)" }} />
            <p className="section-subtitle">
              My educational background — from school to post-graduation
            </p>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0" }}>
            {education.map((edu, index) => (
              <EducationCard key={edu.id} edu={edu} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section id="skills" style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ color: "#43d9ad", fontWeight: 600, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>
              What I Know
            </p>
            <h2 className="section-title">Technical <span className="gradient-text-2">Skills</span></h2>
            <div className="section-line" style={{ background: "linear-gradient(135deg, #43d9ad 0%, #6c63ff 100%)" }} />
            <p className="section-subtitle">
              Technologies and tools I&apos;ve mastered through my education and projects
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {skills.map((skill) => (
              <SkillCard key={skill.category} skill={skill} />
            ))}
          </div>

          {/* Tech cloud */}
          <div
            className="glass-card"
            style={{
              marginTop: "2rem",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: "1.25rem",
                color: "var(--muted-foreground)",
              }}
            >
              All Technologies
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", justifyContent: "center" }}>
              {[
                "HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js",
                "Node.js", "Express.js", "Python", "Java", "MySQL", "MongoDB",
                "PostgreSQL", "Git", "GitHub", "REST API", "Bootstrap", "TailwindCSS",
                "Firebase", "Docker", "Linux", "VS Code", "Postman",
              ].map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" style={{ padding: "6rem 1.5rem", background: "rgba(10,10,18,0.8)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ color: "#ffa500", fontWeight: 600, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>
              Let&apos;s Connect
            </p>
            <h2 className="section-title">Get In <span style={{ background: "linear-gradient(135deg, #ffa500 0%, #ff6584 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Touch</span></h2>
            <div className="section-line" style={{ background: "linear-gradient(135deg, #ffa500 0%, #ff6584 100%)" }} />
            <p className="section-subtitle">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you!
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Contact Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                Contact Information
              </h3>

              {[
                {
                  icon: <Mail size={20} />,
                  label: "Email",
                  value: "abhishekchougale038@gmail.com",
                  color: "#ff6584",
                  href: "mailto:abhishekchougale038@gmail.com",
                },
                {
                  icon: <Phone size={20} />,
                  label: "Phone",
                  value: "+91 9325519485",
                  color: "#6c63ff",
                  href: "tel:+919325519485",
                },
                {
                  icon: <MapPin size={20} />,
                  label: "Location",
                  value: "Balewadi, Gaganbavda, Maharashtra",
                  color: "#43d9ad",
                  href: null,
                },
                {
                  icon: <Github size={20} />,
                  label: "GitHub",
                  value: "github.com/abhishek",
                  color: "#8888aa",
                  href: "https://github.com",
                },
                {
                  icon: <Linkedin size={20} />,
                  label: "LinkedIn",
                  value: "linkedin.com/in/abhishek-chougale",
                  color: "#0077b5",
                  href: "https://www.linkedin.com/in/abhishek-chougale-573786268",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-card"
                  style={{ padding: "1.25rem", display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: `${item.color}20`,
                      border: `1px solid ${item.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: item.color,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ color: "var(--muted-foreground)", fontSize: "0.75rem", fontWeight: 500, marginBottom: "0.15rem" }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--foreground)",
                          textDecoration: "none",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = item.color)}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--foreground)")}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div style={{ color: "var(--foreground)", fontSize: "0.9rem", fontWeight: 600 }}>
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="glass-card" style={{ padding: "2.5rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                Send a Message
              </h3>
              <p style={{ color: "var(--muted-foreground)", fontSize: "0.9rem", marginBottom: "1.75rem" }}>
                Fill out the form and I&apos;ll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
