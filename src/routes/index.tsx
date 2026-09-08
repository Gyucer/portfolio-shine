import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowUpRight, Server, Code2, Boxes } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rafli Kamandita Anugrah — IT & Backend Developer" },
      {
        name: "description",
        content:
          "Portofolio Rafli Kamandita Anugrah: Senior IT Support & Developer dengan spesialisasi backend PHP/Golang, integrasi Oracle NetSuite, dan infrastruktur IT.",
      },
      { property: "og:title", content: "Rafli Kamandita Anugrah — IT & Backend Developer" },
      {
        property: "og:description",
        content:
          "Spesialis pengembangan backend, integrasi ERP Oracle NetSuite, dan infrastruktur IT di Bogor, Indonesia.",
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
      "Dokumentasi SIT & UAT",
      "Troubleshooting Hardware & Software",
      "End-User Support",
    ],
  },
];

const experience = [
  {
    company: "PT. Dover Chemical",
    role: "Senior IT Support / Developer",
    period: "2020 – Sekarang",
    points: [
      "Bertanggung jawab penuh atas pemeliharaan dan kustomisasi ERP Oracle NetSuite untuk mendukung operasional perusahaan.",
      "Mengembangkan aplikasi internal menggunakan PHP dan MySQL, serta mengimplementasikan layanan mikro berbasis Golang untuk optimasi sistem.",
      "Mengintegrasikan API pihak ketiga guna otomatisasi sinkronisasi data dan meminimalisir kesalahan manual.",
      "Memberikan dukungan teknis tingkat lanjut bagi 100+ pengguna untuk menjaga stabilitas infrastruktur IT.",
    ],
  },
  {
    company: "MNC Vision (PT MNC Sky Vision Tbk)",
    role: "Developer / QA — Internship",
    period: "2019",
    points: [
      "Berkontribusi dalam pengembangan website internal perusahaan menggunakan teknologi berbasis web.",
      "Menyusun dokumentasi teknis komprehensif, termasuk System Integration Test (SIT) dan User Acceptance Test (UAT).",
    ],
  },
  {
    company: "DKSI IPB — Direktorat Komunikasi & Sistem Informasi",
    role: "IT Technical Support / TKJ — Internship",
    period: "2012",
    points: [
      "Melakukan instalasi, konfigurasi, dan pemeliharaan jaringan komputer di lingkungan kampus.",
      "Membantu proses troubleshooting perangkat keras dan memastikan infrastruktur IT berjalan dengan baik.",
    ],
  },
];

const projects = [
  {
    title: "CRM Application",
    desc: "Sistem manajemen janji temu teknis, pelaporan dukungan, dan jadwal pengiriman.",
  },
  {
    title: "Sistem Antrean & Booking",
    desc: "Sistem antrean pemuatan barang serta reservasi ruang rapat secara online.",
  },
  {
    title: "Integrasi ERP",
    desc: "Sinkronisasi data real-time antara Oracle NetSuite dan aplikasi eksternal.",
  },
  {
    title: "Manajemen Aset",
    desc: "Pengembangan modul Sales Order dan sistem pemeliharaan aset perusahaan.",
  },
];

const nav = [
  { href: "#tentang", label: "Tentang" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#proyek", label: "Proyek" },
  { href: "#kontak", label: "Kontak" },
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
            Hubungi Saya
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
              Rafli Kamandita Anugrah
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary md:text-xl">
              Senior IT Support / Developer — Backend, Integrasi ERP & Infrastruktur IT
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Profesional IT berpengalaman dengan spesialisasi dalam pengembangan sistem backend
              dan integrasi ERP. Mahir mengelola infrastruktur IT serta membangun aplikasi internal
              menggunakan PHP, MySQL, dan Golang.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#pengalaman"
                className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Lihat Pengalaman
              </a>
              <a
                href="#kontak"
                className="rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Kontak
              </a>
            </div>
            <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
              {[
                ["5+", "Tahun pengalaman"],
                ["100+", "Pengguna didukung"],
                ["3.52", "IPK / 4.00"],
                ["4", "Proyek utama"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl font-semibold text-primary">{v}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Tentang */}
        <Section id="tentang" eyebrow="Profil" title="Profil Profesional">
          <div className="grid gap-8 md:grid-cols-3">
            <p className="text-base leading-relaxed text-muted-foreground md:col-span-2">
              Memiliki rekam jejak yang kuat mulai dari dukungan teknis infrastruktur hingga
              pengembangan solusi web dan dokumentasi pengujian sistem untuk meningkatkan efisiensi
              bisnis. Fokus saya adalah menerjemahkan kebutuhan operasional menjadi sistem yang
              stabil, terintegrasi, dan mudah dipelihara.
            </p>
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

        {/* Keahlian */}
        <Section id="keahlian" eyebrow="Kompetensi" title="Keahlian Teknis">
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

        {/* Pengalaman */}
        <Section id="pengalaman" eyebrow="Karier" title="Pengalaman Kerja">
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

        {/* Proyek */}
        <Section id="proyek" eyebrow="Portofolio" title="Proyek Utama">
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

        {/* Pendidikan */}
        <Section id="pendidikan" eyebrow="Akademik" title="Pendidikan">
          <div className="flex flex-wrap items-baseline justify-between gap-2 rounded-lg border border-border bg-card p-6">
            <div>
              <h3 className="text-lg font-semibold">Universitas Nusa Mandiri</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Sistem Informasi — IPK 3.52 / 4.00
              </p>
            </div>
            <span className="font-mono text-xs text-muted-foreground">2017 – 2022</span>
          </div>
        </Section>

        {/* Kontak */}
        <Section id="kontak" eyebrow="Kontak" title="Mari Terhubung">
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Terbuka untuk diskusi seputar pengembangan backend, integrasi ERP, maupun peningkatan
            infrastruktur IT.
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
