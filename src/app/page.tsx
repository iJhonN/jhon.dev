"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Github, Instagram, ExternalLink } from 'lucide-react';

export default function Home() {
  // Estado para armazenar as coordenadas do mouse
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const allTechs = [
    { name: 'HTML5', slug: 'html5' },
    { name: 'CSS3', slug: 'css3' },
    { name: 'JS', slug: 'javascript' },
    { name: 'TS', slug: 'typescript' },
    { name: 'React', slug: 'react' },
    { name: 'MySQL', slug: 'mysql' },
    { name: 'Python', slug: 'python' },
    { name: 'PHP', slug: 'php' },
    { name: 'Java', slug: 'java' },
    { name: 'JSON', slug: 'json' },
    { name: 'Lua', slug: 'lua' },
    { name: 'Git', slug: 'git' },
    { name: 'Kotlin', slug: 'kotlin' },
  ];

  const toolsAndOS = [
    { name: 'AWS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' }, 
    { name: 'GCP', slug: 'googlecloud' },
    { name: 'Cloudflare', slug: 'cloudflare' },
    { name: 'PS', slug: 'photoshop' },
    { name: 'PR', slug: 'premierepro' },
    { name: 'AE', slug: 'aftereffects' },
    { name: 'Figma', slug: 'figma' },
    { name: 'Win', slug: 'windows11' },
    { name: 'Linux', slug: 'linux' },
    { name: 'Kali', slug: 'kalilinux' },
    { name: 'Apple', slug: 'apple' },
  ];

  return (
    <main className="h-screen bg-[#050505] text-slate-300 font-sans selection:bg-blue-600/30 flex flex-col overflow-hidden relative">
      
      {/* FUNDO REATIVO: O Glow segue o mouse */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.08), transparent 80%)`,
        }}
      />

      {/* Navbar */}
      <nav className="w-full px-8 md:px-12 py-6 flex justify-between items-center z-10 shrink-0">
        <span className="text-white font-black tracking-tighter text-xl underline decoration-blue-600 decoration-4">JHONATHA</span>
        <div className="flex gap-6">
          <a href="https://github.com/iJhonN" target="_blank" className="text-white hover:text-blue-500 transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]">
            <Github size={18} /> <span className="hidden md:block">Github</span>
          </a>
          <a href="https://instagram.com/Jhonatha_Nunes" target="_blank" className="text-white hover:text-blue-500 transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]">
            <Instagram size={18} /> <span className="hidden md:block">Instagram</span>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center px-8 md:px-12 gap-8 lg:gap-16 z-10 overflow-hidden pb-6">
        
        {/* LADO ESQUERDO: Perfil */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-blue-600 rounded-full blur opacity-20 group-hover:opacity-50 group-hover:blur-xl transition-all duration-500"></div>
            
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-slate-800 shadow-2xl transition-all duration-500 group-hover:border-blue-500 group-hover:scale-110">
              <Image 
                src="/jhonprofile.png" 
                alt="Jhonatha Nunes"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase font-black">
              Software Developer & Designer
            </h2>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight">
              Jhonatha <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Nunes</span>
            </h1>
            <p className="text-sm md:text-base text-slate-400 max-w-lg leading-relaxed mx-auto lg:mx-0">
              Foco em <span className="text-white">automação e eficiência.</span> Unindo programação e design para experiências intuitivas.
            </p>
          </div>

          <div className="flex justify-center lg:justify-start">
            <a 
              href="https://github.com/iJhonN?tab=repositories" 
              target="_blank"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            >
              Ver Projetos <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* LADO DIREITO: Techs */}
        <div className="flex-1 w-full max-w-xl bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-white/10 space-y-8 self-center relative z-10">
          <div>
            <h3 className="text-white font-bold text-[9px] tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
              <span className="w-6 h-[1.5px] bg-blue-600"></span>
              Linguagens
            </h3>
            <div className="grid grid-cols-5 md:grid-cols-7 gap-4">
              {allTechs.map((tech) => (
                <div key={tech.name} className="flex justify-center group">
                  <img 
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.slug}/${tech.slug}-original.svg`} 
                    className="w-8 h-8 md:w-9 md:h-9 group-hover:scale-125 transition-all duration-300"
                    alt={tech.name}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/5">
            <h3 className="text-white font-bold text-[8px] tracking-[0.3em] uppercase mb-5 flex items-center gap-3">
              <span className="w-6 h-[1.5px] bg-cyan-500"></span>
              Sistemas & Creative
            </h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {toolsAndOS.map((item) => (
                <div key={item.name} className="group">
                  <img 
                    src={item.url ? item.url : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.slug}/${item.slug}-original.svg`} 
                    className="w-5 h-5 md:w-6 md:h-6 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    alt={item.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full px-12 py-6 border-t border-white/5 flex justify-between items-center text-[8px] font-bold text-slate-700 tracking-[0.4em] uppercase shrink-0 z-10">
        <p>© 2026 — Jhon.dev</p>
        <p className="text-blue-500">Clareza & Eficiência</p>
      </footer>
    </main>
  );
}