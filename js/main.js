/* AnelX — interações: aviso, nav, menu mobile, carrosséis, cards "+" e newsletter. */
(() => {
  const doc = document.documentElement;
  const t = chave => (window.anelxI18n ? window.anelxI18n.t(chave) : chave);
  const reduzMovimento = matchMedia('(prefers-reduced-motion: reduce)');
  const comportamento = () => (reduzMovimento.matches ? 'auto' : 'smooth');

  /* ---------- 1. Barra de aviso ---------- */
  const aviso = document.getElementById('aviso');
  aviso?.querySelector('.aviso__fechar')?.addEventListener('click', () => {
    aviso.hidden = true;
    try { localStorage.setItem('anelx-aviso', '1'); } catch (e) { /* navegação privada */ }
    document.getElementById('nav')?.querySelector('a, button')?.focus();
  });

  /* ---------- 2. Nav: fica sólida ao rolar ---------- */
  const nav = document.getElementById('nav');
  const atualizarNav = () => nav.classList.toggle('nav--solida', scrollY > 8 || doc.classList.contains('menu-aberto'));
  addEventListener('scroll', atualizarNav, { passive: true });
  atualizarNav();

  /* ---------- Menu mobile ---------- */
  const botaoMenu = nav.querySelector('.nav__menu');
  const menu = document.getElementById('menu-mobile');

  function ajustarAlturaMenu() {
    menu.style.height = `${innerHeight - nav.getBoundingClientRect().bottom}px`;
  }
  function alternarMenu(abrir) {
    botaoMenu.setAttribute('aria-expanded', String(abrir));
    botaoMenu.setAttribute('aria-label', t(abrir ? 'menuFechar' : 'menuAbrir'));
    menu.hidden = !abrir;
    doc.classList.toggle('menu-aberto', abrir);
    if (abrir) ajustarAlturaMenu();
    atualizarNav();
  }
  botaoMenu.addEventListener('click', () => {
    const abrir = botaoMenu.getAttribute('aria-expanded') !== 'true';
    alternarMenu(abrir);
    if (abrir) menu.querySelector('a')?.focus();
  });
  menu.addEventListener('click', e => { if (e.target.closest('a')) alternarMenu(false); });
  addEventListener('keydown', e => {
    if (e.key === 'Escape' && !menu.hidden) { alternarMenu(false); botaoMenu.focus(); }
  });
  addEventListener('resize', () => { if (!menu.hidden) ajustarAlturaMenu(); });
  matchMedia('(min-width: 1024px)').addEventListener('change', e => { if (e.matches) alternarMenu(false); });
  document.addEventListener('anelx:idioma', () => {
    botaoMenu.setAttribute('aria-label', t(botaoMenu.getAttribute('aria-expanded') === 'true' ? 'menuFechar' : 'menuAbrir'));
  });

  /* ---------- 5. Carrossel de benefícios ---------- */
  document.querySelectorAll('[data-carrossel]').forEach(carrossel => {
    const trilha = carrossel.querySelector('.carrossel__trilha');
    const anterior = carrossel.querySelector('[data-ant]');
    const proximo = carrossel.querySelector('[data-prox]');
    const barra = carrossel.querySelector('.carrossel__progresso span');

    const passo = () => {
      const card = trilha.querySelector('li');
      return card.getBoundingClientRect().width + parseFloat(getComputedStyle(trilha).columnGap || '0');
    };
    function atualizar() {
      const maximo = trilha.scrollWidth - trilha.clientWidth;
      const fracao = maximo > 0 ? trilha.scrollLeft / maximo : 0;
      const visivel = Math.min(1, trilha.clientWidth / trilha.scrollWidth);
      barra.style.width = `${visivel * 100}%`;
      barra.style.left = `${fracao * (1 - visivel) * 100}%`;
      anterior.disabled = trilha.scrollLeft <= 2;
      proximo.disabled = trilha.scrollLeft >= maximo - 2;
    }
    anterior.addEventListener('click', () => trilha.scrollBy({ left: -passo(), behavior: comportamento() }));
    proximo.addEventListener('click', () => trilha.scrollBy({ left: passo(), behavior: comportamento() }));
    trilha.addEventListener('scroll', atualizar, { passive: true });
    addEventListener('resize', atualizar);
    atualizar();
  });

  /* ---------- Cards "+" ---------- */
  document.querySelectorAll('.card-beneficio__mais').forEach(botao => {
    botao.addEventListener('click', () => {
      const aberto = botao.getAttribute('aria-expanded') === 'true';
      botao.setAttribute('aria-expanded', String(!aberto));
      document.getElementById(botao.getAttribute('aria-controls')).hidden = aberto;
    });
  });

  /* ---------- 10. Newsletter (serviço ainda não conectado) ---------- */
  const form = document.querySelector('.news-form');
  const mensagem = document.querySelector('.news-msg');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.elements.email;
    if (!email.value.trim() || !email.checkValidity()) {
      email.setAttribute('aria-invalid', 'true');
      mensagem.textContent = t('newsErro');
      email.focus();
      return;
    }
    email.removeAttribute('aria-invalid');
    mensagem.textContent = t('newsPendente');
  });
})();
