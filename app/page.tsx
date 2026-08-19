"use client"; // Informa ao Next.js que este componente roda no navegador do cliente (habilita cliques, estados e animações)

import { useState, useEffect, MouseEvent } from "react";

export default function Home() {
  // =========================================================================
  // 1. CONFIGURAÇÕES GERAIS E WHATSAPP
  // =========================================================================
  // Número comercial para onde os orçamentos serão enviados via WhatsApp
  const whatsappNumber = "5537999422997"; 

  // =========================================================================
  // 2. ESTADOS INTERATIVOS (REACT HOOKS)
  // =========================================================================
  // Estado para controlar o feedback visual do botão de cópia do código
  const [copied, setCopied] = useState<boolean>(false);

  // Estado para armazenar o texto que está sendo digitado em tempo real no terminal
  const [displayedCode, setDisplayedCode] = useState<string>("");

  // Estado para controlar qual pergunta do FAQ está aberta (null = todas fechadas)
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Estado para a posição do mouse no efeito de Lanterna (Spotlight) do Hero
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Estados da Calculadora Interativa de Projetos
  const [calcType, setCalcType] = useState<"landing" | "institucional" | "custom">("institucional");
  const [hasWhatsApp, setHasWhatsApp] = useState<boolean>(true);
  const [hasSEO, setHasSEO] = useState<boolean>(true);
  const [hasAI, setHasAI] = useState<boolean>(false);

  // =========================================================================
  // 3. EFEITO DE DIGITAÇÃO AUTOMÁTICA (TYPEWRITER)
  // =========================================================================
  const fullCode = `const project = {
  framework: "Next.js 16 (App Router)",
  styling: "Tailwind CSS + Glassmorphism",
  interactivity: "React Hooks + Spotlight UI",
  performance: "100/100 Core Web Vitals",
  conversionReady: true,
  status: "syntrotech_active"
};`;

  useEffect(() => {
    let index = 0;
    // Dispara um intervalo que adiciona uma letra a cada 25 milissegundos
    const interval = setInterval(() => {
      setDisplayedCode(fullCode.slice(0, index));
      index++;
      if (index > fullCode.length) {
        clearInterval(interval); // Encerra o intervalo quando termina o texto
      }
    }, 25);

    // Limpa a memória caso o usuário saia da página
    return () => clearInterval(interval);
  }, []);

  // Função para copiar o código para a área de transferência
  const handleCopy = () => {
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reseta a mensagem após 2 segundos
  };

  // Função para alternar o estado do FAQ (abre/fecha sanfona)
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Função que rastreia a posição do mouse para criar o efeito de luz
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // =========================================================================
  // 4. LÓGICA DE CÁLCULO DE ORÇAMENTO EM TEMPO REAL
  // =========================================================================
  const calculateTotal = () => {
    let base = 1490;
    let days = 5;

    if (calcType === "institucional") {
      base = 2890;
      days = 10;
    } else if (calcType === "custom") {
      base = 4900;
      days = 20;
    }

    if (hasWhatsApp) base += 200;
    if (hasSEO) base += 450;
    if (hasAI) {
      base += 900;
      days += 6;
    }

    return { total: base, days };
  };

  const currentBudget = calculateTotal();

  // =========================================================================
  // 5. DADOS E CONTEÚDO ESTRUTURADO
  // =========================================================================
  const projects = [
    {
      title: "Nexus Capital",
      category: "Fintech & Investimentos",
      description: "Plataforma institucional de alta liquidez com visual dark e integração para captação de clientes B2B.",
      metric: "+210% em Conversão",
      techs: ["Next.js", "Tailwind", "Fintech UI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Aura Clinic",
      category: "Saúde & Estética Avançada",
      description: "Landing page de luxo focada em agendamento instantâneo com funil inteligente para WhatsApp.",
      metric: "0.4s Carregamento",
      techs: ["Landing Page", "Mobile First", "WhatsApp API"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Vortex SaaS",
      category: "Software & Plataformas B2B",
      description: "Design system com dashboard de métricas empresariais preparado para alta escala e múltiplos usuários.",
      metric: "PageSpeed 100/100",
      techs: ["Dashboard", "TypeScript", "Escalabilidade"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const faqs = [
    {
      q: "Qual é o prazo médio de entrega de um site?",
      a: "Para a Landing Page Express, o prazo médio é de 3 a 5 dias úteis. Para sites institucionais completos, o prazo varia entre 10 e 15 dias úteis."
    },
    {
      q: "Como funciona a hospedagem e o domínio?",
      a: "Auxiliamos em toda a configuração do seu domínio oficial e implementamos a hospedagem em servidores globais com certificado de segurança SSL (HTTPS) incluso."
    },
    {
      q: "Eu mesmo consigo alterar textos e imagens depois?",
      a: "Sim! Construímos estruturas modulares e intuitivas, além de oferecermos suporte direto e planos contínuos de acompanhamento."
    },
    {
      q: "Quais são as formas de pagamento?",
      a: "Trabalhamos com 50% de entrada no início do projeto e 50% na entrega e aprovação final, via PIX ou cartão de crédito parcelado."
    }
  ];

  return (
    <main className="min-h-screen bg-[#090b11] text-white selection:bg-[#625fff] selection:text-white font-sans">
      {/* =================================================================== */}
      {/* 1. BARRA DE NAVEGAÇÃO SUPERIOR (STICKY COM EFEITO DE VIDRO)        */}
      {/* =================================================================== */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#090b11]/80 border-b border-[#172540]">
        <div className="max-w-[1240px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo com ponto brilhante pulsante */}
          <div className="flex items-center space-x-2">
            <div className="w-3.5 h-3.5 rounded-full bg-[#625fff] shadow-[0_0_12px_#625fff] animate-pulse" />
            <span className="font-['Figtree'] font-semibold text-lg tracking-tight text-white">
              Syntro<span className="text-[#85a6e9]">Tech</span>
            </span>
          </div>

          {/* Links de navegação suave */}
          <nav className="hidden md:flex items-center space-x-8 text-sm text-[#abaebb]">
            <a href="#recursos" className="hover:text-white transition-colors">Recursos</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a>
            <a href="#simulador" className="hover:text-white transition-colors">Simulador</a>
            <a href="#precos" className="hover:text-white transition-colors">Planos</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          {/* Botão de contato rápido da Navbar */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de conversar sobre um projeto com a SyntroTech.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0b0c0e] font-medium text-xs md:text-sm px-5 py-2 rounded-full hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

  {/* =================================================================== */}
      {/* 2. SEÇÃO HERO COM CYBER GRID ANIMADO                                */}
      {/* =================================================================== */}
      <section
      onMouseMove={handleMouseMove} // 👈 1. Aqui ele captura a posição do mouse
     
      className="relative overflow-hidden py-20 md:py-32 px-6 border-b border-[#172540] min-h-[620px] flex items-center">
        {/* MALHA / GRID CYBERPUNK MODERNA (0 KB) */}
        <div 
          className="absolute inset-0 opacity-[0.18] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #625fff 1px, transparent 1px), linear-gradient(to bottom, #625fff 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)"
          }}
        />
        {/* 🔦 2. LUZ DINÂMICA (LANTERNA QUE SEGUE O MOUSE) */}
        <div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#625fff]/25 blur-[140px] rounded-full transition-all duration-75 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
/>
        {/* LUZES AURORA GLOW EM CAMADAS */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-[#625fff]/25 blur-[140px] rounded-full animate-pulse" />
        <div className="pointer-events-none absolute bottom-5 right-10 w-[400px] h-[400px] bg-[#ff7dda]/15 blur-[130px] rounded-full" />
        <div className="pointer-events-none absolute top-1/3 left-10 w-[300px] h-[300px] bg-[#28b6ff]/10 blur-[100px] rounded-full" />

        {/* CONTEÚDO PRINCIPAL (z-10) */}
        <div className="max-w-[1240px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Textos Persuasivos */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-[#85a6e9] bg-[#12244f]/80 border border-[#24375a] rounded-full backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#625fff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#625fff]"></span>
              </span>
              Engenharia de Software & Web de Alta Performance
            </div>

            <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.08] text-white font-['Figtree']">
              Transformamos empresas com plataformas digitais de alto impacto.
            </h1>

            <p className="text-lg text-[#abaebb] font-light max-w-xl leading-relaxed">
              Criamos ecossistemas web rápidos, interativos e estruturados com as tecnologias mais avançadas do mercado.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#simulador"
                className="bg-white text-[#0b0c0e] font-medium px-7 py-3 rounded-full hover:bg-neutral-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all text-[15px]"
              >
                Simular Projeto
              </a>
              <a
                href="#portfolio"
                className="bg-transparent border border-[#3c3f44] text-white font-medium px-7 py-3 rounded-full hover:bg-[#172540] hover:border-[#85a6e9] transition-all text-[15px]"
              >
                Ver Portfólio
              </a>
            </div>
          </div>

          {/* Terminal Interativo */}
          <div className="lg:col-span-5 bg-[#0d1424]/90 backdrop-blur-md border border-[#1e2d4d] rounded-2xl p-5 shadow-2xl relative group hover:border-[#625fff]/50 transition-all duration-500">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#172540]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="text-xs text-[#abaebb] font-mono ml-2">syntrotech.core.ts</span>
              </div>

              <button
                onClick={handleCopy}
                className="text-[11px] font-mono px-3 py-1 rounded bg-[#172540] text-[#c7c9d1] hover:bg-[#24375a] hover:text-white transition-all active:scale-90"
              >
                {copied ? "✓ Copiado!" : "Copiar"}
              </button>
            </div>

            <div className="min-h-[170px]">
              <pre className="text-xs md:text-sm font-mono text-[#85a6e9] leading-relaxed overflow-x-auto">
                <code>
                  {displayedCode}
                  <span className="inline-block w-2 h-4 ml-0.5 bg-[#625fff] animate-pulse align-middle" />
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>
      {/* =================================================================== */}
      {/* 3. BENTO GRID INTERATIVO (RECURSOS ESTILO APPLE / LINEAR)           */}
      {/* =================================================================== */}
      <section id="recursos" className="py-24 px-6 border-b border-[#172540] relative">
        <div className="max-w-[1240px] mx-auto space-y-16">
          {/* Cabeçalho da Seção */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#85a6e9] bg-[#12244f]/80 px-3 py-1 rounded-full border border-[#24375a]">
              Engenharia de Alto Padrão
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white font-['Figtree']">
              Arquitetura desenhada para liderança de mercado
            </h2>
            <p className="text-[#abaebb] text-base md:text-lg font-light">
              Combinamos design persuasivo com infraestrutura de nível global para maximizar suas conversões.
            </p>
          </div>

          {/* Grid Assimétrico (Bento Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 🟦 BENTO CARD 1 (Ocupa 2 Colunas): Performance & PageSpeed */}
            <div className="md:col-span-2 bg-[#0d1424] border border-[#1e2d4d] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#625fff]/60 transition-all duration-500 shadow-xl">
              <div className="space-y-3 z-10">
                <span className="text-xs font-mono uppercase text-[#85a6e9] tracking-wider">01 // Velocidade Absoluta</span>
                <h3 className="text-2xl font-semibold text-white">Carregamento Instantâneo (Sub-0.4s)</h3>
                <p className="text-[#c7c9d1] text-sm leading-relaxed max-w-md font-light">
                  A cada 1 segundo a mais de espera, 20% dos clientes fecham a página. Nossos sites rodam com pré-renderização estática no servidor para garantir retenção máxima.
                </p>
              </div>

              {/* Mini Widget Interativo de PageSpeed */}
              <div className="mt-8 pt-6 border-t border-[#172540]/80 grid grid-cols-3 gap-4 z-10">
                <div className="bg-[#090b11] border border-[#172540] rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-[#27c93f]">100</div>
                  <div className="text-[11px] text-[#abaebb] mt-0.5">Performance</div>
                </div>
                <div className="bg-[#090b11] border border-[#172540] rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-[#27c93f]">100</div>
                  <div className="text-[11px] text-[#abaebb] mt-0.5">Acessibilidade</div>
                </div>
                <div className="bg-[#090b11] border border-[#172540] rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-[#85a6e9]">100</div>
                  <div className="text-[11px] text-[#abaebb] mt-0.5">SEO Google</div>
                </div>
              </div>

              {/* Luz sutil de fundo no hover */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 w-64 h-64 bg-[#625fff]/15 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700" />
            </div>

            {/* 🟩 BENTO CARD 2 (1 Coluna): Funil WhatsApp Direto */}
            <div className="bg-[#12203d] border border-[#24375a] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
              <div className="space-y-3 z-10">
                <div className="inline-block bg-[#625fff] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Lead Machine
                </div>
                <h3 className="text-2xl font-semibold text-white">Funil WhatsApp Integrado</h3>
                <p className="text-[#c7c9d1] text-sm leading-relaxed font-light">
                  Botões de chamada direta com mensagens pré-formatadas para levar o cliente direto à negociação.
                </p>
              </div>

              {/* Simulação de Notificação Push */}
              <div className="mt-6 bg-[#090b11]/90 border border-[#24375a] rounded-2xl p-3.5 flex items-center gap-3 backdrop-blur-md shadow-lg z-10 group-hover:scale-105 transition-transform duration-300">
                <div className="w-9 h-9 rounded-full bg-[#27c93f]/20 border border-[#27c93f]/40 flex items-center justify-center text-[#27c93f] text-sm font-bold">
                  💬
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className="text-xs font-semibold text-white truncate">Novo Lead Qualificado</div>
                  <div className="text-[11px] text-[#abaebb] truncate">"Olá! Gostaria de um orçamento..."</div>
                </div>
              </div>
            </div>

            {/* 🟪 BENTO CARD 3 (1 Coluna): Infraestrutura & Uptime */}
            <div className="bg-[#0d1424] border border-[#1e2d4d] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#625fff]/60 transition-all duration-500 shadow-xl">
              <div className="space-y-3 z-10">
                <span className="text-xs font-mono uppercase text-[#85a6e9] tracking-wider">03 // Alta Disponibilidade</span>
                <h3 className="text-xl font-semibold text-white">99.99% Uptime em Nuvem</h3>
                <p className="text-[#c7c9d1] text-sm leading-relaxed font-light">
                  Servidores distribuídos globalmente com certificado SSL gratuito e proteção ativa contra quedas.
                </p>
              </div>

              {/* Badge visual de status ativo */}
              <div className="mt-6 flex items-center gap-2 bg-[#090b11] border border-[#172540] px-4 py-2.5 rounded-xl w-fit z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] animate-ping" />
                <span className="text-xs font-mono text-[#abaebb]">Edge Network: Operacional</span>
              </div>
            </div>

            {/* 🟧 BENTO CARD 4 (Ocupa 2 Colunas): SEO e Domínio do Google */}
            <div className="md:col-span-2 bg-[#0d1424] border border-[#1e2d4d] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#625fff]/60 transition-all duration-500 shadow-xl">
              <div className="space-y-3 z-10">
                <span className="text-xs font-mono uppercase text-[#85a6e9] tracking-wider">04 // Visibilidade Orgânica</span>
                <h3 className="text-2xl font-semibold text-white">Estrutura Pronta para o Topo do Google</h3>
                <p className="text-[#c7c9d1] text-sm leading-relaxed font-light max-w-lg">
                  Metatags dinâmicas, sitemap automático, OpenGraph para redes sociais e semântica HTML pura para o algoritmo do Google indexar sua empresa nas primeiras buscas.
                </p>
              </div>

              {/* Checklist visual de SEO */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#c7c9d1] font-mono z-10 pt-4 border-t border-[#172540]/80">
                <div className="flex items-center gap-2">
                  <span className="text-[#27c93f]">✓</span> Schema Markup JSON-LD
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#27c93f]">✓</span> Compressão de Imagens WebP
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#27c93f]">✓</span> Metatags Sociais (OpenGraph)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#27c93f]">✓</span> Renderização Híbrida SSR/SSG
                </div>
              </div>

              {/* Glow decorativo */}
              <div className="pointer-events-none absolute -bottom-16 -right-16 w-56 h-56 bg-[#2862d7]/15 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700" />
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 4. BARRA DE MÉTRICAS EM TEMPO REAL                                 */}
      {/* =================================================================== */}
      <section className="border-b border-[#172540] bg-[#0b0e18] py-8 px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-semibold text-white tracking-tight">0.3s</div>
            <div className="text-xs text-[#abaebb] uppercase tracking-wider mt-1">Tempo de Resposta Médio</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-[#85a6e9] tracking-tight">100%</div>
            <div className="text-xs text-[#abaebb] uppercase tracking-wider mt-1">SEO & Performance Google</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-white tracking-tight">24/7</div>
            <div className="text-xs text-[#abaebb] uppercase tracking-wider mt-1">Infraestrutura em Nuvem</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-[#625fff] tracking-tight">+300%</div>
            <div className="text-xs text-[#abaebb] uppercase tracking-wider mt-1">Conversão de Leads</div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 3. RECURSOS COM CARDS ULTRA INTERATIVOS (HOVER 3D + NEON GLOW)     */}
      {/* =================================================================== */}
      <section id="recursos" className="py-24 px-6 border-b border-[#172540] relative">
        <div className="max-w-[1240px] mx-auto space-y-16">
          {/* Cabeçalho */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#85a6e9] bg-[#12244f]/80 px-3 py-1 rounded-full border border-[#24375a]">
              Engenharia de Alto Padrão
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white font-['Figtree']">
              Tudo o que sua empresa precisa para dominar o digital
            </h2>
            <p className="text-[#abaebb] text-base md:text-lg font-light">
              Soluções construídas com arquitetura modular, escalável e segura.
            </p>
          </div>

          {/* Grid com 3 Cards Interativos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* ⚡ CARD 1: Ultra Performance */}
            <div className="group relative bg-gradient-to-b from-[#0d1424] to-[#090b11] border border-[#1e2d4d] rounded-3xl p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-[#625fff] hover:shadow-[0_10px_40px_-10px_rgba(98,95,255,0.3)]">
              <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#625fff]/0 group-hover:bg-[#625fff]/20 blur-2xl rounded-full transition-all duration-500" />

              <div className="space-y-5 z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#12244f] border border-[#24375a] flex items-center justify-center text-[#85a6e9] group-hover:bg-[#625fff] group-hover:text-white group-hover:border-[#625fff] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-semibold text-white tracking-tight group-hover:text-[#85a6e9] transition-colors">
                  Ultra Performance
                </h3>
                
                <p className="text-[#c7c9d1] text-sm leading-relaxed font-light">
                  Renderização no servidor que entrega páginas em milissegundos para reter visitantes e ranquear no topo do Google.
                </p>
              </div>

              <a
                href="#portfolio"
                className="pt-6 border-t border-[#172540]/60 flex items-center justify-between text-xs text-[#abaebb] z-10 hover:text-white transition-colors"
              >
                <span className="font-mono">PageSpeed 100</span>
                <span className="text-[#625fff] group-hover:translate-x-1 transition-transform font-medium">
                  Ver Cases &rarr;
                </span>
              </a>
            </div>

            {/* 🎯 CARD 2: Design de Alta Conversão */}
            <div className="group relative bg-gradient-to-b from-[#0d1424] to-[#090b11] border border-[#1e2d4d] rounded-3xl p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-[#85a6e9] hover:shadow-[0_10px_40px_-10px_rgba(133,166,233,0.3)]">
              <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#85a6e9]/0 group-hover:bg-[#85a6e9]/20 blur-2xl rounded-full transition-all duration-500" />

              <div className="space-y-5 z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#12244f] border border-[#24375a] flex items-center justify-center text-[#85a6e9] group-hover:bg-[#85a6e9] group-hover:text-[#090b11] group-hover:border-[#85a6e9] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-md">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-semibold text-white tracking-tight group-hover:text-[#85a6e9] transition-colors">
                  Design de Alta Conversão
                </h3>
                
                <p className="text-[#c7c9d1] text-sm leading-relaxed font-light">
                  Layouts estruturados com neurodesign e gatilhos de autoridade para transformar visitantes em contatos no WhatsApp.
                </p>
              </div>

              <a
                href="#precos"
                className="pt-6 border-t border-[#172540]/60 flex items-center justify-between text-xs text-[#abaebb] z-10 hover:text-white transition-colors"
              >
                <span className="font-mono">NeuroUX Lead</span>
                <span className="text-[#85a6e9] group-hover:translate-x-1 transition-transform font-medium">
                  Ver Planos &rarr;
                </span>
              </a>
            </div>

            {/* 📱 CARD 3: Responsividade Total */}
            <div className="group relative bg-gradient-to-b from-[#0d1424] to-[#090b11] border border-[#1e2d4d] rounded-3xl p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-[#ff7dda] hover:shadow-[0_10px_40px_-10px_rgba(255,125,218,0.3)]">
              <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#ff7dda]/0 group-hover:bg-[#ff7dda]/20 blur-2xl rounded-full transition-all duration-500" />

              <div className="space-y-5 z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#12244f] border border-[#24375a] flex items-center justify-center text-[#85a6e9] group-hover:bg-[#ff7dda] group-hover:text-[#090b11] group-hover:border-[#ff7dda] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-semibold text-white tracking-tight group-hover:text-[#ff7dda] transition-colors">
                  Responsividade Total
                </h3>
                
                <p className="text-[#c7c9d1] text-sm leading-relaxed font-light">
                  Adaptação fluida e perfeita para qualquer tela: smartphones, tablets, notebooks e monitores ultrawide.
                </p>
              </div>

              <a
                href="#simulador"
                className="pt-6 border-t border-[#172540]/60 flex items-center justify-between text-xs text-[#abaebb] z-10 hover:text-white transition-colors"
              >
                <span className="font-mono">Mobile First</span>
                <span className="text-[#ff7dda] group-hover:translate-x-1 transition-transform font-medium">
                  Simular Agora &rarr;
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 6. PORTFÓLIO PREMIUM COM IMAGENS E HOVER 3D                         */}
      {/* =================================================================== */}
      <section id="portfolio" className="py-24 px-6 border-b border-[#172540]">
        <div className="max-w-[1240px] mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#85a6e9]">
              Cases Recentes
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
              Projetos construídos para impressionar e vender
            </h2>
            <p className="text-[#abaebb] text-base font-light">
              Padrões visuais e funcionais desenvolvidos sob medida para marcas exigentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0d1424] border border-[#1e2d4d] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#625fff] hover:-translate-y-2 transition-all duration-500 group shadow-xl"
              >
                {/* Imagem com overlay e efeito de aproximação */}
                <div className="relative h-60 w-full overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-black/50" />

                  {/* Badge de resultado comprovado */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#12244f]/90 border border-[#24375a] text-[#85a6e9] backdrop-blur-md shadow-md">
                      {item.metric}
                    </span>
                  </div>

                  {/* Categoria e Título */}
                  <div className="absolute bottom-4 left-6 z-10">
                    <span className="text-xs uppercase tracking-wider text-[#abaebb] font-mono">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-semibold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Descrição e Tags Técnicas */}
                <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
                  <p className="text-[#c7c9d1] text-sm leading-relaxed font-light">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#172540]/60">
                    {item.techs.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono text-[#85a6e9] bg-[#12244f] border border-[#24375a] px-2.5 py-0.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Ação de orçamento individual */}
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Olá! Gostei muito do estilo do projeto ${item.title} e quero uma proposta para a minha empresa.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full pt-4 text-xs font-medium text-white group-hover:text-[#85a6e9] transition-colors"
                  >
                    <span>Quero um projeto neste estilo</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* X. NOVIDADE: CALCULADORA / SIMULADOR INTERATIVO DE ORÇAMENTOS       */}
      {/* =================================================================== */}
      <section id="simulador" className="py-24 px-6 border-b border-[#172540] bg-[#0b0e18]">
        <div className="max-w-[900px] mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#85a6e9]">
              Simulador em Tempo Real
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
              Monte a solução ideal para seu momento
            </h2>
            <p className="text-[#abaebb] text-base font-light">
              Escolha os módulos desejados e veja o valor estimado e o prazo na hora.
            </p>
          </div>

          <div className="bg-[#0d1424] border border-[#1e2d4d] rounded-2xl p-8 shadow-2xl space-y-8">
            {/* Escolha do Tipo de Projeto */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-semibold tracking-wider text-[#abaebb]">1. Tipo de Plataforma:</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button
                  onClick={() => setCalcType("landing")}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    calcType === "landing"
                      ? "bg-[#12244f] border-[#625fff] text-white shadow-lg"
                      : "bg-[#090b11] border-[#172540] text-[#abaebb] hover:border-[#24375a]"
                  }`}
                >
                  <div className="font-medium text-white">Landing Page Express</div>
                  <div className="text-xs opacity-70 mt-1">Página única de alta conversão</div>
                </button>

                <button
                  onClick={() => setCalcType("institucional")}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    calcType === "institucional"
                      ? "bg-[#12244f] border-[#625fff] text-white shadow-lg"
                      : "bg-[#090b11] border-[#172540] text-[#abaebb] hover:border-[#24375a]"
                  }`}
                >
                  <div className="font-medium text-white">Institucional Pro</div>
                  <div className="text-xs opacity-70 mt-1">Até 5 páginas com autoridade</div>
                </button>

                <button
                  onClick={() => setCalcType("custom")}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    calcType === "custom"
                      ? "bg-[#12244f] border-[#625fff] text-white shadow-lg"
                      : "bg-[#090b11] border-[#172540] text-[#abaebb] hover:border-[#24375a]"
                  }`}
                >
                  <div className="font-medium text-white">Sistema Sob Medida</div>
                  <div className="text-xs opacity-70 mt-1">Painel, autenticação e banco</div>
                </button>
              </div>
            </div>

            {/* Módulos Adicionais (Checkboxes) */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-semibold tracking-wider text-[#abaebb]">2. Recursos Adicionais:</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <label
                  onClick={() => setHasWhatsApp(!hasWhatsApp)}
                  className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    hasWhatsApp ? "bg-[#12244f] border-[#625fff]" : "bg-[#090b11] border-[#172540]"
                  }`}
                >
                  <span className="text-sm font-medium">WhatsApp Leads API</span>
                  <span className="text-xs text-[#85a6e9]">{hasWhatsApp ? "✓ Incluso" : "+ R$ 200"}</span>
                </label>

                <label
                  onClick={() => setHasSEO(!hasSEO)}
                  className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    hasSEO ? "bg-[#12244f] border-[#625fff]" : "bg-[#090b11] border-[#172540]"
                  }`}
                >
                  <span className="text-sm font-medium">Otimização SEO Google</span>
                  <span className="text-xs text-[#85a6e9]">{hasSEO ? "✓ Incluso" : "+ R$ 450"}</span>
                </label>

                <label
                  onClick={() => setHasAI(!hasAI)}
                  className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    hasAI ? "bg-[#12244f] border-[#625fff]" : "bg-[#090b11] border-[#172540]"
                  }`}
                >
                  <span className="text-sm font-medium">Integração IA / Chatbot</span>
                  <span className="text-xs text-[#85a6e9]">{hasAI ? "✓ Incluso" : "+ R$ 900"}</span>
                </label>
              </div>
            </div>

            {/* Painel de Fechamento do Orçamento */}
            <div className="pt-6 border-t border-[#172540] flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs text-[#abaebb] uppercase tracking-wider">Investimento Estimado:</span>
                <div className="text-3xl md:text-4xl font-semibold text-white">
                  R$ {currentBudget.total.toLocaleString("pt-BR")}
                  <span className="text-xs text-[#abaebb] font-light ml-2">({currentBudget.days} dias úteis)</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Olá! Fiz uma simulação no site da SyntroTech: Plano ${calcType.toUpperCase()} com valor estimado de R$ ${currentBudget.total} e prazo de ${currentBudget.days} dias. Gostaria de fechar!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-[#625fff] text-white font-medium px-8 py-3.5 rounded-full hover:bg-[#524eee] hover:shadow-[0_0_20px_#625fff] hover:scale-105 active:scale-95 transition-all text-center"
              >
                Contratar com este Orçamento →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 7. PLANOS TRADICIONAIS                                              */}
      {/* =================================================================== */}
      <section id="precos" className="py-24 px-6 border-b border-[#172540]">
        <div className="max-w-[1240px] mx-auto space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#85a6e9]">
              Formatos de Contratação
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
              Investimento Claro e Sem Surpresas
            </h2>
            <p className="text-[#abaebb] text-base font-light">
              Escolha a estrutura certa para o momento da sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Card Plano 1 */}
            <div className="bg-[#0d1424] border border-[#1e2d4d] rounded-2xl p-8 flex flex-col justify-between space-y-8 hover:border-[#85a6e9]/40 transition-colors">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white">Landing Page Express</h3>
                  <p className="text-xs text-[#abaebb] mt-1">Ideal para validação rápida de tráfego pago e ofertas.</p>
                </div>
                <div className="text-4xl font-medium text-white">
                  R$ 1.490 <span className="text-sm font-normal text-[#abaebb]">/único</span>
                </div>
                <ul className="space-y-3 text-sm text-[#c7c9d1]">
                  <li className="flex items-center gap-2"><span className="text-[#85a6e9]">✓</span> Página única de alta conversão</li>
                  <li className="flex items-center gap-2"><span className="text-[#85a6e9]">✓</span> Botões de WhatsApp integrados</li>
                  <li className="flex items-center gap-2"><span className="text-[#85a6e9]">✓</span> Design 100% Responsivo</li>
                </ul>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de contratar a Landing Page Express.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-transparent border border-[#3c3f44] text-white py-3 rounded-full text-sm font-medium hover:bg-[#172540] transition-colors"
              >
                Contratar Express
              </a>
            </div>

            {/* Card Plano 2 (Destaque Pro) */}
            <div className="bg-[#12203d] border border-[#24375a] rounded-2xl p-8 flex flex-col justify-between space-y-8 relative shadow-2xl shadow-black/70 md:-translate-y-2 hover:border-[#625fff] transition-colors">
              <div className="absolute -top-3 right-6 bg-[#625fff] text-white text-[11px] font-semibold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                Recomendado
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white">Institucional Pro</h3>
                  <p className="text-xs text-[#85a6e9] mt-1">Autoridade máxima para empresas estabelecidas.</p>
                </div>
                <div className="text-4xl font-medium text-white">
                  R$ 2.890 <span className="text-sm font-normal text-[#abaebb]">/único</span>
                </div>
                <ul className="space-y-3 text-sm text-white">
                  <li className="flex items-center gap-2"><span className="text-[#625fff]">✓</span> Até 5 páginas completas</li>
                  <li className="flex items-center gap-2"><span className="text-[#625fff]">✓</span> Otimização de SEO Google (Top 1)</li>
                  <li className="flex items-center gap-2"><span className="text-[#625fff]">✓</span> Performance máxima (PageSpeed 95+)</li>
                  <li className="flex items-center gap-2"><span className="text-[#625fff]">✓</span> Copywriting persuasivo incluso</li>
                </ul>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de contratar o Plano Institucional Pro.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-white text-[#0b0c0e] py-3 rounded-full text-sm font-medium hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
              >
                Escolher Plano Pro
              </a>
            </div>

            {/* Card Plano 3 */}
            <div className="bg-[#0d1424] border border-[#1e2d4d] rounded-2xl p-8 flex flex-col justify-between space-y-8 hover:border-[#85a6e9]/40 transition-colors">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white">Soluções Sob Medida</h3>
                  <p className="text-xs text-[#abaebb] mt-1">Sistemas web, dashboards e integrações de IA.</p>
                </div>
                <div className="text-4xl font-medium text-white">
                  Sob Consulta
                </div>
                <ul className="space-y-3 text-sm text-[#c7c9d1]">
                  <li className="flex items-center gap-2"><span className="text-[#85a6e9]">✓</span> Painel administrativo personalizado</li>
                  <li className="flex items-center gap-2"><span className="text-[#85a6e9]">✓</span> Autenticação e banco de dados</li>
                  <li className="flex items-center gap-2"><span className="text-[#85a6e9]">✓</span> Conexão com APIs e Inteligência Artificial</li>
                </ul>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de uma proposta para uma solução sob medida.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-transparent border border-[#3c3f44] text-white py-3 rounded-full text-sm font-medium hover:bg-[#172540] transition-colors"
              >
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 8. FAQ INTERATIVO (ACCORDION SANFONA)                               */}
      {/* =================================================================== */}
      <section id="faq" className="py-24 px-6 relative">
        <div className="max-w-[800px] mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#85a6e9]">
              Dúvidas Comuns
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
              Perguntas Frequentes
            </h2>
            <p className="text-[#abaebb] text-sm md:text-base font-light">
              Tudo o que você precisa saber antes de iniciar o projeto da sua empresa.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#0d1424] border border-[#1e2d4d] rounded-xl overflow-hidden transition-colors hover:border-[#625fff]/40"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-medium text-white focus:outline-none"
                  >
                    <span className="text-base">{faq.q}</span>
                    <span
                      className={`text-[#85a6e9] transition-transform duration-300 text-lg ${
                        isOpen ? "rotate-45 text-[#ff7dda]" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-[#c7c9d1] font-light leading-relaxed border-t border-[#172540]/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 9. FOOTER COM IDENTIDADE DA SYNTROTECH                              */}
      {/* =================================================================== */}
      <footer className="border-t border-[#172540] bg-[#06080d] py-12 px-6 text-center text-xs text-[#abaebb]">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#625fff]" />
            <span className="font-semibold text-white">SyntroTech Solutions</span>
          </div>
          <p>© 2026 SyntroTech. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-[#abaebb]">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>
    </main>
  );
}