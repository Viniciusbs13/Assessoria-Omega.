
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  X, 
  Instagram,
  Linkedin,
  ArrowUpRight,
  Target,
  Zap,
  BarChart3,
  Play,
  Sparkles,
  Briefcase,
  Quote
} from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import AIChat from './components/AIChat';
import CustomCursor from './components/CustomCursor';
import { Service, TeamMember } from './types';

// --- Config ---
const WHATSAPP_NUMBER = "5519999592852";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

/**
 * HELPER PARA VÍDEOS DO DRIVE
 * Certifique-se que o vídeo no Drive está como "Qualquer pessoa com o link".
 */
const getMediaUrl = (idOrUrl: string) => {
  if (!idOrUrl || idOrUrl === "COLE_O_ID_AQUI") return "";
  if (idOrUrl.startsWith('http')) return idOrUrl;
  return `https://drive.google.com/uc?export=download&id=${idOrUrl}`;
};

// --- Dados ---

const SERVICES: Service[] = [
  { id: '1', title: 'Tráfego Pago', description: 'Google Ads, Meta Ads & TikTok Ads.', icon: ArrowRight },
  { id: '2', title: 'Social Media', description: 'Direção de arte & Estratégia de conteúdo.', icon: ArrowRight },
  { id: '3', title: 'Filmmaking', description: 'Produção audiovisual cinematográfica.', icon: ArrowRight },
  { id: '4', title: 'Branding', description: 'Posicionamento & Identidade Visual.', icon: ArrowRight }
];

const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Vinicius',
    role: 'CEO',
    description: 'Visão Estratégica',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczPSsz7UTZA4P6hYo4gjLZsY2fLqSm0U54x92eNwEKEf13FcP5uB71F47N0lTJy1b1kaKzzYgYShdQAEpqEONsB03Zk7gNR7xDYr9xZHdT5bT00w8sdULfTAMhDALcxoO-D91q9L2msuH3tjmq45Up0=w482-h765-s-no-gm?authuser=0'
  },
  {
    id: '2',
    name: 'Mateus',
    role: 'COO',
    description: 'Direção Criativa',
    image: 'https://drive.google.com/thumbnail?id=1HXAgcgd8ROfOMLBo5UmV4naQOlhWgi74&sz=w1000'
  },
  {
    id: '3',
    name: 'Gustavo',
    role: 'CCO',
    description: 'Novos Negócios',
    image: 'https://drive.google.com/thumbnail?id=1a6xrRZPqD3tQp4fdfbdTwAyswP_5UMTU&sz=w1000'
  }
];

// --- PORTFÓLIO (ATUALIZADO CONFORME SEU PRINT) ---
const PROJECTS = [
  { id: 1, title: "Oportunidade", category: "Ads", video: "COLE_O_ID_AQUI" },
  { id: 2, title: "Transformar Sorrisos", category: "Social Media", video: "COLE_O_ID_AQUI" },
  { id: 3, title: "Donos de Clínicas", category: "Performance", video: "COLE_O_ID_AQUI" },
  { id: 4, title: "Já se Imaginou", category: "Branding", video: "COLE_O_ID_AQUI" },
  { id: 5, title: "Transforme Faíscas", category: "Motion", video: "COLE_O_ID_AQUI" },
  { id: 6, title: "Novembro Chegou", category: "Campanha", video: "COLE_O_ID_AQUI" },
  { id: 7, title: "Cópia de Destaque", category: "Audiovisual", video: "COLE_O_ID_AQUI" },
  { id: 8, title: "Toda Ideia Nasce Simples", category: "Estratégia", video: "COLE_O_ID_AQUI" }
];

const FEEDBACKS = [
  {
    id: 1,
    type: 'video', 
    url: 'https://cdn.coverr.co/videos/coverr-talking-to-camera-in-office-4682/1080p.mp4',
    client: 'Ricardo Silva',
    company: 'CEO @ TechStart',
    text: 'Aumentamos nosso faturamento em 300% com a estratégia da Ômega.'
  },
  {
    id: 2,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
    client: 'Ana Beatriz',
    company: 'Fundadora @ Glow Beauty',
    text: 'Profissionalismo impecável. A identidade visual mudou o jogo para nós.'
  }
];

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroTextY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const [formData, setFormData] = useState({ nome: '', whatsapp: '', nicho: '', objetivo: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Nova Solicitação via Site Ômega*%0A%0A👤 *Nome:* ${formData.nome}%0A📱 *WhatsApp:* ${formData.whatsapp}%0A🎯 *Nicho:* ${formData.nicho}%0A🚀 *Objetivo:* ${formData.objetivo}`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden cursor-none">
      <CustomCursor />
      <FluidBackground />
      <AIChat />

      <nav className="fixed top-0 left-0 right-0 p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference">
        <div className="font-heading text-xl md:text-2xl font-bold tracking-tighter border-[3px] border-white px-3 py-1">
          ÔMEGA<span className="text-[#00D2C1]">.</span>
        </div>
        <button onClick={() => setMenuOpen(true)} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all bg-black/20 backdrop-blur-sm">
          <div className="flex flex-col gap-1.5"><span className="w-6 h-0.5 bg-white" /><span className="w-6 h-0.5 bg-white" /></div>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] flex items-center justify-center p-4" onClick={() => setMenuOpen(false)}>
            <div className="bg-white text-black w-full max-w-sm rounded-[2rem] p-10 relative" onClick={e => e.stopPropagation()}>
              <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 p-2 border border-black rounded-full"><X className="w-6 h-6" /></button>
              <div className="flex flex-col gap-6 mt-10">
                {['Serviços', 'Trabalhos', 'Metodologia', 'Contato'].map(item => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-3xl font-heading font-bold hover:text-[#00D2C1] transition-colors">{item}</a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12">
         <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="max-w-[90vw] mx-auto">
            <h1 className="text-[12vw] md:text-[11vw] font-black uppercase tracking-tighter leading-none mix-blend-exclusion">
              ÔMEGA<span className="text-[#00D2C1]">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-xl mt-8">Performance digital para quem não aceita o <span className="text-white border-b border-[#00D2C1]">comum</span>.</p>
         </motion.div>
      </header>

      <section id="servicos" className="py-32 px-6 md:px-12 border-t border-white/10">
        <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase mb-20">O que <br/><span className="text-[#00D2C1]">Fazemos</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map(s => (
            <div key={s.id} className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:border-[#00D2C1] transition-colors group">
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-400">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="trabalhos" className="py-32 px-6 md:px-12 bg-zinc-950">
        <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase mb-20 text-center">Portfólio <br/><span className="text-[#00D2C1]">Ômega</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {PROJECTS.map((project, i) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
              <div className="aspect-[4/5] bg-zinc-900 rounded-3xl overflow-hidden relative mb-6 border border-white/5">
                {project.video !== "COLE_O_ID_AQUI" ? (
                  <video key={project.video} autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src={getMediaUrl(project.video)} type="video/mp4" />
                  </video>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-zinc-700">
                    <Play className="w-16 h-16 opacity-20" />
                    <span className="font-mono text-[10px] uppercase tracking-widest">Aguardando ID: {project.title}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-[#00D2C1] font-mono text-xs uppercase tracking-widest mt-2">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer id="contato" className="py-32 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl md:text-8xl font-heading font-black uppercase leading-none">VAMOS <br/> CRESCER?</h2>
            <p className="text-xl text-gray-400 mt-10 max-w-md">Preencha os dados e receba um diagnóstico gratuito da sua presença digital.</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white/5 p-10 rounded-[2.5rem] border border-white/10">
            <input type="text" placeholder="Seu Nome" className="bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#00D2C1] text-xl" required onChange={e => setFormData({...formData, nome: e.target.value})} />
            <input type="tel" placeholder="WhatsApp" className="bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#00D2C1] text-xl" required onChange={e => setFormData({...formData, whatsapp: e.target.value})} />
            <input type="text" placeholder="Nicho de Atuação" className="bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#00D2C1] text-xl" onChange={e => setFormData({...formData, nicho: e.target.value})} />
            <textarea placeholder="Seu Objetivo" className="bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#00D2C1] text-xl resize-none" rows={3} onChange={e => setFormData({...formData, objetivo: e.target.value})} />
            <button className="bg-white text-black py-6 rounded-full font-heading font-bold uppercase tracking-widest hover:bg-[#00D2C1] transition-all">Enviar Proposta</button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default App;
