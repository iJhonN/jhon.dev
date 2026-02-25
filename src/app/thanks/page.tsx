"use client";

import React from 'react';
import { ArrowLeft, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { InteractiveBackground } from '../components/InteractiveBackground';

export default function Thanks() {
  const supporters = [
    "Raymara Nunes", "Nayara Nunes", "Maria Clara Barbosa", 
    "Valdemilson Nunes", "Maria Rita", "Angela Maria", 
    "Ivonete", "José Arnaldo", "Thiago Bezerra", "Kauan Felinto",
    "Antônio Balbino" // Nome do seu avô adicionado
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-slate-300 font-sans relative overflow-x-hidden select-none">
      <InteractiveBackground />

      <nav className="w-full px-6 md:px-12 py-8 flex justify-between items-center z-10 relative">
        <Link href="/" className="flex items-center gap-2 text-white hover:text-blue-500 transition-all group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-[10px] uppercase tracking-widest">Voltar</span>
        </Link>
        <span className="text-white font-black tracking-tighter text-xl italic underline decoration-blue-600 decoration-4">JHON</span>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12 z-10 relative text-center">
        <div className="inline-block p-3 rounded-full bg-blue-600/10 border border-blue-600/20 mb-6">
          <Heart size={24} className="text-blue-500 fill-blue-500/20" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">
          Apoio & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Gratidão</span>
        </h1>
        
        <p className="text-slate-400 max-w-xl mx-auto mb-16 leading-relaxed text-sm md:text-base">
          Nenhum ecossistema é construído sozinho. Estas são as pessoas que fortaleceram minha jornada, 
          incentivaram minha evolução técnica e acreditaram na minha visão.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {supporters.map((name) => (
            <div 
              key={name}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 ${
                name === "Antônio Balbino" 
                ? "border-blue-500/40 bg-blue-600/5 shadow-[0_0_20px_rgba(37,99,235,0.1)]" 
                : "border-white/5 bg-white/[0.02] hover:border-blue-600/50"
              } backdrop-blur-sm`}
            >
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative z-10 flex items-center justify-center gap-2">
                <p className={`font-bold tracking-tight transition-colors ${
                  name === "Antônio Balbino" ? "text-blue-400" : "text-white group-hover:text-blue-400"
                }`}>
                  {name}
                </p>
                {/* Ícone de Estrela Especial para o seu Avô */}
                {name === "Antônio Balbino" && (
                  <Sparkles size={16} className="text-blue-400 animate-pulse" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-white/5">
          <p className="text-[10px] font-bold text-slate-600 tracking-[0.5em] uppercase">
            A base de tudo — Jhonatha Nunes
          </p>
        </div>
      </div>
    </main>
  );
}