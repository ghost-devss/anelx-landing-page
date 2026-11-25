/* AnelX — troca de idioma PT/EN no navegador.
   O PT está escrito no HTML (é o que buscadores indexam). Aqui fica só o EN.
   Elementos com data-i18n="chave" trocam o conteúdo; data-i18n-attr="atributo:chave;..." troca atributos.
   A escolha fica salva no navegador; ?lang=en na URL também funciona. */
(() => {
  const EN = {
    'meta.titulo': 'AnelX — Know your heart, beat by beat',
    'meta.descricao': 'AnelX is a smart ring that tracks your heart rate day and night and turns every beat into clear insight.',
    'pular': 'Skip to content',

    'aviso.texto': 'New: AnelX, the ring that knows your heart.',
    'aviso.fechar': 'Close notice',

    'nav.inicio': 'AnelX, home',
    'nav.rotulo': 'Main',
    'nav.produto': 'Product',
    'nav.saude': 'Your Health',
    'nav.porque': 'Why AnelX',
    'nav.empresas': 'For Business',
    'nav.idioma': 'Language',
    'nav.carrinho': 'Cart',

    'hero.badge': 'Just launched',
    'hero.titulo': 'Know your heart, beat by beat.',
    'hero.sub': 'A light ring that tracks your heart rate, day and night.',
    'hero.cta': 'Discover AnelX',
    'img.hero': 'Two AnelX rings, silver and black, resting on satin fabric.',

    'manifesto.titulo': 'Your health, at your own pace.',
    'manifesto.sub': 'AnelX turns every heartbeat into clear insight, so you can care for your body without guessing.',
    'manifesto.porque': 'Why AnelX',
    'manifesto.como': 'How it works',
    'img.manifesto': 'Person meditating on the floor in window light, wearing a silver AnelX ring.',

    'benef.titulo': 'What AnelX tracks',
    'benef.coracao.tag': 'Heart',
    'benef.coracao.mais': 'Learn more: heart',
    'benef.coracao.titulo': 'Your heart, in real time',
    'benef.coracao.detalhe': 'AnelX tracks your heart rate through the day and night and shows how it shifts with sleep, training and routine. You see the pattern, not just a number.',
    'benef.sono.tag': 'Sleep',
    'benef.sono.mais': 'Learn more: sleep',
    'benef.sono.titulo': 'Sleep better and know why',
    'benef.sono.detalhe': 'At night, the ring follows your heartbeat and movement. In the morning, the app shows how well you rested and what may have gotten in the way.',
    'benef.estresse.tag': 'Stress',
    'benef.estresse.mais': 'Learn more: stress',
    'benef.estresse.titulo': 'Notice stress before it builds up',
    'benef.estresse.detalhe': 'When your body goes on alert, your heart changes its rhythm. AnelX shows those moments in your day, so you can see what weighs on you and know when to pause.',
    'benef.atividade.tag': 'Activity',
    'benef.atividade.mais': 'Learn more: activity',
    'benef.atividade.titulo': 'Train at the pace your body can take',
    'benef.atividade.detalhe': 'See how your heart responds to each workout and how long it takes to settle. Then match the intensity to what your body can handle.',
    'benef.recuperacao.tag': 'Recovery',
    'benef.recuperacao.mais': 'Learn more: recovery',
    'benef.recuperacao.titulo': 'Know when to truly rest',
    'benef.recuperacao.detalhe': 'Based on your sleep and resting heart rate, the app shows when your body is ready for more and when it needs a break.',
    'img.coracao': 'Hand wearing a silver AnelX ring resting on the chest.',
    'img.sono': 'Hand wearing a black AnelX ring resting on a cream bedsheet in the morning.',
    'img.estresse': 'Person seen from behind with a hand on the shoulder, wearing a silver AnelX ring, under a blue sky.',
    'img.atividade': 'Athlete resting their arms on a bar after training, wearing a black AnelX ring.',
    'img.recuperacao': 'Hands holding a ceramic mug, wearing a silver AnelX ring and a sand-colored sweater.',
    'carrossel.ant': 'Previous',
    'carrossel.prox': 'Next',

    'prova.titulo': '100,000 beats a day<sup>1</sup>',
    'prova.sub': 'That is roughly how hard your heart works. AnelX follows that rhythm and shows what it says about you.',
    'prova.cta': 'See the app',
    'prova.nota': '¹ Estimate for an adult with a resting heart rate between 60 and 100 beats per minute.',
    'img.comunidade': 'Hands of three people of different ages, each wearing an AnelX ring.',

    'app.titulo': 'Your data, in plain language',
    'app.sub': 'The app turns what the ring measures into clear answers: how you slept, how your heart reacted and when it is worth resting.',
    'app.leque': 'Five AnelX app screens: stress, sleep, daily summary, heart and activity.',
    'app.hoje': 'Today',
    'app.t1.titulo': 'Stress',
    'app.t1.tenso': 'Tense',
    'app.t1.calmo': 'Calm',
    'app.t1.msg': 'Your peak was at 3 pm. A short break helped your heart slow down.',
    'app.t2.titulo': 'Sleep',
    'app.t2.ontem': 'Last night',
    'app.t2.tempo': 'Time asleep',
    'app.t2.profundo': 'Deep',
    'app.t2.leve': 'Light',
    'app.t2.minima': 'Lowest heart rate',
    'app.t3.recuperacao': 'Recovery',
    'app.t3.atividade': 'Activity',
    'app.t3.agora': 'Heart rate now',
    'app.t3.repouso': 'Resting',
    'app.t3.msg': 'Your heart is calm today.',
    'app.t3.msg2': 'Your resting heart rate came in below your weekly average. A good sign of recovery.',
    'app.t4.titulo': 'Heart',
    'app.t4.repouso': 'Resting heart rate',
    'app.t4.abaixo': 'Below your average',
    'app.t4.dias': '<span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>',
    'app.t4.msg': 'Seven days of gentle decline. Your steadier sleep is making a difference.',
    'app.t5.passos': '6,240',
    'app.t5.passosrot': 'steps',
    'app.t5.meta': 'Goal: 8,000',
    'app.t5.leve': 'Light',
    'app.t5.moderada': 'Moderate',
    'app.t5.intensa': 'Intense',

    'sensores.eyebrow': 'Inside the ring',
    'sensores.titulo': 'Three sensors, always reading',
    'sensores.texto': 'Inside the ring, three optical sensors use light to read the pulse in your finger, with no needles and no discomfort. Lightweight titanium keeps AnelX comfortable all day and all night.',
    'sensores.largura': 'Width',
    'sensores.material': 'Material',
    'sensores.titanio': 'Titanium',
    'sensores.acabamentos': 'Finishes',
    'sensores.cores': 'Brushed silver · Matte black',
    'img.sensores': 'Close-up of the inside of the AnelX ring, with its sensors lit.',

    'depo.titulo': 'Reviews',
    'depo.lista': 'Customer reviews',
    'depo.placeholder': 'Reserved for a real customer review. Up to 160 characters, with name and city approved in writing.',
    'depo.nome': 'Customer name',
    'depo.cidade': 'City, State',
    'img.depo1': 'Hand wearing a silver AnelX ring resting on the knee on a park bench.',
    'img.depo2': 'Hand wearing a black AnelX ring switching off a bedside lamp at night.',
    'img.depo3': 'Hands wearing a silver AnelX ring tying a running shoe.',

    'ciencia.titulo': 'The science behind AnelX',
    'ciencia.destaque.tag': 'Featured',
    'ciencia.destaque.titulo': 'How AnelX measures your heart rate',
    'ciencia.destaque.cta': 'Read article',
    'ciencia.c1.fonte': 'Guide',
    'ciencia.c1.titulo': 'Why your finger is a great place to read your pulse',
    'ciencia.c2.fonte': 'Stress',
    'ciencia.c2.titulo': 'What heart rate variability reveals about your day',
    'ciencia.c3.fonte': 'Privacy',
    'ciencia.c3.titulo': 'Your data is yours: how we protect your information',
    'img.midia': 'Two hands touching in low light, one wearing a black AnelX ring.',

    'news.titulo': 'Get news from AnelX',
    'news.rotulo': 'Your email',
    'news.botao': 'Subscribe',
    'news.legenda': 'We only use your email to send news. Unsubscribe anytime.',
    'img.footer': 'Black AnelX ring on dark stone, with warm light along its edge.',

    'rodape.produto': 'Product',
    'rodape.anel': 'The ring',
    'rodape.app': 'The app',
    'rodape.ciencia': 'Science',
    'rodape.empresas.texto': 'Plans for teams and companies that care about their people’s health.',
    'rodape.empresas.cta': 'Talk to us',
    'rodape.legal': '© 2026 AnelX. AnelX does not replace medical care.',
  };

  /* Textos usados só pelo JavaScript */
  const JS = {
    pt: {
      menuAbrir: 'Abrir menu',
      menuFechar: 'Fechar menu',
      newsErro: 'Digite um e-mail válido.',
      newsPendente: 'A inscrição ainda não está ativa. Em breve você poderá assinar por aqui.',
    },
    en: {
      menuAbrir: 'Open menu',
      menuFechar: 'Close menu',
      newsErro: 'Please enter a valid email.',
      newsPendente: 'Sign-up is not live yet. You will be able to subscribe here soon.',
    },
  };

  const doc = document.documentElement;
  const ptTexto = new Map();
  const ptAtributo = new Map();
  let atual = 'pt';

  const pares = el => el.dataset.i18nAttr.split(';').map(p => p.split(':'));

  document.querySelectorAll('[data-i18n]').forEach(el => ptTexto.set(el, el.innerHTML));
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const original = {};
    for (const [attr] of pares(el)) original[attr] = el.getAttribute(attr);
    ptAtributo.set(el, original);
  });

  function aplicar(lang) {
    atual = lang === 'en' ? 'en' : 'pt';
    const usarEN = atual === 'en';
    ptTexto.forEach((pt, el) => {
      const chave = el.dataset.i18n;
      el.innerHTML = usarEN && chave in EN ? EN[chave] : pt;
    });
    ptAtributo.forEach((original, el) => {
      for (const [attr, chave] of pares(el)) {
        el.setAttribute(attr, usarEN && chave in EN ? EN[chave] : original[attr]);
      }
    });
    doc.lang = usarEN ? 'en' : 'pt-BR';
    document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === atual)));
    try { localStorage.setItem('anelx-lang', atual); } catch (e) { /* navegação privada */ }
    doc.classList.remove('i18n-pendente');
    document.dispatchEvent(new CustomEvent('anelx:idioma', { detail: atual }));
  }

  let salvo = null;
  try { salvo = localStorage.getItem('anelx-lang'); } catch (e) { /* navegação privada */ }
  const daUrl = new URLSearchParams(location.search).get('lang');
  aplicar(daUrl || salvo || 'pt');

  document.addEventListener('click', e => {
    const botao = e.target.closest('[data-lang]');
    if (botao && botao.dataset.lang !== atual) aplicar(botao.dataset.lang);
  });

  window.anelxI18n = {
    t: chave => JS[atual][chave] ?? JS.pt[chave] ?? chave,
    get idioma() { return atual; },
    faltando: () => [...new Set([...ptTexto.keys()].map(el => el.dataset.i18n)
      .concat([...ptAtributo.keys()].flatMap(el => pares(el).map(([, k]) => k))))]
      .filter(k => !(k in EN)),
  };
})();
