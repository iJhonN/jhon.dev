"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Heart,
  Terminal,
  Layers,
  Smartphone,
  Shield,
  Code2,
  Briefcase,
  FolderGit2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { InteractiveBackground } from "./components/InteractiveBackground";

export default function Home() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const clickCountRef = useRef(0);
  const lastClickTimeRef = useRef(0);

  const handleEasterEgg = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a, button")) return;

    const now = Date.now();
    if (now - lastClickTimeRef.current > 500) {
      clickCountRef.current = 1;
    } else {
      clickCountRef.current += 1;
      if (clickCountRef.current >= 5 && !isRedirecting) {
        setIsRedirecting(true);
        setTimeout(() => {
          router.push("/thanks");
        }, 1200);
      }
    }
    lastClickTimeRef.current = now;
  };

  const techStack = [
    {
      category: "Backend & Automação",
      icon: Terminal,
      color: "from-blue-500/20 to-blue-500/5 text-blue-400 border-blue-500/20",
      skills: [
        { name: "Python", slug: "python" },
        { name: "Django", slug: "django" },
        { name: "Selenium", slug: "selenium" },
        { name: "MySQL", slug: "mysql" },
        { name: "SQLite", slug: "sqlite" },
        { name: "Java", slug: "java" },
        { name: "C#", slug: "csharp" },
      ],
      tags: ["TDD & Testes", "Automação de Rotinas", "APIs REST", "POO"],
    },
    {
      category: "Web & Frontend",
      icon: Layers,
      color: "from-cyan-500/20 to-cyan-500/5 text-cyan-400 border-cyan-500/20",
      skills: [
        { name: "JavaScript", slug: "javascript" },
        { name: "HTML5", slug: "html5" },
        { name: "CSS3", slug: "css3" },
        { name: "PHP", slug: "php" },
        { name: "Git", slug: "git" },
      ],
      tags: ["Layouts Responsivos", "Landing Pages", "Integração Web"],
    },
    {
      category: "Mobile Ecosystem",
      icon: Smartphone,
      color: "from-indigo-500/20 to-indigo-500/5 text-indigo-400 border-indigo-500/20",
      skills: [
        { name: "Kotlin", slug: "kotlin" },
        { name: "Swift", slug: "swift" },
        { name: "Flutter", slug: "flutter" },
      ],
      tags: ["FlutterFlow", "Android & iOS", "Integração NFC/Hardware"],
    },
    {
      category: "Segurança & Infra",
      icon: Shield,
      color: "from-emerald-500/20 to-emerald-500/5 text-emerald-400 border-emerald-500/20",
      skills: [
        { name: "Linux", slug: "linux" },
        { name: "Kali", slug: "kalilinux" },
        { name: "Bash", slug: "bash" },
      ],
      tags: ["Pentest Ético", "Servidores Linux", "Redes & Infra"],
    },
  ];

  const projects = [
    {
      title: "Sistema de Ponto Eletrônico",
      description:
          "Controle completo de jornada operacional com integração física para crachás, leitor de código de barras e módulos NFC.",
      category: "Automação & Hardware",
      techs: ["Python", "NFC / Barcode", "SQLite", "TDD"],
      link: "https://github.com/iJhonN",
    },
    {
      title: "Sistema de Controle Financeiro",
      description:
          "Software estruturado para controle de fluxo de caixa, relatórios de rentabilidade e conciliação financeira automatizada.",
      category: "Backend & Web",
      techs: ["Python", "Django", "MySQL"],
      link: "https://github.com/iJhonN",
    },
    {
      title: "Infraestrutura & Aplicações Web",
      description:
          "Desenvolvimento de páginas de alta conversão aliadas à infraestrutura, configuração e deploy em servidores Linux.",
      category: "Web & Infra",
      techs: ["HTML/CSS/JS", "PHP", "Linux Server"],
      link: "https://github.com/iJhonN",
    },
  ];

  return (
      <main
          onClick={handleEasterEgg}
          className={`min-h-screen bg-[#050507] text-slate-300 font-sans selection:bg-blue-500/30 selection:text-white relative cursor-default select-none transition-all duration-700 ${
              isRedirecting ? "scale-105 blur-md" : "scale-100 blur-0"
          }`}
      >
        {/* Overlay do Easter Egg */}
        {isRedirecting && (
            <div className="fixed inset-0 z-[100] bg-[#050507]/90 backdrop-blur-2xl flex flex-col items-center justify-center animate-in fade-in duration-500">
              <div className="relative">
                <Heart
                    size={80}
                    className="text-blue-600 fill-blue-600/20 animate-ping absolute inset-0"
                />
                <Heart
                    size={80}
                    className="text-blue-500 fill-blue-500 animate-pulse relative z-10"
                />
              </div>
              <div className="mt-8 text-blue-400 font-mono tracking-[0.5em] uppercase text-xs animate-pulse">
                Acessando Memória de Gratidão...
              </div>
            </div>
        )}

        <InteractiveBackground />

        {/* Header / Navbar */}
        <header className="sticky top-0 z-40 backdrop-blur-md bg-[#050507]/70 border-b border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
            <div className="flex items-center gap-3">
            <span className="text-white font-black tracking-tight text-xl italic font-mono">
              JHON<span className="text-blue-500">.</span>DEV
            </span>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Disponível para Projetos & Vagas
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                  href="https://github.com/iJhonN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
                  title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
                  title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                  href="https://instagram.com/Jhonatha_Nunes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
                  title="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                  href="mailto:jhonatha2005@outlook.com"
                  className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
                  title="E-mail"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </header>

        {/* Conteúdo Principal */}
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 space-y-24 z-10 relative">
          {/* Seção Hero */}
          <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="relative group shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 rounded-full blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-slate-800/80 bg-slate-900 shadow-2xl">
                <Image
                    src="/jhonprofile.png"
                    alt="Jhonatha Nunes"
                    fill
                    sizes="(max-width: 768px) 144px, 176px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                />
              </div>
            </div>

            <div className="flex-1 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-400">
                <MapPin size={13} className="text-blue-400" /> Arapiraca, AL — Brasil
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Jhonatha{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                Nunes
              </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                Desenvolvedor focado em{" "}
                <strong className="text-white font-semibold">
                  Backend com Python (Django, Selenium, TDD)
                </strong>
                , automação de rotinas operacionais e construção de aplicações web modernas e eficientes.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                    href="https://github.com/iJhonN?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
                >
                  Ver Repositórios <ExternalLink size={14} />
                </a>
                <a
                    href="mailto:jhonatha2005@outlook.com"
                    className="inline-flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/10 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Entrar em Contato
                </a>
              </div>
            </div>
          </section>

          {/* Seção de Especialidades */}
          <section className="space-y-8">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <div className="flex items-center gap-3">
                <Code2 size={20} className="text-blue-400" />
                <h2 className="text-white font-bold text-lg tracking-tight">
                  Stack de Especialidades
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                    <div
                        key={tech.category}
                        className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.15] p-6 rounded-2xl flex flex-col justify-between transition-all duration-300"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                        {tech.category}
                      </span>
                          <div className={`p-2 rounded-lg border bg-gradient-to-b ${tech.color}`}>
                            <Icon size={16} />
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-2">
                          {tech.skills.map((s) => (
                              <div key={s.name} className="relative group/tech flex justify-center">
                          <span className="absolute -top-7 scale-0 group-hover/tech:scale-100 transition-all bg-slate-800 border border-white/10 text-white text-[9px] px-2 py-0.5 rounded font-mono z-20 pointer-events-none whitespace-nowrap">
                            {s.name}
                          </span>
                                <img
                                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${s.slug}/${s.slug}-original.svg`}
                                    className="w-7 h-7 opacity-75 group-hover/tech:opacity-100 group-hover/tech:scale-110 transition-all"
                                    alt={s.name}
                                    loading="lazy"
                                    width={28}
                                    height={28}
                                />
                              </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-5 mt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                        {tech.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-slate-400 border border-white/[0.06]"
                            >
                        {tag}
                      </span>
                        ))}
                      </div>
                    </div>
                );
              })}
            </div>
          </section>

          {/* Seção Projetos & Vivência */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Projetos */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/[0.06] pb-4">
                <FolderGit2 size={20} className="text-blue-400" />
                <h2 className="text-white font-bold text-lg tracking-tight">
                  Projetos em Destaque
                </h2>
              </div>

              <div className="space-y-4">
                {projects.map((proj) => (
                    <a
                        key={proj.title}
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white/[0.02] hover:bg-white/[0.04] p-6 rounded-2xl border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 space-y-3 group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-white font-bold text-base group-hover:text-blue-400 transition-colors flex items-center gap-2">
                          {proj.title}
                          <ArrowUpRight
                              size={16}
                              className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5"
                          />
                        </h3>
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap">
                      {proj.category}
                    </span>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {proj.techs.map((t) => (
                            <span
                                key={t}
                                className="text-[10px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded border border-white/[0.06]"
                            >
                        {t}
                      </span>
                        ))}
                      </div>
                    </a>
                ))}
              </div>
            </div>

            {/* Experiência & Formação */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/[0.06] pb-4">
                <Briefcase size={20} className="text-cyan-400" />
                <h2 className="text-white font-bold text-lg tracking-tight">
                  Vivência Profissional
                </h2>
              </div>

              <div className="space-y-4">
                {/* Experiência */}
                <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/[0.08] space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-white font-bold text-sm">
                        T.I. & Programação
                      </h4>
                      <span className="text-blue-400 text-xs font-mono">
                      GR Autopeças
                    </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">
                    Prática Técnica
                  </span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed pt-1">
                    Desenvolvimento e automação de rotinas internas, redução de gargalos manuais e suporte à infraestrutura operacional e logística com foco em eficiência.
                  </p>
                </div>

                {/* Competências Complementares */}
                <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/[0.08] space-y-3">
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                    <Sparkles size={14} className="text-blue-400" /> Competências Adicionais
                  </h4>
                  <ul className="text-xs text-slate-400 space-y-2 font-mono">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">▹</span>
                      <span>
                      <strong>Backend & Web:</strong> Python (Django, Selenium, TDD), PHP, MySQL
                    </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">▹</span>
                      <span>
                      <strong>Mobile:</strong> Kotlin, Swift e FlutterFlow
                    </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">▹</span>
                      <span>
                      <strong>Infra & Segurança:</strong> Linux, Ethical Hacking & Redes
                    </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">▹</span>
                      <span>
                      <strong>Idiomas:</strong> Inglês (Intermediário)
                    </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Rodapé */}
        <footer className="border-t border-white/[0.06] py-8 px-6 bg-[#040405]/80 mt-20 z-10 relative">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
            <p>© {new Date().getFullYear()} — Jhonatha Kauan Bezerra Nunes</p>
            <p className="text-blue-400">
              Automatizando processos, otimizando resultados.
            </p>
          </div>
        </footer>
      </main>
  );
}