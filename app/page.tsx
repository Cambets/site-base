
"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const whatsappNumber = "5537999422997"; 

  // Links prontos com WhatsApp
  const msgGeral = encodeURIComponent("Olá! Gostaria de entender mais sobre o desenvolvimento de sites.");
  const msgExpress = encodeURIComponent("Olá! Gostaria de contratar a Landing Page Express.");
  const msgPro = encodeURIComponent("Olá! Gostaria de solicitar uma proposta para o Plano Institucional Pro.");
  const msgCustom = encodeURIComponent("Olá! Gostaria de uma solução personalizada para o meu projeto.");

  // Estado interativo do botão de cópia
  const [copied, setCopied] = useState(false);

  // Efeito interativo de digitação automática no terminal
  const fullCode = `const project = {
  framework: "Next.js 16",
  styling: "Tailwind CSS",
  performance: 100,
  conversionReady: true,
  status: "live_in_production"
};`;

  const [displayedCode, setDisplayedCode] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedCode(fullCode.slice(0, index));
      index++;
      if (index > fullCode.length) {
        clearInterval(interval);
      }
    }, 28);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#0e111b] text-white selection:bg-[#625fff] selection:text-white">
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0c0e]/80 border-b border-[#172540]">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-[#625fff] animate-pulse" />
            <span className="font-['Figtree'] font-semibold text-lg tracking-tight text-white">
              NovaTech
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm text-[#abaebb]">
            <a href="#recursos" className="hover:text-white transition-colors">
              Recursos
            </a>
            <a href="#precos" className="hover:text-white transition-colors">
              Planos
            </a>
          </nav>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${msgGeral}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0b0c0e] font-medium text-sm px-5 py-2 rounded-full hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* 2. HERO COM EFEITOS INTERATIVOS */}
      <section className="relative overflow-hidden py-20 md:py-28 px-6 border-b border-[#172540]">
        {/* Aurora Glows */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#625fff]/20 blur-[130px] rounded-full" />
        <div className="pointer-events-none absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#ff7dda]/15 blur-[120px] rounded-full" />

        <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Textos */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-[#85a6e9] bg-[#12244f] border border-[#24375a] rounded-full shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#625fff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#625fff]"></span>
              </span>
              Desenvolvimento Web & Soluções Digitais
            </div>

            <h1 className="text-4xl md:text-6xl font-medium tracking-tight font-['Figtree'] leading-[1.08] text-white">
              Sites ultra-rápidos que convertem visitantes em clientes.
            </h1>

            <p className="text-lg text-[#abaebb] font-light max-w-xl leading-relaxed">
              Criamos plataformas modernas com design premium e arquitetura escalável para posicionar sua marca com autoridade máxima.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${msgGeral}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0b0c0e] font-medium px-6 py-3 rounded-full hover:bg-neutral-200 hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-[15px]"
              >
                Solicitar Orçamento
              </a>
              <a
                href="#precos"
                className="bg-transparent border border-[#3c3f44] text-white font-medium px-6 py-3 rounded-full hover:bg-[#172540] hover:border-[#85a6e9] transition-all text-[15px]"
              >
                Ver Planos
              </a>
            </div>
          </div>

          {/* Terminal Interativo com Digitação */}
          <div className="lg:col-span-5 bg-[#0d172b] border border-[#172540] rounded-xl p-5 shadow-2xl relative group hover:border-[#2862d7]/60 transition-colors">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#151e32]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="text-xs text-[#abaebb] font-mono ml-2">architecture.config.ts</span>
              </div>

              {/* Botão Copiar */}
              <button
                onClick={handleCopy}
                className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#172540] text-[#c7c9d1] hover:bg-[#24375a] hover:text-white transition-all"
              >
                {copied ? "✓ Copiado!" : "Copiar"}
              </button>
            </div>

            {/* Código com cursor piscando */}
            <div className="min-h-[160px]">
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

      {/* 3. RECURSOS */}
      <section id="recursos" className="py-24 px-6 border-b border-[#172540]">
        <div className="max-w-[1200px] mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#85a6e9]">
              Tecnologia de Alto Padrão
            </span>
            <h2 className="text-3xl md:text-5xl font-medium font-['Figtree'] tracking-tight text-white">
              Tudo o que sua empresa precisa para dominar o digital
            </h2>
            <p className="text-[#abaebb] text-base md:text-lg font-light">
              Soluções sob medida construídas com as tecnologias mais modernas do mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0d172b] border border-[#172540] rounded-xl p-8 flex flex-col justify-between hover:border-[#2862d7]/50 hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#0e111b] border border-[#172540] flex items-center justify-center text-[#2862d7]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium font-['Figtree'] text-white">Ultra Performance</h3>
                <p className="text-[#c7c9d1] text-sm leading-relaxed">
                  Páginas que carregam em milissegundos. Nota máxima no Google PageSpeed para reter usuários.
                </p>
              </div>
            </div>

            <div className="bg-[#12244f] border border-[#24375a] rounded-xl p-8 flex flex-col justify-between relative shadow-xl shadow-black/40 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -top-3 right-6 bg-[#625fff] text-white text-[11px] font-semibold px-3 py-0.5 rounded-full uppercase tracking-wider">
                Mais Solicitado
              </div>
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#0d172b] border border-[#24375a] flex items-center justify-center text-[#85a6e9]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium font-['Figtree'] text-white">Design de Alta Conversão</h3>
                <p className="text-[#c7c9d1] text-sm leading-relaxed">
                  Estrutura pensada para conduzir o cliente até o fechamento de contrato com clareza e autoridade.
                </p>
              </div>
            </div>

            <div className="bg-[#0d172b] border border-[#172540] rounded-xl p-8 flex flex-col justify-between hover:border-[#2862d7]/50 hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#0e111b] border border-[#172540] flex items-center justify-center text-[#2862d7]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium font-['Figtree'] text-white">100% Responsivo</h3>
                <p className="text-[#c7c9d1] text-sm leading-relaxed">
                  Adaptação perfeita para qualquer smartphone, tablet ou computador.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PLANOS */}
      <section id="precos" className="py-24 px-6 relative">
        <div className="max-w-[1200px] mx-auto space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#85a6e9]">
              Investimento Transparente
            </span>
            <h2 className="text-3xl md:text-5xl font-medium font-['Figtree'] tracking-tight text-white">
              Escolha o formato ideal para o seu projeto
            </h2>
            <p className="text-[#abaebb] text-base font-light">
              Projetos entregues com agilidade, sem surpresas e com código moderno.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Plano 1 */}
            <div className="bg-[#0d172b] border border-[#172540] rounded-xl p-8 flex flex-col justify-between space-y-8 hover:border-[#85a6e9]/40 transition-colors">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white">Landing Page Express</h3>
                  <p className="text-xs text-[#abaebb] mt-1">Ideal para validar produtos e campanhas rápidas.</p>
                </div>
                <div className="text-4xl font-medium font-['Figtree'] text-white">
                  R$ 1.490 <span className="text-sm font-normal text-[#abaebb]">/único</span>
                </div>
                <ul className="space-y-3 text-sm text-[#c7c9d1]">
                  <li className="flex items-center gap-2"><span className="text-[#85a6e9]">✓</span> Página única de alta conversão</li>
                  <li className="flex items-center gap-2"><span className="text-[#85a6e9]">✓</span> Botões de WhatsApp integrados</li>
                  <li className="flex items-center gap-2"><span className="text-[#85a6e9]">✓</span> Design 100% Responsivo</li>
                </ul>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${msgExpress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-transparent border border-[#3c3f44] text-white py-3 rounded-full text-sm font-medium hover:bg-[#172540] transition-colors"
              >
                Contratar Express
              </a>
            </div>

            {/* Plano 2 */}
            <div className="bg-[#12244f] border border-[#24375a] rounded-xl p-8 flex flex-col justify-between space-y-8 relative shadow-2xl shadow-black/60 md:-translate-y-2 hover:border-[#625fff] transition-colors">
              <div className="absolute -top-3 right-6 bg-[#625fff] text-white text-[11px] font-semibold px-3 py-0.5 rounded-full uppercase tracking-wider">
                Recomendado
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white">Institucional Pro</h3>
                  <p className="text-xs text-[#85a6e9] mt-1">Solução completa para empresas que buscam autoridade.</p>
                </div>
                <div className="text-4xl font-medium font-['Figtree'] text-white">
                  R$ 2.890 <span className="text-sm font-normal text-[#abaebb]">/único</span>
                </div>
                <ul className="space-y-3 text-sm text-[#ffffff]">
                  <li className="flex items-center gap-2"><span className="text-[#625fff]">✓</span> Até 5 páginas completas</li>
                  <li className="flex items-center gap-2"><span className="text-[#625fff]">✓</span> Formulários e WhatsApp</li>
                  <li className="flex items-center gap-2"><span className="text-[#625fff]">✓</span> Performance máxima (PageSpeed 95+)</li>
                  <li className="flex items-center gap-2"><span className="text-[#625fff]">✓</span> Copywriting persuasivo incluso</li>
                </ul>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${msgPro}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-white text-[#0b0c0e] py-3 rounded-full text-sm font-medium hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
              >
                Escolher Plano Pro
              </a>
            </div>

            {/* Plano 3 */}
            <div className="bg-[#0d172b] border border-[#172540] rounded-xl p-8 flex flex-col justify-between space-y-8 hover:border-[#85a6e9]/40 transition-colors">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white">Soluções Sob Medida</h3>
                  <p className="text-xs text-[#abaebb] mt-1">Sistemas web, painéis e automações.</p>
                </div>
                <div className="text-4xl font-medium font-['Figtree'] text-white">
                  Sob Consulta
                </div>
                <ul className="space-y-3 text-sm text-[#c7c9d1]">
                  <li className="flex items-center gap-2"><span className="text-[#85a6e9]">✓</span> Painel de controle sob medida</li>
                  <li className="flex items-center gap-2"><span className="text-[#85a6e9]">✓</span> Banco de dados e autenticação</li>
                  <li className="flex items-center gap-2"><span className="text-[#85a6e9]">✓</span> Integrações com APIs e IA</li>
                </ul>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${msgCustom}`}
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

      {/* 5. FOOTER */}
      <footer className="border-t border-[#172540] bg-[#0b0c0e] py-12 px-6 text-center text-xs text-[#abaebb]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#625fff]" />
            <span className="font-semibold text-white">NovaTech Solutions</span>
          </div>
          <p>© 2026 NovaTech. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-[#abaebb]">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>
    </main>
  );
}