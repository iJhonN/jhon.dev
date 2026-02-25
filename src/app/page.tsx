"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Github, Instagram, ExternalLink, Heart } from 'lucide-react'; // Adicionado Heart
import { InteractiveBackground } from './components/InteractiveBackground';

export default function Home() {
  const router = useRouter();
  const [clickCount, setClickCount] = useState(0);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const lastClickTime = useRef(0);

  const handleEasterEgg = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON') return;

    const now = Date.now();
    if (now - lastClickTime.current > 500) {
      setClickCount(1);
    } else {
      const newCount = clickCount + 1;
      setClickCount(newCount);
      
      if (newCount === 5) {
        setIsRedirecting(true);
        setTimeout(() => {
          router.push('/thanks');
        }, 1200); // Aumentei um pouco para a animação do coração brilhar
      }
    }
    lastClickTime.current = now;
  };

  const allTechs = [
    { name: 'HTML5', slug: 'html5' }, { name: 'CSS3', slug: 'css3' },
    { name: 'JS', slug: 'javascript' }, { name: 'TS', slug: 'typescript' },
    { name: 'React', slug: 'react' }, { name: 'MySQL', slug: 'mysql' },
    { name: 'Python', slug: 'python' }, { name: 'PHP', slug: 'php' },
    { name: 'Java', slug: 'java' }, { name: 'JSON', slug: 'json' },
    { name: 'Lua', slug: 'lua' }, { name: 'Git', slug: 'git' },
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
    <main 
      onClick={handleEasterEgg}
      className={`min-h-screen md:h-screen bg-[#050505] text-slate-300 font-sans flex flex-col overflow-y-auto md:overflow-hidden relative cursor-default select-none transition-all duration-700 ${isRedirecting ? 'scale-110 blur-md' : 'scale-100 blur-0'}`}
    >
      
      {/* Overlay do Easter Egg com Coração Animado */}
      {isRedirecting && (
        <div className="fixed inset-0 z-[100] bg-[#050505]/80 backdrop-blur-xl flex flex-col items-center justify-center animate-in fade-in duration-500">
          <div className="relative">
            <Heart size={80} className="text-blue-600 fill-blue-600/20 animate-ping absolute inset-0" />
            <Heart size={80} className="text-blue-500 fill-blue-500 animate-pulse relative z-10" />
          </div>
          <div className="mt-8 text-blue-500 font-black tracking-[0.6em] uppercase text-[10px] animate-pulse">
            Acessando Memória de Gratidão...
          </div>
        </div>
      )}

      <InteractiveBackground />

      <nav className="w-full px-6 md:px-12 py-6 flex justify-between items-center z-10 shrink-0">
        <span className="text-white font-black tracking-tighter text-xl underline decoration-blue-600 decoration-4 italic">JHON</span>
        <div className="flex gap-4 md:gap-6">
          <a href="https://github.com/iJhonN" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://instagram.com/Jhonatha_Nunes" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors">
            <Instagram size={20} />
          </a>
        </div>
      </nav>

      <div className="flex-1 flex flex-col lg:flex-row items-center px-6 md:px-12 gap-10 lg:gap-16 z-10 pb-10">
        <div className="flex-1 space-y-6 text-center lg:text-left pt-4">
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-blue-600 rounded-full blur opacity-20 group-hover:opacity-50 transition-all duration-500"></div>
            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-slate-800 shadow-2xl transition-all duration-500 group-hover:border-blue-500 group-hover:scale-105">
              <Image src="/jhonprofile.png" alt="Jhonatha Nunes" fill className="object-cover transition-transform duration-500 group-hover:scale-110" priority />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase font-black">Full Stack Developer & Creative Designer</h2>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-tight">
              Jhonatha <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Nunes</span>
            </h1>
            <p className="text-sm md:text-[15px] text-slate-400 max-w-lg leading-relaxed mx-auto lg:mx-0">
              Especialista em transformar lógica complexa em interfaces de alto impacto. 
              Do <span className="text-white italic">back-end</span> robusto com <span className="text-white">Java e Python</span> à agilidade do <span className="text-white">Ecossistema React</span>. 
              Arquitetando soluções escaláveis em <span className="text-white">Cloud (AWS/GCP)</span> com o refinamento visual do design premium.
            </p>
          </div>

          <div className="flex justify-center lg:justify-start">
            <a href="https://github.com/iJhonN?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
              Explorar Ecossistema <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="w-full lg:flex-1 max-w-xl bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-white/10 space-y-8">
          <div>
            <h3 className="text-white font-bold text-[9px] tracking-[0.3em] uppercase mb-6 flex items-center justify-center lg:justify-start gap-3">
              <span className="w-6 h-[1.5px] bg-blue-600"></span> Core Stack & Languages
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-6">
              {allTechs.map((tech) => (
                <div key={tech.name} className="flex justify-center group relative">
                  <span className="absolute -top-8 scale-0 group-hover:scale-100 transition-all bg-blue-600 text-white text-[8px] px-2 py-1 rounded font-bold uppercase z-20">{tech.name}</span>
                  <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.slug}/${tech.slug}-original.svg`} className="w-8 h-8 md:w-9 md:h-9 group-hover:scale-125 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.5)]" alt={tech.name} />
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/5">
            <h3 className="text-white font-bold text-[8px] tracking-[0.3em] uppercase mb-5 flex items-center justify-center lg:justify-start gap-3">
              <span className="w-6 h-[1.5px] bg-cyan-500"></span> Cloud, OS & Creative Tools
            </h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
              {toolsAndOS.map((item) => (
                <img key={item.name} src={item.url ? item.url : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.slug}/${item.slug}-original.svg`} className="w-6 h-6 md:w-7 md:h-7 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300" alt={item.name} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full px-6 md:px-12 py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] font-bold text-slate-700 tracking-[0.4em] uppercase shrink-0 z-10 bg-[#050505]">
        <p>© 2026 — Jhon.dev</p>
        <p className="text-blue-500">Clareza & Eficiência Técnica</p>
      </footer>
    </main>
  );
}