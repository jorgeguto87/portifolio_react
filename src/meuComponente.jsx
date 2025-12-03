import React, { useState, useEffect, useRef } from 'react';
import devjorge from './assets/devjorge.png';
import java from './assets/java.svg';
import bot from './assets/bot.png';
import hand from './assets/hand.png';
import rocket from './assets/rocket.png';

const imgLanding = <img style={{ borderRadius: '1.5rem' }} src={rocket} alt='Imagem de Landing Pages' />;
const imgSites = <img style={{ borderRadius: '1.5rem'}} src={hand} alt='Imagem de Sites e Páginas' />;
const imgBots = <img style={{ borderRadius: '1.5rem'}} src={bot} alt='Imagem de Bots' />;
const titulo = '<Dev Augusto />';
const imagemCapa = <img className='imagem__capa' src={devjorge} alt='Dev Jorge' />;
const imagemFundo = <img className='imagem__fundo' src={java} alt='fundo_Java' />;
const textoPrincipal = (
  <div className='texto__principal'>
    <h1 className='texto__principal__titulo'>Tenha mais credibilidade</h1>
    <h2 className='texto__principal__subtitulo'>no seu negócio com estratégias de qualidade!</h2>
    <p className='texto__principal__paragrafo'><strong>Credibilidade, design e tecnologia — tudo em um só projeto.</strong><br />
Sites e landing pages desenvolvidos com visual marcante, navegação fluida e estratégia inteligente para fortalecer a presença digital da sua marca.<br />
Se o que você precisa é um chatbot que transforma atendimento em resultado, conte com o desenvolvimento de assistentes personalizados para WhatsApp, integrados ao seu funil de marketing e atendimento.
<br /><strong>Sua presença digital merece ser notada. Vamos dar o próximo passo?</strong>
</p>
  </div>
);

const cabecalho = (
    <header>
        <div className='menu__cabecalho'>
            <a href="#section1">Início</a>
            <a href="#section2">Soluções</a>
            <a href="#section3">Contato</a>
        </div>
        <h1 className='titulo__cabecalho'>{titulo}</h1>
    </header>
);

const secaoDiferenciais = (
  <div className='secao__diferenciais__container'>
  <section id='section3' className='secao__diferenciais'>
    <svg className='svg__fundo' width="950" height="900" viewBox="0 0 950 900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="2" fill="#FFFFFF" opacity="0.1"/>
        </pattern>
      </defs>
      <rect x="-12" y="0" width="962" height="900" rx="15" fill="url(#dots)" />
    </svg>
    
    <div className="container__diferenciais">
      <h1 className="split__text" id="splitText" data-splitting></h1>
    </div>
  </section>
  </div>
);

function CarrocelSolucoes () {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carrocelRef = useRef(null);
  const slidesContainerRef = useRef(null);
  
  const slides = [
    {
      titulo: "Landing Pages",
      subTitulo: "Visual, velocidade e estratégia!",
      descricao: 
      (
      <>
      <strong>Landing pages otimizadas para atrair leads qualificados, comunicar valor e transformar visitas em clientes.</strong>
      Cada landing page é projetada com foco na jornada do usuário: mensagem clara, design impactante e fluxo orientado à conversão.<br />Layouts responsivos, carregamento rápido e integração com ferramentas de automação garantem que sua campanha entregue resultados reais.<br />Mais contatos, mais vendas e melhor retorno sobre o investimento.
      </>
      ),
      imagem: imgLanding,
      backgroundColor: 'linear-gradient(to right, #ffffff, #d5d5d5)',
      color: "#000000",
      colorDescricao: "#FF7373"
    },
    {
      titulo: "Sites e Páginas",
      subTitulo: "Onde estratégia encontra design!",
      descricao: (
      <>
      <strong>Sites e páginas que fortalecem sua marca e conquistam clientes.</strong>
      Um site é muito mais que presença digital — é o ponto de partida para gerar confiança, atrair novos clientes e transformar visitas em oportunidades reais.<br />Desenvolvidos com design moderno, performance otimizada e navegação intuitiva, seus sites e páginas se adaptam a qualquer dispositivo, oferecendo uma experiência envolvente e estratégica para o público.<br />Do layout à estrutura, tudo é pensado para transmitir credibilidade, destacar sua marca e impulsionar resultados.      
      </>
      ),
      imagem: imgSites,
      backgroundColor: 'linear-gradient(to right, #080A21, #010104)',
      color: "#ffffff",
      colorDescricao: "#FF7373"
    },
    {
      titulo: "Chatbots",
      subTitulo: "Atendimento instantâneo otimizado!",
      descricao: (
        <>
      <strong>Atendimento automático com a essência da sua marca.</strong>
      Automatize conversas e transforme interações em oportunidades.<br /> Os chatbots desenvolvidos para WhatsApp, sites e redes sociais oferecem um atendimento rápido, personalizado e disponível 24 horas por dia.<br />Crie fluxos que captam leads, agendam atendimentos e fortalecem o relacionamento com seus clientes — tudo com a linguagem da sua marca e integração às suas ferramentas de marketing.<br />Mais agilidade, mais engajamento e mais resultados com cada mensagem.
      </>
    ),
      imagem: imgBots,
      backgroundColor: 'linear-gradient(to right, #7EFF8D, #57AD61)',
      color: "#ffffff",
      colorDescricao: "#FF7373"
    }
  ];

  const next = () => {
    if (slideIndex < slides.length - 1) {
      setSlideIndex((index) => index + 1);
    }
  };

  const prev = () => {
    if (slideIndex > 0) {
      setSlideIndex((index) => index - 1);
    }
  };

  // Função para lidar com o início do toque
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY);
  };

  // Função para lidar com o movimento do toque
  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientY);
  };

  // Função para lidar com o fim do toque
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50; // Distância mínima para considerar um swipe
    
    if (Math.abs(distance) < minSwipeDistance) {
      setTouchStart(0);
      setTouchEnd(0);
      return;
    }
    
    if (isScrolling) return;
    
    setIsScrolling(true);
    
    if (distance > 0) {
      // Swipe para cima -> próximo slide
      if (slideIndex < slides.length - 1) {
        next();
      } else {
        // Se estiver no último slide, permite scroll normal
        setIsScrolling(false);
      }
    } else {
      // Swipe para baixo -> slide anterior
      if (slideIndex > 0) {
        prev();
      } else {
        // Se estiver no primeiro slide, permite scroll normal
        setIsScrolling(false);
      }
    }
    
    // Reset dos valores
    setTouchStart(0);
    setTouchEnd(0);
    
    // Timeout para evitar múltiplos swipes rápidos
    setTimeout(() => {
      setIsScrolling(false);
    }, 800);
  };

  // Função para lidar com scroll do mouse (desktop)
  const handleScroll = (e) => {
    if (isScrolling) return;
    
    const carrocelElement = carrocelRef.current;
    if (!carrocelElement) return;

    const carrocelRect = carrocelElement.getBoundingClientRect();
    const isInCarrocel = carrocelRect.top <= window.innerHeight && carrocelRect.bottom >= 0;
    
    if (!isInCarrocel) return;

    const delta = e.deltaY || e.detail || -e.wheelDelta;
    
    // Verificar se está no último slide para permitir scroll para baixo
    if (delta > 0 && slideIndex === slides.length - 1) {
      return;
    }
    
    // Verificar se está no primeiro slide para permitir scroll para cima
    if (delta < 0 && slideIndex === 0) {
      return;
    }

    e.preventDefault();
    
    setIsScrolling(true);
    
    if (delta > 0) {
      next();
    } else if (delta < 0) {
      prev();
    }
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  // Efeito para adicionar event listeners
  useEffect(() => {
    const carrocelElement = carrocelRef.current;
    
    if (carrocelElement) {
      // Listener para desktop (wheel)
      carrocelElement.addEventListener('wheel', handleScroll, { passive: false });
      
      return () => {
        carrocelElement.removeEventListener('wheel', handleScroll);
      };
    }
  }, [slideIndex, isScrolling]);

  return (
    <div 
      className='carrocel' 
      ref={carrocelRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className='carrocel__slides'
        ref={slidesContainerRef}
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index}
            className='carrocel__slide'
            style={{
              background: slide.backgroundColor,
              opacity: index === slideIndex ? 1 : 0,
              transform: index === slideIndex 
                ? 'translateX(0)' 
                : 'translateX(150px)',
              transition: 'all 1.5s ease-in-out'
            }}
          >
            <div className='carrocel__slide__conteudo'>
              <h2 
                className='carrocel__slide__conteudo__titulo' 
                style={{
                  color: slide.color,
                  opacity: index === slideIndex ? 1 : 0,
                  transform: index === slideIndex 
                    ? 'translateX(0)' 
                    : 'translateX(-100px)',
                  transition: 'all 0.6s ease-out 0.3s'
                }}
              >
                {slide.titulo}
              </h2>

              <h3 
                className='carrocel__slide__conteudo__subtitulo' 
                style={{
                  color: slide.colorDescricao,
                  opacity: index === slideIndex ? 1 : 0,
                  transform: index === slideIndex 
                    ? 'translateX(0)' 
                    : 'translateX(-100px)',
                  transition: 'all 0.6s ease-out 0.5s'
                }}
              >
                {slide.subTitulo}
              </h3>

              <p 
                className='carrocel__slide__conteudo__descricao' 
                style={{
                  color: slide.color,
                  opacity: index === slideIndex ? 1 : 0,
                  transform: index === slideIndex 
                    ? 'translateX(0)' 
                    : 'translateX(-100px)',
                  transition: 'all 0.6s ease-out 0.7s'
                }}
              >
                {slide.descricao}
              </p>
            </div>

            <div 
              className='carrocel__slide__imagem'
              style={{
                opacity: index === slideIndex ? 1 : 0, 
                transition: 'opacity 1s ease-in-out 0.7s'
              }}
            >
              {slide.imagem}
            </div>
          </div>
        ))}
      </div>
      
      <div className='carrocel__indicadores'>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`carrocel__indicador ${slideIndex === index ? 'ativo' : ''}`}
            onClick={() => setSlideIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

const secaoSolucoes = (
  <section id='section2' className='secao__solucoes'>
    <CarrocelSolucoes />
  </section>
);

const paginaInicial = (
  <div id='section1' className='pagina__inicial'>
    {imagemCapa}
    {textoPrincipal}
    {imagemFundo}
  </div>
);

function MeuComponente() {
  
  useEffect(() => {
    const gsap = window.gsap;
    
    if (gsap && gsap.registerPlugin) {
      gsap.registerPlugin(window.ScrollToPlugin);
    }
    
    const links = document.querySelectorAll(".menu__cabecalho a");
    
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        
        gsap.to(window, {
          duration:1.5,
          scrollTo: {
            y: targetId,
            offsetY: 140
          },
          ease: "power3.out"
        });
      });
    });
    
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return;

    const splitManual = (texto) => {
      const el = document.getElementById("splitText");
      if (!el) return [];
      
      el.innerHTML = texto;
      el.style.opacity = 1;
      
      const walker = document.createTreeWalker(
        el,
        NodeFilter.SHOW_TEXT,
        null,
        false
      );
      
      const textNodes = [];
      while(walker.nextNode()) {
        textNodes.push(walker.currentNode);
      }
      
      textNodes.forEach(node => {
        const words = node.textContent.split(' ');
        const fragment = document.createDocumentFragment();
        
        words.forEach((word, i) => {
          const wordWrap = document.createElement('span');
          wordWrap.style.display = 'inline-block';
          wordWrap.style.whiteSpace = 'nowrap';
          
          word.split('').forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            span.className = 'char';
            span.style.display = 'inline-block';
            span.style.whiteSpace = 'pre';
            wordWrap.appendChild(span);
          });
          
          fragment.appendChild(wordWrap);
          
          if (i < words.length - 1) {
            fragment.appendChild(document.createTextNode(' '));
          }
        });
        
        node.parentNode.replaceChild(fragment, node);
      });
      
      return el.querySelectorAll('.char');
    };

    const loopTextos = () => {
      const tl = gsap.timeline({ onComplete: loopTextos });
      
      // TEXTO 1
      let chars1 = splitManual("EMPRESAS COM PRESENÇA DIGITAL SÓLIDA CRESCEM AUTOMATICAMENTE, <strong>ATRAINDO CLIENTES CONTINUAMENTE SEM ESFORÇO ATIVO.</strong>");
      
      tl.from(chars1, {
        duration: 2,
        yPercent: () => gsap.utils.random(-150, 150),
        xPercent: () => gsap.utils.random(-150, 150),
        opacity: 0,
        stagger: {from: "random", amount: 3},
        ease: "power3.out"
      })
      .to(chars1, {opacity: 0, duration: 1}, "+=8")
      
      // TEXTO 2
      .call(() => {
        let chars2 = splitManual("UM SITE BEM FEITO TRANSFORMA CURIOSIDADE EM CONVERSÃO REAL, <strong>UNINDO ESTRATÉGIA, DESIGN E PERFORMANCE.</strong>");
        
        gsap.from(chars2, {
          duration: 2,
          yPercent: () => gsap.utils.random(-150, 150),
          xPercent: () => gsap.utils.random(-150, 150),
          opacity: 0,
          stagger: {from: "random", amount: 3},
          ease: "power3.out"
        });
        
        gsap.to(chars2, {opacity: 0, duration: 1, delay: 8});
      })
      .to({}, {duration: 11})
      
      // TEXTO 3
      .call(() => {
        let chars3 = splitManual("NÃO CRIE APENAS UM SITE COMUM, <strong>OFEREÇA EXPERIÊNCIAS MEMORÁVEIS QUE ENCANTAM E CONECTAM CLIENTES.</strong>");
        
        gsap.from(chars3, {
          duration: 2,
          yPercent: () => gsap.utils.random(-150, 150),
          xPercent: () => gsap.utils.random(-150, 150),
          opacity: 0,
          stagger: {from: "random", amount: 3},
          ease: "power3.out"
        });
        
        gsap.to(chars3, {opacity: 0, duration: 1, delay: 8});
      })
      .to({}, {duration: 11})
      
      // TEXTO 4
      .call(() => {
        let chars4 = splitManual("UMA EXPERIÊNCIA DIGITAL FORTE COMEÇA COM UM SITE IMPRESSIONANTE, <strong>INTEGRADO A TECNOLOGIAS MODERNAS E EFICIENTES.</strong>");
        
        gsap.from(chars4, {
          duration: 2,
          yPercent: () => gsap.utils.random(-150, 150),
          xPercent: () => gsap.utils.random(-150, 150),
          opacity: 0,
          stagger: {from: "random", amount: 3},
          ease: "power3.out"
        });
        
        gsap.to(chars4, {opacity: 0, duration: 1, delay: 8});
      })
      .to({}, {duration: 11});
    };
    
    const timer = setTimeout(() => {
      if (document.getElementById("splitText")) {
        loopTextos();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (    
    <div>
        {cabecalho}
        {paginaInicial}
        {secaoSolucoes}
        {secaoDiferenciais}
    </div>
  );
}

export default MeuComponente;