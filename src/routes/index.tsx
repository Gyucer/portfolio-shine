import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowUpRight, Server, Code2, Boxes } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rafli Kamandita Anugrah — Backend Developer & ERP Integrator" },
      {
        name: "description",
        content:
          "Portfolio of Rafli Kamandita Anugrah — Backend Developer and IT Specialist focused on PHP, Golang, MySQL, Oracle NetSuite integration, and reliable IT infrastructure.",
      },
      { property: "og:title", content: "Rafli Kamandita Anugrah — Backend Developer & ERP Integrator" },
      {
        property: "og:description",
        content:
          "Backend developer and ERP integrator based in Bogor, Indonesia. I build internal tools, connect systems, and keep IT infrastructure running.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const skills = [
  {
    icon: Code2,
    title: "Programming",
    items: ["PHP", "Golang", "MySQL", "JavaScript", "REST API Development"],
  },
  {
    icon: Boxes,
    title: "ERP & Integration",
    items: ["Oracle NetSuite Customization", "Third-party API Integration"],
  },
  {
    icon: Server,
    title: "IT Infrastructure & Quality",
    items: [
      "SIT & UAT Documentation",
      "Hardware & Software Troubleshooting",
      "End-User Support",
    ],
  },
];

const experience = [
  {
    company: "PT. Dover Chemical",
    role: "Senior IT Support / Developer",
    period: "2020 – Present",
    points: [
      "Own the health and customization of Oracle NetSuite ERP, making sure it keeps pace with how the business actually runs.",
      "Build internal tools with PHP and MySQL, and write lean Golang microservices to take repetitive work off the team’s plate.",
      "Wire third-party APIs into our ecosystem so data moves automatically instead of sitting in spreadsheets.",
      "Act as the go-to technical partner for 100+ users — solving problems, documenting fixes, and keeping operations steady.",
    ],
  },
  {
    company: "MNC Vision (PT MNC Sky Vision Tbk)",
    role: "Developer / QA — Internship",
    period: "2019",
    points: [
      "Contributed to internal web projects while learning how a large engineering team ships software.",
      "Wrote clear SIT and UAT documentation that helped the team catch issues before users did.",
    ],
  },
  {
    company: "DKSI IPB — Directorate of Communication & Information Systems",
    role: "IT Technical Support / TKJ — Internship",
    period: "2012",
    points: [
      "Installed, configured, and maintained campus network infrastructure.",
      "Troubleshot hardware issues and helped keep daily IT services up and running for students and staff.",
    ],
  },
];

const projects = [
  {
    title: "CRM Application",
    desc: "A technical appointment, support ticket, and delivery scheduling tool that keeps customer operations organized.",
  },
  {
    title: "Queue & Booking System",
    desc: "Online loading-queue and meeting-room reservation system that reduced scheduling friction for operations teams.",
  },
  {
    title: "ERP Integration",
    desc: "Real-time data sync between Oracle NetSuite and external apps, cutting manual entry and keeping records consistent.",
  },
  {
    title: "Asset Management",
    desc: "Sales Order module and asset maintenance tracker that gave the company a clearer picture of its resources.",
  },
];

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-6 py-16 md:py-24">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mb-10 text-3xl font-semibold md:text-4xl">{title}</h2>
      {children}
    </section>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <a href="#top" className="font-display text-sm font-semibold tracking-tight">
            RKA<span className="text-primary">.</span>
          </a>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:revolutiondesain@gmail.com"
            className="rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in Touch
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
          <div
            className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Bogor, Indonesia
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">
              Hi, I’m Rafli — I turn operations into reliable systems.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary md:text-xl">
              Backend Developer · ERP Integrator · IT Infrastructure Specialist
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              I started out keeping hardware and networks alive, then grew into building the
              software that runs behind them. Today, I help companies connect their ERP to the rest
              of their stack, automate manual workflows, and support the people who use the tools
              every day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                See My Experience
              </a>
              <a
                href="#contact"
                className="rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Contact Me
              </a>
            </div>
            <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
              {[
                ["5+", "Years of impact"],
                ["100+", "Users supported"],
                ["3.52", "GPA / 4.00"],
                ["4", "Key projects"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl font-semibold text-primary">{v}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* About */}
        <Section id="about" eyebrow="Profile" title="Why I Do What I Do">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:col-span-2">
              <p>
                Technology fascinates me most when it quietly makes someone’s work easier. I enjoy
                the moment a clunky manual process becomes a few clicks, or when two systems that
                never talked before start sharing data in real time.
              </p>
              <p>
                My path has taken me from campus networking and end-user support, through QA and
                documentation, into backend development and ERP integration. That mix keeps me
                grounded: I don’t just write code, I think about who will use it, what happens when
                it breaks, and how to keep it running long after launch.
              </p>
              <p>
                If your team needs someone who can sit between operations and engineering — speak
                both languages, and turn business needs into stable systems — I’d love to hear from
                you.
              </p>
            </div>
            <ul className="space-y-3 rounded-lg border border-border bg-card p-6 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" /> Bogor, Indonesia
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" /> +62 858 9109 1788
              </li>
              <li className="flex items-center gap-3 break-all">
                <Mail className="h-4 w-4 shrink-0 text-primary" /> revolutiondesain@gmail.com
              </li>
            </ul>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" eyebrow="Competencies" title="What I Bring to the Table">
          <div className="grid gap-4 md:grid-cols-3">
            {skills.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <s.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <li
                      key={i}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" eyebrow="Career" title="Where I’ve Learned and Grown">
          <ol className="relative space-y-10 border-l border-border pl-6 md:pl-8">
            {experience.map((e) => (
              <li key={e.company} className="relative">
                <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-primary md:-left-[39px]" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{e.company}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
                </div>
                <p className="mt-1 text-sm text-primary">{e.role}</p>
                <ul className="mt-4 space-y-2">
                  {e.points.map((p) => (
                    <li
                      key={p}
                      className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-accent"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        {/* Projects */}
        <Section id="projects" eyebrow="Portfolio" title="Projects That Taught Me the Most">
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" eyebrow="Academic" title="Education">
          <div className="flex flex-wrap items-baseline justify-between gap-2 rounded-lg border border-border bg-card p-6">
            <div>
              <h3 className="text-lg font-semibold">Universitas Nusa Mandiri</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Information Systems — GPA 3.52 / 4.00
              </p>
            </div>
            <span className="font-mono text-xs text-muted-foreground">2017 – 2022</span>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" eyebrow="Contact" title="Let’s Build Something Reliable Together">
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Whether you need backend support, ERP integration, or someone who can make your IT
            operations run smoother, I’m happy to start a conversation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:revolutiondesain@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> revolutiondesain@gmail.com
            </a>
            <a
              href="tel:+6285891091788"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              <Phone className="h-4 w-4 text-primary" /> +62 858 9109 1788
            </a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Rafli Kamandita Anugrah — Bogor, Indonesia
        </div>
      </footer>
    </div>
  );
}
