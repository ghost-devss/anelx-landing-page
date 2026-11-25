/* AnelX — animações (GSAP + ScrollTrigger, servidos de js/vendor/).
   Tudo roda dentro de gsap.matchMedia: com "reduzir movimento" ligado nada é criado,
   e se a preferência mudar com a página aberta, tudo é desfeito sozinho.
   Tom do design: calmo. Movimentos curtos, sem quique, sem nada gritado. */
(() => {
  const doc = document.documentElement;
  if (!window.gsap || !window.ScrollTrigger) { doc.classList.remove('anim'); return; }
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  const CREME = '#F4EEE4';
  const CARVAO = '#191714';
  const SUAVE = 'power3.out';
  const PAINEL_INICIO = 'inset(3% 2.5% 3% 2.5% round 32px)'; // quadro inicial do hero; igual ao CSS (.anim .hero__painel)
  const $ = (sel, raiz = document) => raiz.querySelector(sel);
  const $$ = (sel, raiz = document) => [...raiz.querySelectorAll(sel)];

  const mm = gsap.matchMedia();
  let limpar = [];   // desfaz o que o GSAP não desfaz sozinho (textos trocados à mão, ouvintes)
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    doc.classList.add('anim');
    try {
      hero();
      revelar();
      manifesto();
      parallax();
      contador();
      leque();
      fundoEscuro();
    } catch (erro) {
      console.error('[AnelX] animações desligadas:', erro);
      doc.classList.remove('anim');
      limpar.forEach(f => f());
      limpar = [];
      mm.revert();
    }
    document.addEventListener('click', ancoraSuave);
    return () => {
      document.removeEventListener('click', ancoraSuave);
      doc.classList.remove('anim');
      limpar.forEach(f => f());
      limpar = [];
    };
  });

  /* ---------- Hero: entrada cinematográfica ----------
     1. o painel pêssego se abre  2. tag  3. título palavra a palavra, saindo de uma máscara
     4. subtítulo e CTA em sequência  5. a foto se revela por uma janela que cresce da base
     6. depois, a foto "respira" e segue o mouse de leve  7. na rolagem, cada camada sai num ritmo */

  // Quebra o título em palavras com máscara. O i18n reescreve o innerHTML, então isso é refeito a cada troca.
  function dividirPalavras(el) {
    const texto = el.textContent.trim().replace(/\s+/g, ' ');
    el.setAttribute('aria-label', texto);
    el.replaceChildren(...texto.split(' ').flatMap((palavra, i) => {
      const fora = document.createElement('span');
      const dentro = document.createElement('span');
      fora.className = 'palavra';
      fora.setAttribute('aria-hidden', 'true');
      dentro.className = 'palavra__int';
      dentro.textContent = palavra;
      fora.append(dentro);
      return i ? [' ', fora] : [fora];
    }));
    return $$('.palavra__int', el);
  }

  // Espera a foto decodificar, mas nunca mais que `limite` ms (não segura a primeira dobra).
  function fotoPronta(img, limite) {
    const pronta = img.complete && img.naturalWidth ? Promise.resolve() : (img.decode?.() ?? Promise.resolve());
    return Promise.race([pronta.catch(() => {}), new Promise(r => setTimeout(r, limite))]);
  }

  function hero() {
    const painel = $('.hero__painel');
    if (!painel) return;
    const texto = $('.hero__texto');
    const badge = $('.tag', texto);
    const titulo = $('.hero__titulo');
    const sub = $('.hero__sub');
    const cta = $('.hero__cta');
    const foto = $('.hero__imagem');
    const img = $('img', foto);
    let vivo = true;
    let respirar = null;
    let fotoTl = null;
    let tirarMouse = null;
    // Troca de idioma: o i18n devolve o título como texto puro; divide de novo, já visível.
    const aoTrocar = () => dividirPalavras(titulo);
    document.addEventListener('anelx:idioma', aoTrocar);

    limpar.push(() => {
      vivo = false;
      document.removeEventListener('anelx:idioma', aoTrocar);
      tirarMouse?.();
      fotoTl?.kill();
      respirar?.kill();
      gsap.set([img, foto], { clearProps: 'all' });
      if (titulo.hasAttribute('aria-label')) titulo.textContent = titulo.getAttribute('aria-label');
      titulo.removeAttribute('aria-label');
    });

    /* Texto e painel: começam na hora, sem esperar a imagem */
    const palavras = dividirPalavras(titulo);
    gsap.set(titulo, { opacity: 1 });
    gsap.timeline({ defaults: { ease: 'expo.out' } })
      .fromTo(painel, { clipPath: PAINEL_INICIO }, { clipPath: 'inset(0% 0% 0% 0% round 20px)', duration: 1.8, ease: 'expo.inOut' }, 0)
      .fromTo(badge, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 1 }, 0.25)
      .fromTo(palavras, { yPercent: 115, rotation: 2 }, { yPercent: 0, rotation: 0, duration: 1.4, stagger: 0.07 }, 0.35)
      .fromTo(sub, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 1.2 }, '-=1.0')
      .fromTo(cta, { opacity: 0, y: 18, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 1.2 }, '-=1.0');

    /* Foto: janela que cresce a partir da base + escala que assenta */
    // (clip-path com fromTo e as duas strings no mesmo formato: o navegador encurta "inset(a b c b)"
    //  para 3 valores e o GSAP interpolaria os números fora de ordem)
    gsap.set(img, { opacity: 0, scale: 1.22, yPercent: 6, transformOrigin: '50% 60%' });
    fotoPronta(img, 800).then(() => {
      if (!vivo) return;
      fotoTl = gsap.timeline({ delay: 0.15, onComplete: iniciarRespiro })
        .fromTo(foto, { clipPath: 'inset(34% 20% 0% 20% round 28px)' },
          { clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 2, ease: 'expo.inOut' }, 0)
        .to(img, { opacity: 1, duration: 0.9, ease: 'power2.out' }, 0)
        .to(img, { scale: 1, yPercent: 0, duration: 2.6, ease: 'expo.out' }, 0.2);
    });

    /* Movimento contínuo: respiro lentíssimo, pausado fora da tela */
    let heroVisivel = true;
    function iniciarRespiro() {
      if (!vivo) return;
      respirar = gsap.to(img, { scale: 1.04, duration: 10, ease: 'sine.inOut', yoyo: true, repeat: -1, paused: !heroVisivel });
    }
    ScrollTrigger.create({
      trigger: '.hero', start: 'top bottom', end: 'bottom top',
      onToggle: s => { heroVisivel = s.isActive; respirar?.[s.isActive ? 'play' : 'pause'](); },
    });

    /* Profundidade com o mouse (só desktop com mouse de verdade) */
    if (matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1024px)').matches) {
      const fotoX = gsap.quickTo(img, 'x', { duration: 1.6, ease: 'power3.out' });
      const fotoY = gsap.quickTo(img, 'y', { duration: 1.6, ease: 'power3.out' });
      const textoX = gsap.quickTo(texto, 'x', { duration: 1.8, ease: 'power3.out' });
      const mover = e => {
        const r = painel.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;   // -0,5 … 0,5
        const ny = (e.clientY - r.top) / r.height - 0.5;
        fotoX(nx * -18); fotoY(ny * -10); textoX(nx * 6);
      };
      const soltar = () => { fotoX(0); fotoY(0); textoX(0); };
      painel.addEventListener('pointermove', mover);
      painel.addEventListener('pointerleave', soltar);
      tirarMouse = () => { painel.removeEventListener('pointermove', mover); painel.removeEventListener('pointerleave', soltar); };
    }

    /* Saída na rolagem: texto sai rápido, foto fica para trás (parallax), painel recua */
    const sair = { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6 };
    gsap.to(texto, { y: -90, opacity: 0, ease: 'none', scrollTrigger: { ...sair, end: '55% top' } });
    gsap.to(foto, { yPercent: 14, ease: 'none', scrollTrigger: { ...sair } });
    gsap.to(painel, { scale: 0.95, transformOrigin: '50% 0%', ease: 'none', scrollTrigger: { ...sair } });
  }

  /* ---------- Revelar ao entrar na tela (uma vez) ---------- */
  function grupo(alvos, gatilho, de = { y: 32 }, extra = {}) {
    const els = typeof alvos === 'string' ? $$(alvos) : alvos;
    if (!els.length) return;
    gsap.fromTo(els, { opacity: 0, ...de }, {
      opacity: 1, x: 0, y: 0, duration: 1.1, ease: SUAVE, stagger: 0.09, ...extra,
      scrollTrigger: { trigger: gatilho || els[0], start: 'top 85%', once: true },
    });
  }
  function revelar() {
    grupo('.manifesto .display, .manifesto__sub, .manifesto__botoes', '.manifesto');
    grupo('.carrossel__trilha > li', '.carrossel__trilha', { x: 80 }, { duration: 1.3, stagger: 0.1 });
    grupo('.carrossel__controles', '.carrossel__controles', { y: 16 });
    grupo('.prova__sub, .prova__cta', '.prova__sub');
    grupo('.prova__imagem, .prova__nota', '.prova__imagem', { y: 48 });
    grupo('.app .centro > *', '.app');
    grupo('.sensores__imagem', '.sensores', { y: 48 });
    grupo('.sensores__texto > *', '.sensores__texto');
    grupo('.depo-card', '.depo-lista', { y: 48 }, { stagger: 0.12 });
    grupo('.ciencia__eyebrow', '.ciencia', { y: 16 });
    grupo('.destaque', '.destaque', { y: 48 });
    grupo('.card-escuro', '.ciencia__lista', { y: 32 }, { stagger: 0.12 });
    grupo('.rodape__imagem', '.rodape', { y: 48 });
    grupo('.rodape__news > *', '.rodape__news', { y: 24 });
    grupo('.rodape__colunas > div', '.rodape__colunas', { y: 24 });
  }

  /* ---------- Manifesto: a faixa nasce estreita e se abre com a rolagem ---------- */
  function manifesto() {
    const figura = $('.manifesto__imagem');
    if (!figura) return;
    const rolagem = { trigger: figura, start: 'top 95%', end: 'center 55%', scrub: 0.6, invalidateOnRefresh: true };
    const lado = () => (innerWidth < 640 ? 10 : 22);
    gsap.fromTo(figura,
      { clipPath: () => `inset(0% ${lado()}% 0% ${lado()}% round 20px)` },
      { clipPath: 'inset(0% 0% 0% 0% round 20px)', ease: 'none', scrollTrigger: rolagem });
    gsap.fromTo($('img', figura), { scale: 1.3 }, { scale: 1, ease: 'none', scrollTrigger: { ...rolagem } });
  }

  /* ---------- Parallax leve dentro das molduras de foto ---------- */
  function parallax() {
    $$('.prova__imagem img, .sensores__imagem img, .destaque > img, .rodape__imagem img').forEach(img => {
      gsap.fromTo(img, { yPercent: -5, scale: 1.12 }, {
        yPercent: 5, scale: 1.12, ease: 'none',
        scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    });
  }

  /* ---------- Contador "100 mil" / "100,000" ----------
     O i18n troca o innerHTML do título, então o número é lido do texto atual na hora de contar.
     Enquanto o número não chega ao fim, o aria-label guarda o texto completo para leitores de tela. */
  function contador() {
    const titulo = $('.prova__titulo');
    if (!titulo) return;
    let tween = null;
    let feito = false;

    const partes = () => {
      const no = titulo.firstChild;
      const m = no && no.nodeType === 3 ? no.data.match(/^(\d[\d.,]*)/) : null;
      if (!m) return null;
      const sep = (m[1].match(/[.,]/) || [''])[0];
      return { no, original: no.data, resto: no.data.slice(m[1].length), alvo: +m[1].replace(/[.,]/g, ''), sep };
    };
    const formatar = (n, sep) => (sep ? String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep) : String(n));
    const rotular = () => titulo.setAttribute('aria-label', titulo.textContent.replace(/\d+$/, '').trim());

    let p = null;   // texto real guardado antes de zerar
    const restaurar = () => { if (p) p.no.data = p.original; };
    function zerar() {
      p = partes();
      if (!p) return;
      rotular();
      p.no.data = formatar(0, p.sep) + p.resto;
    }
    function contar() {
      if (!p || !p.no.isConnected) return;
      const v = { n: 0 };
      tween = gsap.to(v, {
        n: p.alvo, duration: 2.2, ease: 'power2.out',
        onUpdate: () => { p.no.data = formatar(Math.round(v.n), p.sep) + p.resto; },
        onComplete: () => { p.no.data = p.original; feito = true; titulo.removeAttribute('aria-label'); },
      });
    }

    rotular();
    zerar();
    ScrollTrigger.create({ trigger: titulo, start: 'top 85%', once: true, onEnter: contar });
    grupo([titulo], titulo, { y: 32 });

    // Troca de idioma: o i18n já devolveu o texto inteiro; se ainda não contou, zera de novo.
    const aoTrocar = () => {
      if (feito) return;
      if (tween) { tween.kill(); feito = true; titulo.removeAttribute('aria-label'); return; }
      zerar();
    };
    document.addEventListener('anelx:idioma', aoTrocar);
    limpar.push(() => {
      document.removeEventListener('anelx:idioma', aoTrocar);
      tween?.kill();
      if (!feito) restaurar();
      titulo.removeAttribute('aria-label');
    });
  }

  /* ---------- Leque do app: telas empilhadas se abrem com a rolagem ---------- */
  function leque() {
    const leque = $('.leque');
    if (!leque) return;
    const slots = $$('.leque__slot', leque);
    // distância (sem transform) de cada tela até o centro do leque
    const aoCentro = (i, el) => leque.clientWidth / 2 - (el.offsetLeft + el.offsetWidth / 2);

    gsap.fromTo(slots,
      { x: aoCentro, rotation: i => (i - 2) * 5, scale: 0.94, transformOrigin: '50% 100%' },
      {
        x: 0, rotation: 0, scale: 1, ease: 'none',
        scrollTrigger: { trigger: leque, start: 'top 90%', end: 'center 55%', scrub: 0.8, invalidateOnRefresh: true },
      });

    // Dados das telas ganham vida uma vez, quando o leque já está quase aberto.
    const tl = gsap.timeline({ paused: true, defaults: { ease: SUAVE, duration: 1.2 } });
    $$('path[fill="none"][stroke-width="2"]', leque).forEach(p => {
      const total = p.getTotalLength();
      tl.fromTo(p, { strokeDasharray: total, strokeDashoffset: total }, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' }, 0);
    });
    tl.fromTo($$('svg circle', leque), { scale: 0, transformOrigin: '50% 50%' }, { scale: 1, duration: 0.5, ease: 'back.out(2)' }, 1.3);
    $$('.score', leque).forEach(s => {
      const b = $('b', s);
      const alvo = +b.textContent;
      const v = { n: 0 };
      tl.fromTo(s, { '--v': 0 }, { '--v': +s.style.getPropertyValue('--v') }, 0.1);
      tl.fromTo(v, { n: 0 }, { n: alvo, onUpdate: () => { b.textContent = Math.round(v.n); } }, 0.1);
      limpar.push(() => { b.textContent = alvo; });
    });
    tl.fromTo($$('.tela__barras i', leque), { scaleY: 0, transformOrigin: '50% 100%' }, { scaleY: 1, stagger: 0.06, duration: 0.9 }, 0.1);
    tl.fromTo($$('.tela--sono .tela__grafico rect', leque), { scaleX: 0, transformOrigin: '0% 50%' }, { scaleX: 1, stagger: 0.03, duration: 0.6 }, 0.1);
    $$('.tela__zonas i', leque).forEach((z, i) => {
      tl.fromTo(z, { '--w': '0%' }, { '--w': z.style.getPropertyValue('--w') }, 0.2 + i * 0.1);
    });
    $$('.tela__progresso', leque).forEach(p => {
      tl.fromTo(p, { '--v': 0 }, { '--v': +p.style.getPropertyValue('--v'), duration: 1.6 }, 0.1);
    });

    ScrollTrigger.create({ trigger: leque, start: 'top 45%', once: true, onEnter: () => tl.play() });
  }

  /* ---------- Fundo: creme vira carvão ao chegar na Ciência ---------- */
  function fundoEscuro() {
    if (!$('.ciencia')) return;
    gsap.fromTo(document.body, { backgroundColor: CREME }, {
      backgroundColor: CARVAO, ease: 'none',
      scrollTrigger: { trigger: '.ciencia', start: 'top 90%', end: 'top 40%', scrub: true },
    });
  }

  /* ---------- Recalcular quando o layout muda ---------- */
  let espera;
  const recalcular = () => { clearTimeout(espera); espera = setTimeout(() => ScrollTrigger.refresh(), 150); };
  document.addEventListener('anelx:idioma', recalcular);          // textos mudam de tamanho
  document.fonts?.ready.then(recalcular);                          // fonte real chega
  $('.aviso__fechar')?.addEventListener('click', recalcular);      // barra de aviso some
  addEventListener('load', recalcular);

  /* ---------- Links âncora com rolagem suave ----------
     Substitui o scroll-behavior: smooth do CSS, que atrapalha as medidas do ScrollTrigger.
     O "Pular para o conteúdo" fica nativo (instantâneo). */
  function ancoraSuave(e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link || link.classList.contains('pular') || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const id = decodeURIComponent(link.hash.slice(1));
    const alvo = id ? document.getElementById(id) : null;
    if (!alvo) return;
    e.preventDefault();
    alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', `#${id}`);
    // leva o foco junto, como o âncora nativo faz
    if (!alvo.matches('a, button, input, [tabindex]')) alvo.setAttribute('tabindex', '-1');
    alvo.focus({ preventScroll: true });
  }
})();
