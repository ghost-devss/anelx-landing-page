# Plano do site — AnelX

Plano de construção da landing page, feito antes de escrever código. Segue o `specs/design.md` (fonte da verdade), o `imagens.md` e a referência em `refererencia - site/`.

- **Não altera o `specs/design.md`.** Onde o plano precisa de algo que a spec não diz, ou que contradiz a spec, está na §1 esperando sua decisão.
- Tudo que está marcado **[medido]** foi conferido de verdade: pixels das imagens, cores das bordas, contraste calculado, linhas contadas no Chrome com as fontes reais.
- Data: 2026-11-24.

---

## 0. Resumo

| Área | Situação |
|---|---|
| Imagens (16) | Todas geradas e boas no geral. **Nenhuma é WebP de verdade**: são JPEG ou PNG com a extensão trocada. Juntas pesam ~11,9 MB. Precisam de conversão, e eu faço isso aqui sem instalar nada. |
| Tamanho das imagens | 8 estão abaixo do tamanho pedido no `imagens.md`. Dá para usar todas; o hero fica um pouco mole em tela retina grande. |
| Fundo das imagens | O fundo do hero é **pêssego `#F3DDC5`**, não creme `#F4EEE4`. Se a imagem só ficar por cima da página, aparece uma borda. Isso muda a montagem do hero (§1, decisão D1). |
| Tipografia | Fraunces + Geist estão confirmadas e cabem em ~95 KB. A escala fluida está definida e testada. |
| Redlines | Medidas tiradas do print da referência e adaptadas à spec (container de 1200px, seções com 96–128px de respiro). |
| Textos | Contei as linhas em 6 larguras de tela, em PT e EN, e defini um limite de caracteres para cada campo. Duas falhas apareceram: a estatística longa demais e os depoimentos em 3 colunas a 1024px. |
| Bloqueios | Faltam conteúdos que não podem ser inventados: estatística, depoimentos, imprensa, oferta, link de compra e logo (§8). |

---

## 1. Decisões que preciso de você

As decisões marcadas ⚠️ **contradizem ou mudam o `specs/design.md`**. Pela regra de ouro, eu não aplico nenhuma delas sem seu ok.

| # | Decisão | Por quê | Minha recomendação |
|---|---|---|---|
| D1 ⚠️ | **Fundo do hero.** O §7 da spec diz que o fundo da imagem termina em creme `#F4EEE4` sem borda visível. O hero real é pêssego `#F3DDC5` [medido]. | Colocada sobre o creme, a imagem mostra um retângulo. | **A)** Hero vira um **painel arredondado** (cantos de 20px, recuado 16px das bordas da tela), como na referência. O fundo do painel usa o tom da própria foto, `#F2DBC3`, e a foto se funde nele por um degradê. O pêssego só aparece dentro do painel. Alternativas: B) regerar o hero com fundo creme; C) eu corrigir a cor da foto (arriscado: muda o tom do anel e do tecido). |
| D2 ⚠️ | **Foco no escuro.** O §8 pede foco visível em azul acento. Azul `#2B4CF0` sobre carvão dá **2,89:1** [medido]; o mínimo da WCAG para indicador de foco é 3:1. | Nas seções escuras (Na mídia e footer), o foco fica fraco demais. | Foco **azul nas seções claras** (5,36:1) e **creme nas seções escuras** (15,5:1). |
| D3 ⚠️ | **Legenda de 14px.** O §2 diz "texto suave só ≥ 16px", mas o §3 define a legenda em 14px tinta-60. A spec se contradiz. | Tinta-60 sobre creme dá **6,30:1** [medido], o que passa no AA em qualquer tamanho. | Permitir tinta-60 a partir de 14px e corrigir o §2. |
| D4 ⚠️ | **§4 da spec sem as imagens novas.** Isso está pendente desde a `memoria.md`: manifesto, prova numérica, app, depoimentos e footer ganharam imagem, mas o §4 não diz. | A spec fica desatualizada. | Atualizar o §4 com as imagens IMG-10 a 16. |
| D5 | **Itens que faltam na spec** (são acréscimos, não conflitos): (a) texto suave no escuro `#A39B8E` (6,50:1 sobre carvão); (b) estilo de citação: Fraunces 300, 20–22px, entrelinha 1,35; (c) degradê dos cards de benefício (§5.5). | A spec não define cor de texto secundário no escuro nem o estilo da citação. | Aprovar os três e levar para a spec. |
| D6 | **"Empresas" no menu.** O §4 lista Produto, Sua Saúde, Por que AnelX e Empresas, mas a página não tem seção de empresas. | O link não teria destino. | Trocar por um link `mailto:` ou de contato comercial, ou tirar do menu. Os outros três viram âncoras: Produto → `#app`, Sua Saúde → `#beneficios`, Por que AnelX → `#manifesto`. |
| D7 | **Seletor PT/EN** (pendência da spec). | Define a estrutura dos arquivos. | **Alternância no navegador.** O PT fica escrito no HTML (é o que o Google indexa) e o EN fica num dicionário em `js/i18n.js`. A escolha fica salva e também funciona com `?lang=en`. Fica um HTML só, sem duplicar a página. |
| D8 | **Fontes** (pendência da spec). | Desempenho e privacidade. | **Hospedar no próprio site.** Pelo Google Fonts, o IP de cada visitante vai para o Google, o que é um ponto de atenção na LGPD. Dois arquivos `.woff2` somam ~95 KB [medido]. |
| D9 | **Logo** (pendência da spec). | Nav, footer e favicon. | Provisório: "AnelX" escrito em Fraunces 500, sem símbolo. O logo final entra em SVG quando existir. |
| D10 | **Seção "Na mídia" sem imprensa real.** A spec e o `imagens.md` proíbem inventar veículos ou manchetes. | Hoje não há cobertura real. | Até existir imprensa, a seção escura vira **"Ciência por trás do AnelX"**: os mesmos cards, com conteúdo próprio (como medimos, precisão, privacidade). Muda só o título e o tipo de conteúdo. |
| D11 | **Card "Atividade" (IMG-06).** O rosto aparece nítido no canto superior direito, e o botão "+" cai em cima da boca e do nariz. | O prompt pedia rosto virado e fora de foco. | Regerar com o rosto fora do quadro. Prioridade baixa; dá para lançar com a imagem atual. |

---

## 2. Imagens — revisão visual

Conferi cada imagem contra o checklist do `imagens.md` §6.

| ID | Arquivo | Anel e acabamento | Mãos | Área livre pro texto | Borda / fundo | Veredito |
|---|---|---|---|---|---|---|
| IMG-01 | `hero-desktop.webp.png` | ✅ aro liso, prata na frente, preto atrás, sensores verde e vermelho | — | ✅ 43% de cima livre | ⚠️ pêssego `#F3DDC5` (D1) | Usar |
| IMG-02 | `hero-mobile.webp` | ✅ igual à IMG-01 | — | ✅ 49% de cima livre | ⚠️ pêssego (D1) | Usar |
| IMG-03 | `card-coracao.webp` | ✅ prata, indicador | ✅ 5 dedos | ✅ cantos de cima lisos, terço de baixo escuro | — | Usar |
| IMG-04 | `card-sono.webp` | ✅ preto | ✅ | ⚠️ terço de baixo **claro** (lençol) | — | Usar com o degradê reforçado da §5.5 |
| IMG-05 | `card-estresse.webp` | ✅ prata | ✅ | ✅ | — | Usar. A camiseta azul ocupa metade do quadro, mais que um "acento", mas é o único card azul e conversa com o CTA |
| IMG-06 | `card-atividade.webp` | ✅ preto | ✅ | ⚠️ rosto no canto do botão "+" | — | Usar; regerar depois (D11) |
| IMG-07 | `card-recuperacao.webp` | ✅ prata, indicador | ✅ | ✅ janela clara sob a tag (a tag é escura, então funciona) | — | Usar |
| IMG-10 | `manifesto.webp` | ✅ prata | ✅ | ✅ 60% da esquerda vazio; rosto cortado no nariz | cantos de 20px, não precisa fundir | Usar |
| IMG-11 | `comunidade.webp` | ✅ prata, preto, prata | ✅ 5 dedos cada; 3 idades e 3 tons de pele | ✅ | cantos de 20px | Usar |
| IMG-12 | `sensores.webp` | ✅ prata, sensores acesos | — | ✅ | ⚠️ fundo `#F5E3CE`, mais quente que o creme | Usar dentro de um card com cantos de 20px (não fundir) |
| IMG-13 | `depo-coracao.webp` | ✅ prata | ✅ pele madura | ✅ | — | Usar |
| IMG-14 | `depo-sono.webp` | ✅ preto | ✅ | ✅ | — | Usar. Tem letras borradas na capa do livro (canto direito); no card (~380px) ficam com ~3px e ninguém lê |
| IMG-15 | `depo-atividade.webp` | ✅ prata | ✅ | ✅ tênis sem logo | — | Usar |
| IMG-08 | `midia-destaque.webp` | ✅ preto | ✅ | ✅ canto inferior esquerdo escuro | ⚠️ `#0C0D0B`–`#161B1A`, mais frio que o carvão | Usar dentro de um card com cantos de 20px, como na referência |
| IMG-16 | `footer.webp` | ✅ preto, brilho verde | — | ✅ 60% da esquerda escuro | ⚠️ `#1A1A1A` ≈ carvão, mas o canto superior direito tem brilho quente `#8B7159` | Usar com cantos de 20px **ou** com degradê nas bordas |
| IMG-09 | `og-anelx.jpg` | ✅ prata | — | ✅ metade direita livre | não aparece na página | Recortar para 1200×630 |

---

## 3. Imagens — tamanho, formato e exportação

### 3.1 O que existe hoje [medido]

| ID | Pedido (`imagens.md`) | Real | Proporção | Formato real | Peso |
|---|---|---|---|---|---|
| IMG-01 hero desktop | 2400×1350 | **1672×941** ↓ | 16:9 ✅ | PNG (extensão dupla `.webp.png`) | 1.907 KB |
| IMG-02 hero mobile | 1080×1350 | 1122×1402 ✅ | 4:5 ✅ | PNG | 1.760 KB |
| IMG-03 a 07 cards | 1080×1350 | **928×1152** ↓ | ≈4:5 ✅ | JPEG | 616–729 KB cada |
| IMG-10 manifesto | 2520×1080 | **1584×672** ↓ | 21:9 ✅ | JPEG | 543 KB |
| IMG-11 comunidade | 1800×1200 | **1264×848** ↓ | 3:2 ✅ | JPEG | 839 KB |
| IMG-12 sensores | 1200×1200 | **1024×1024** ↓ | 1:1 ✅ | JPEG | 418 KB |
| IMG-13 a 15 depoimentos | 800×600 | 1200×896 ✅ | 4:3 ✅ | JPEG | 586–698 KB cada |
| IMG-08 mídia | 1600×1000 | **1312×816** ↓ | 16:10 ✅ | JPEG | 444 KB |
| IMG-16 footer | 2520×1080 | **1584×672** ↓ | 21:9 ✅ | JPEG | 494 KB |
| IMG-09 og | 1200×630 | 1424×752 | 1,89:1 (precisa recorte) | JPEG ✅ | 494 KB |

Todas as proporções estão certas. O que muda é a resolução. A única que preocupa é o **hero desktop**: numa tela de 1440px com retina, ele precisaria de ~2800px e tem 1672. Vai ficar levemente mole no anel. Dá para lançar assim; se conseguir regerar em 2400px ou mais, o hero melhora.

### 3.2 O que vou exportar para `assets/img/`

- **Ferramenta:** o Chrome já instalado, rodando sem janela. Não instala nada e não adiciona dependência ao site. Testei no `card-coracao`: **729 KB → ~97 KB** com a mesma resolução.
- **Formato:** WebP com qualidade 0,80 (0,82 no hero). A og:image continua em JPG, porque algumas redes não leem WebP.
- **Originais:** os arquivos de `meus produtos/` não são alterados.
- **Nomes:** `nome-LARGURA.webp`, por exemplo `card-coracao-640.webp`.

| ID | Largura máxima exibida (CSS px) | Variantes (px) | `sizes` |
|---|---|---|---|
| IMG-01 hero desktop | 1888 | 1672 · 1280 · 960 | `calc(100vw - 32px)` |
| IMG-02 hero mobile | 751 | 1122 · 750 | `calc(100vw - 16px)` |
| IMG-03 a 07 cards | 380 (desktop) / 80vw (mobile) | 928 · 640 | `(min-width: 640px) 380px, 80vw` |
| IMG-10 manifesto | 1200 | 1584 · 1024 | `(max-width: 639px) 160vw, min(100vw - 80px, 1200px)`; o 160vw compensa o recorte 4:3 do mobile |
| IMG-11 comunidade | 960 | 1264 · 800 | `min(100vw - 40px, 960px)` |
| IMG-12 sensores | 560 | 1024 · 640 | `(min-width: 1024px) 560px, 100vw` |
| IMG-13 a 15 depoimentos | 400 | 800 · 560 | `(min-width: 1200px) 384px, 85vw` |
| IMG-08 mídia | 720 | 1312 · 800 | `(min-width: 1024px) 720px, 100vw` |
| IMG-16 footer | 1200 | 1584 · 1024 | `min(100vw - 80px, 1200px)` |
| IMG-09 og | — | 1200×630 JPG, ≤ 200 KB | — |

### 3.3 Orçamento de peso

- Hoje: **~11,9 MB** em imagens.
- Estimado depois da conversão: ~1,3–1,6 MB se alguém baixar a maior variante de todas. No celular, bem menos.
- **Primeira tela** (HTML, CSS, JS, fontes e hero): meta de **≤ 400 KB**. O hero desktop deve ficar ≤ 180 KB e o mobile ≤ 120 KB.
- Hero com `fetchpriority="high"`. Todas as outras imagens com `loading="lazy"` e `decoding="async"`, e sempre com `width`/`height` no HTML, para a página não pular enquanto carrega.

### 3.4 Encaixe de cada imagem no layout

| Imagem | Desktop | Mobile |
|---|---|---|
| Hero | Painel arredondado. A imagem entra por baixo do bloco de texto, sobrepondo **40% da própria altura**, com degradê de 0% a 25% no topo (D1) | Imagem 4:5, sobreposição de **45%** |
| Cards | 4:5, imagem ocupando o card inteiro | igual |
| Manifesto | 21:9, cantos de 20px | **recorte 4:3** focado na pessoa (`object-position: 82% center`); 21:9 a 390px daria uma faixa de 150px de altura |
| Comunidade | 3:2, até 960px | igual |
| Sensores | 1:1, metade esquerda | em cima do texto |
| Depoimentos | 4:3 no topo do card | igual |
| Mídia | 16:10 em card de 720px | 4:3, `object-position: 70% center` |
| Footer | 21:9, título da newsletter por cima à esquerda | 16:9, título **abaixo** da imagem (por cima, cobriria o anel) |

---

## 4. Tipografia

### 4.1 Fontes

| Papel | Fonte | Arquivo | Peso [medido] |
|---|---|---|---|
| Títulos | **Fraunces**, variável: tamanho óptico 9–144, peso 300–500 | `assets/fonts/fraunces-latin.woff2` | 66 KB |
| Corpo / UI | **Geist**, variável: peso 400–500 | `assets/fonts/geist-latin.woff2` | 29 KB |

- O subconjunto **latin** cobre todos os acentos do PT (á â ã à ç é ê í ó ô õ ú) e todo o EN. Não precisa do latin-ext.
- `font-optical-sizing: auto`: em tamanho grande, a Fraunces fica automaticamente com **mais contraste** entre traços grossos e finos. É isso que entrega a "serifa alto-contraste" da spec.
- `font-display: swap`, as duas fontes pré-carregadas no `<head>`, e fontes reserva com métricas ajustadas (Georgia para a Fraunces, Arial para a Geist), para o texto não mudar de linha quando a fonte real chegar.
- Sem itálico e sem caixa alta na Fraunces.

### 4.2 Escala fluida

Os valores mínimo e máximo ficam em `rem`, para respeitar o zoom do navegador. Os números abaixo são o tamanho resultante em cada largura de tela.

| Estilo | CSS | 390 | 768 | 1024 | 1440 | Fonte · peso | Entrelinha | Espaço entre letras | Onde usa |
|---|---|---|---|---|---|---|---|---|---|
| Display | `clamp(2.5rem, 1.6rem + 3.2vw, 4.5rem)` | 40 | 50 | 58 | **72** | Fraunces 300 | 1,05 | -0,02em | Título do hero, manifesto, estatística |
| H1 | `clamp(2rem, 1.5rem + 1.6vw, 3rem)` | 32 | 36 | 40 | 47 | Fraunces 400 | 1,1 | -0,015em | Título das seções App e Ciência/Mídia, título da newsletter |
| H2 | `clamp(1.625rem, 1.3rem + 1vw, 2.125rem)` | 26 | 28 | 31 | 34 | Fraunces 400 | 1,15 | -0,01em | Título dos cards de benefício e do card de mídia |
| H3 | `clamp(1.125rem, 1rem + .4vw, 1.375rem)` | 18 | 19 | 20 | 22 | Geist 500 | 1,3 | 0 | Bloco dos sensores, cards de imprensa, colunas do footer |
| Citação (D5) | `clamp(1.25rem, 1.125rem + .3vw, 1.375rem)` | 20 | 20 | 21 | 22 | Fraunces 300 | 1,35 | 0 | Depoimentos |
| Corpo | `clamp(1rem, .95rem + .2vw, 1.125rem)` | 16 | 17 | 17 | 18 | Geist 400 | 1,6 | 0 | Subtítulos e parágrafos |
| Legenda | `.875rem` | 14 | 14 | 14 | 14 | Geist 400, tinta-60 | 1,45 | 0 | Notas, privacidade, "disponível para…" |
| Eyebrow / tag | `.75rem` → `.8125rem` | 12 | 12 | 13 | 13 | Geist 500, CAIXA ALTA | 1 | 0,08em | Tags, badge, "NA MÍDIA" |
| Botão | `1rem` | 16 | 16 | 16 | 16 | Geist 500 | 1 | 0 | Todos os botões |
| Menu | `.9375rem` | — | — | 15 | 15 | Geist 400 | 1 | 0 | Links da nav |

**Comparado à referência [medido no print]:** a Oura usa títulos maiores (hero ~96px, manifesto ~80px) numa serifa condensada. A Fraunces é mais larga, e a spec limita o display a 72px. Sigo a spec. Por ser mais larga, a Fraunces quebra linha antes; os limites da §6 já levam isso em conta.

---

## 5. Redlines (medidas e espaçamentos)

### 5.1 Tokens base

| Token | Valor | Observação |
|---|---|---|
| Container | `max-width: 1200px` | §6 da spec. A referência usa 1440px; sigo a spec |
| Margem lateral | `clamp(20px, 4vw, 40px)` | 20px no celular, 40px a partir de 1000px |
| Respiro entre seções | `clamp(64px, 6.5vw + 16px, 128px)` | 64 no mobile, ~99 a 1280px, ~110 a 1440px, 128 no teto. Dentro dos 96–128 da spec no desktop |
| Escala de espaços | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 | base 4/8 |
| Cantos | cards **20px** · botões **pill** (999px) · inputs **10px** · painel do hero **20px** | §6 da spec |
| Área de toque | **≥ 44×44px** | §8 da spec |
| Sombras | nenhuma | §6: a profundidade vem da cor de fundo |
| Pontos de quebra | `640px` · `1024px` (menu completo) · `1200px` (3 colunas) | mobile primeiro |

### 5.2 Componentes

| Componente | Altura | Espaçamento interno | Texto | Cores |
|---|---|---|---|---|
| Botão primário | 52px | 0 28px | 16px / 500 | azul `#2B4CF0` → hover `#2340D4`, texto creme |
| Botão secundário | 48px | 0 24px | 16px / 500 | pill-tinta `#2B2620`, texto creme. No escuro: contorno 1px creme |
| Tag / badge | 28px (cards: 32px) | 0 12px | 12–13px CAIXA ALTA, 0,08em | pill-tinta + creme. Nos cards sobre foto: `rgba(30,27,22,.55)` + creme |
| Botão "+" | 44px, círculo | — | ícone de 20px | fundo creme, ícone tinta |
| Setas do carrossel | 44px, círculo | — | ícone de 20px | anterior: pill-tinta cheio; próximo: contorno |
| Campo de e-mail | 52px | 0 16px | 16px | fundo grafite `#242019`, borda 1px `#3A342B`, placeholder `#A39B8E` |
| Grupo de botões | — | espaço de 12px | — | quebra de linha centralizada abaixo de 360px |

### 5.3 Seção a seção (desktop ≥ 1200 · mobile 390)

**1. Barra de aviso**
- Altura **44px** (a referência tem 48; a spec pede alvo de toque de 44px pro botão de fechar).
- Fundo creme-areia `#EBE4D8`; texto 13px Geist 500 tinta, centralizado; botão × de 44×44 à direita.
- Fechar guarda a escolha no navegador.

**2. Nav fixa**
- Altura **72px** no desktop e **60px** no mobile. Transparente sobre o hero; depois de 8px de rolagem, fundo creme com linha divisa de 1px embaixo.
- Desktop (≥1024): logo à esquerda (24px de altura); 4 links no centro, separados por 40px (ocupam ~412px [medido]); à direita, seletor PT|EN (dois botões de 44×44) e carrinho (círculo de 44px com borda divisa).
- Mobile (<1024): logo, carrinho e botão de menu. O menu abre uma tela creme com links de 20px Geist 500, linhas de 56px e o PT|EN no rodapé.

**3. Hero (painel, D1)**

| Medida | Desktop | Mobile |
|---|---|---|
| Recuo do painel até a borda da tela | 16px | 8px |
| Cantos do painel | 20px | 20px |
| Fundo do painel | `#F2DBC3` (D1) | igual |
| Espaço acima do badge | nav + 56px | nav + 32px |
| Badge → título | 20px | 16px |
| Título (display) | largura máx. 880px, ≤ 2 linhas | ≤ 3 linhas |
| Título → subtítulo | 20px | 16px |
| Subtítulo | 18px tinta-60, largura máx. 560px, 1 linha | 2 linhas |
| Subtítulo → CTA | 32px | 24px |
| CTA | 52px de altura | 52px |
| Imagem | 16:9 na largura do painel; sobe 40% da própria altura | 4:5; sobe 45% |
| Altura resultante do painel | ~917px a 1440 (anéis inteiros visíveis numa tela de 900px) | ~662px a 390 (anéis visíveis acima da dobra numa tela de 844px) |

Conferi a conta [medido]: com essa sobreposição, o topo dos anéis fica 23px abaixo do CTA no desktop e 19px abaixo no mobile. A 768px a folga cai para ~12px; vou validar no navegador na etapa 3.

**4. Manifesto**
- Respiro da seção no topo.
- Título display (largura máx. 960px; 1 linha no desktop, 2 no mobile) → 16px → subtítulo de 18px tinta-60 (largura máx. 640px) → 32px → 2 botões secundários (espaço de 12px entre eles) → 64px → IMG-10.

**5. Carrossel de benefícios**
- Card de **380×475** (4:5) no desktop e de **80vw** no mobile (312px a 390). Espaço entre cards: 24px (16 no mobile). Cantos de 20px.
- A trilha começa alinhada à margem do container e vaza até a borda direita da tela, como na referência. Rolagem com encaixe (`scroll-snap`).
- Dentro do card: margem de 24px; tag no canto superior esquerdo; "+" no superior direito; título H2 creme embaixo, à esquerda, com no máximo 3 linhas e 90% da largura.
- **Degradê (D5c):** `linear-gradient(to top, rgba(25,23,20,.78) 0%, rgba(25,23,20,.6) 32%, transparent 62%)`. Calculei para o card mais claro (Sono): ~7:1 na base e ~4,5:1 na linha de cima do título.
- "+" abre uma camada creme-areia dentro do próprio card, com um texto de ≤ 220 caracteres e um botão ×.
- Abaixo da trilha: 32px → linha de progresso de 1px (trilho divisa, parte cheia tinta) + setas à direita. No mobile não há setas (arrasta com o dedo); a linha fica.

**6. Prova numérica**
- Estatística display (≤ 40 caracteres; largura máx. 880px) com marcador de nota ¹ → 20px → texto de 18px (largura máx. 640px) → 12px → legenda de 14px → 32px → botão secundário → 64px → IMG-11 (largura máx. 960px).
- A nota de rodapé (fonte da pesquisa) fica numa legenda de 14px no fim da seção.

**7. App / produto**
- Título H1 + subtítulo centralizados → 64px → **leque de 5 telas em HTML/CSS** (UI escura, cantos de 32px, sem moldura de celular):

| Tela | Desktop | Mobile |
|---|---|---|
| Central | 300×620 | 240×500 |
| Vizinhas | escala 0,86, sobreposição de -40px | parcialmente visíveis, cortadas pela tela |
| Pontas | escala 0,72 | ocultas |

- Telas (dados de exemplo): Coração ao vivo (72 bpm + gráfico), Sono, Estresse, Atividade, Recuperação.
- → 96px → bloco dos sensores: 2 colunas (imagem 1:1 à esquerda, texto à direita, 64px entre elas, alinhadas pelo centro). No mobile, a imagem vai para cima.

**8. Depoimentos**

| | ≥ 1200px | < 1200px |
|---|---|---|
| Layout | **3 colunas**, 24px entre elas | **rolagem horizontal** com cards de 85vw (máx. 400px) |

- Card creme-areia com cantos de 20px; foto 4:3 no topo.
- Corpo do card com margem de 32px (24 no mobile): tag → 20px → citação (Fraunces 300, 20–22px) → 24px → círculo de 44px com as iniciais + nome (16px 500) + cidade (14px tinta-60). O autor fica sempre colado na base, e os 3 cards têm a mesma altura.
- Sem foto de rosto (spec §7).

**9. Na mídia / Ciência (D10)**
- Fundo carvão. Eyebrow de 13px creme → 32px → grade.
- **Destaque:** 720px de largura, 16:10, cantos de 20px. Por cima, no canto inferior esquerdo, com margem de 32px: badge → 16px → título H2 creme (≤ 2 linhas) → 24px → botão com contorno creme de 44px.
- **Lista:** coluna de 432px, 48px de espaço até o destaque. 3 cards grafite `#242019` (spec §2), cantos de 20px, margem de 24px, 16px entre eles. Cada card: nome do veículo (13px CAIXA ALTA `#A39B8E`) → título H3 creme → botão de seta de 44px no canto inferior direito.
- Mobile: tudo empilhado.

**10. Footer**
- Fundo carvão; IMG-16 em faixa de cantos de 20px.
- Título H1 da newsletter sobre os 60% da esquerda (no mobile, abaixo da imagem) → 24px → campo de 52px + botão primário, lado a lado no desktop e empilhados no mobile → 12px → legenda de privacidade.
- → 64px → colunas de links: 4 no desktop, 2×2 no mobile. Título da coluna em H3 `#A39B8E`, links de 16px creme com linhas de 36px.
- → 48px → linha de 1px `#3A342B` → © AnelX + selos de pagamento + redes sociais.

### 5.4 Referência medida (print a 1920px), para comparar

Barra 48 · painel do hero recuado 24, cantos ~20 · badge 34 de altura, cantos 6 (na nossa spec é pill) · título do hero ~96px · CTA 122×48 · hero → manifesto ~150 · botões 48 com 16 entre eles · botões → cards 136 · card 493 de largura, 24 entre cards, margem interna 24, "+" 52 · setas 45 · estatística ~80px · telefone central 342 · 3 depoimentos de 460 com 30 entre eles, margem 40, citação serifada ~28px, avatar 60 · destaque da mídia 851×680, coluna de 524 · footer com colunas de 258 e links de 17px.

---

## 6. Como os textos se comportam [medido]

Medi no Chrome com Fraunces e Geist reais e a escala da §4.2. A tabela mostra o número de linhas de cada texto em cada largura de tela.

| Texto | Caracteres | 360 | 390 | 768 | 1024 | 1280 | 1440 |
|---|---|---|---|---|---|---|---|
| Hero título PT | 37 | 3 | 3 | 2 | 2 | 2 | 2 |
| Hero título EN | 30 | 2 | 2 | 1 | 1 | 1 | 2 |
| Hero subtítulo PT | 61 | 2 | 2 | 1 | 1 | 1 | 1 |
| Manifesto PT | 24 | 2 | 2 | 1 | 1 | 1 | 1 |
| Manifesto subtítulo PT | 95 | 3 | 3 | 2 | 2 | 2 | 2 |
| **Estatística PT** | **56** | **4** ❌ | **4** ❌ | 3 | 2 | 2 | 3 |
| Título App EN | 40 | 2 | 2 | 1 | 1 | **2** ⚠️ | **2** ⚠️ |
| Cards de benefício PT (todos) | 26–37 | 2 (Recuperação: 3) | 2 | 2 | 2 | 2 | 2 |
| **Depoimento PT** | **151** | 7 | 6 | 4 | **7** ❌ | 5 | 6 |
| Mídia destaque PT | 53 | 3 | 3 | 2 | 2 | 2 | 2 |

O que isso mostrou:
- **A estatística longa não cabe.** Com 56 caracteres, ocupa 4 linhas de display no celular. Limite: **≤ 40 caracteres**.
- **Depoimentos em 3 colunas a 1024px ficam com 235px de largura e 7 linhas.** Por isso só viram 3 colunas a partir de 1200px; abaixo disso, rolagem horizontal (§5.3, seção 8).
- **O EN nem sempre é mais curto.** "Everything in the app, in plain language" quebra onde o PT não quebra. Os limites valem para as duas línguas.
- Nas medições, a tag mais longa ("RECUPERAÇÃO") ocupa 99px, o botão mais longo ("Conheça o AnelX") ocupa 124px mais a margem, e o menu completo ocupa ~412px.

### 6.1 Limite por campo (vale para PT e EN)

| Campo | Máx. caracteres | Máx. linhas (desktop / mobile) |
|---|---|---|
| Barra de aviso | 45 | 1 / 1 |
| Badge do hero | 16 | 1 |
| Título do hero | 38 | 2 / 3 |
| Subtítulo do hero | 64 | 1 / 2 |
| Manifesto (frase) | 32 | 1 / 2 |
| Manifesto (subtítulo) | 110 | 2 / 4 |
| Estatística | 40 | 2 / 3 |
| Título de seção (H1) | 34 | 1 / 2 |
| Tag | 12 | 1 |
| Título do card de benefício | 36 | 2 / 3 |
| Texto do "+" | 220 | — |
| Citação de depoimento | 160 | 6 / 7 |
| Título do destaque de mídia | 60 | 2 / 3 |
| Título de card de mídia | 90 | 3 / 4 |
| Botão | 18 | 1, nunca quebra |

### 6.2 Regras de quebra e comportamento

- **Títulos:** `text-wrap: balance`, para as linhas ficarem com tamanhos parecidos e sem palavra sozinha na última. Sem hifenização.
- **Parágrafos:** `text-wrap: pretty` e largura máxima em caracteres: 60–68 no corpo, 40–48 nos subtítulos.
- **Palavra grande demais** (URL, e-mail): `overflow-wrap: break-word` na página toda.
- **CAIXA ALTA só via CSS** (`text-transform`). No HTML o texto fica normal, porque leitores de tela soletram palavras em caixa alta.
- **Botões nunca quebram linha.** Quem quebra é o grupo de botões, que passa para a linha de baixo centralizado.
- **Zoom de 200% e tela de 320px:** a página continua utilizável sem rolagem lateral (WCAG 1.4.10). Por isso a escala usa `rem`.
- **Troca de idioma:** troca textos, `alt`, `aria-label`, `<title>`, a meta description e o `<html lang>`. Não recarrega a página.
- **Fonte carregando:** as fontes reserva com métricas ajustadas evitam que o título pule de 2 para 3 linhas quando a Fraunces chega.
- **Números:** algarismos alinhados (`lining-nums`) na estatística; algarismos de largura fixa (`tabular-nums`) nas telas do app, para os números não dançarem.
- **Texto sobre foto** só em três lugares: cards de benefício (degradê da §5.3), destaque de mídia (área escura da própria foto) e faixa do footer (60% escuros da foto). O contraste dos cards está calculado.

### 6.3 Contraste da paleta [medido]

| Par | Contraste | AA |
|---|---|---|
| Tinta / creme | 14,87 | ✅ |
| Tinta-60 / creme | 6,30 | ✅ em qualquer tamanho (D3) |
| Tinta-60 / creme-areia | 5,75 | ✅ |
| Tinta-60 / fundo do hero | 5,52 | ✅ |
| Creme / azul (CTA) | 5,36 | ✅ |
| Creme / azul hover | 6,60 | ✅ |
| Azul (link) / creme-areia | 4,90 | ✅ |
| Creme / pill-tinta | 12,99 | ✅ |
| Creme / carvão | 15,50 | ✅ |
| `#A39B8E` / carvão (D5a) | 6,50 | ✅ |
| **Azul (foco) / carvão** | **2,89** | ❌ (D2) |

---

## 7. Textos — rascunho PT / EN

O rascunho foi usado para medir. Tudo pode mudar, desde que respeite os limites da §6.1. Os campos marcados 🔒 dependem de dado real (§8). Nenhum texto copia a Oura.

| Campo | PT | EN |
|---|---|---|
| Aviso 🔒 | Frete grátis para todo o Brasil | Free shipping across Brazil |
| Menu | Produto · Sua Saúde · Por que AnelX · Empresas (D6) | Product · Your Health · Why AnelX · For Business |
| Badge | Lançamento | Just launched |
| Título do hero | Entenda seu coração, batida a batida. | Know your heart, beat by beat. |
| Subtítulo do hero | Um anel leve que acompanha seus batimentos de dia e de noite. | A light ring that tracks your heart rate, day and night. |
| CTA 🔒 | Conheça o AnelX | Discover AnelX |
| Manifesto | Sua saúde, no seu ritmo. | Your health, at your own pace. |
| Manifesto (subtítulo) | O AnelX transforma cada batimento em informação clara, para você cuidar do corpo sem adivinhar. | AnelX turns every heartbeat into clear insight, so you can care for your body without guessing. |
| Botões | Por que AnelX · Como funciona | Why AnelX · How it works |
| Card Coração | Seu coração, em tempo real | Your heart, in real time |
| Card Sono | Durma melhor e entenda por quê | Sleep better and know why |
| Card Estresse | Perceba o estresse antes que ele pese | Notice stress before it builds up |
| Card Atividade | Treine no ritmo que seu corpo aguenta | Train at the pace your body can take |
| Card Recuperação | Saiba quando descansar de verdade | Know when to truly rest |
| Estatística 🔒 | [NN]% sentem o coração mais tranquilo¹ (≤ 40c) | [NN]% feel calmer about their heart¹ |
| Título do App | Tudo no app, em linguagem simples | Your data, in plain language |
| Sensores | Três sensores, leitura contínua | Three sensors, always reading |
| Depoimentos 🔒 | só citação real, com permissão | real quotes only |
| Eyebrow da mídia | Na mídia / Ciência (D10) | In the news / The science |
| Newsletter | Receba novidades do AnelX | Get news from AnelX |

**Cuidado com promessa de saúde:** o AnelX mede batimentos. O texto **não promete diagnóstico** ("detecta arritmia", "previne infarto"), a menos que o produto tenha certificação para isso (ANVISA). O footer leva a nota "O AnelX não substitui acompanhamento médico".

---

## 8. Conteúdo que bloqueia (não pode ser inventado)

| Item | Onde aparece | Sem isso… |
|---|---|---|
| Oferta real (frete, desconto) | Barra de aviso | a barra fica fora |
| Link de compra / loja | CTA e carrinho | o CTA aponta para `#app` e o carrinho fica oculto |
| Estatística real + fonte | Prova numérica | a seção usa uma frase sem número |
| 3 depoimentos reais com permissão | Depoimentos | a seção fica fora do ar |
| Matérias de imprensa reais | Na mídia | vira "Ciência" (D10) |
| App em iOS/Android? | Prova numérica, App | a legenda fica fora |
| Meios de pagamento (Pix, cartões) | Footer | os selos ficam fora |
| URLs das redes sociais | Footer | os ícones ficam fora |
| Logo | Nav, footer, favicon | provisório em texto (D9) |

Os textos provisórios ficam marcados no HTML com `data-pendente` para eu não esquecer nenhum.

---

## 9. Estrutura técnica

```
index.html              ← página única, PT no HTML
css/styles.css          ← um arquivo: tokens, base, componentes, seções
js/main.js              ← aviso, nav, menu mobile, carrossel, cards "+"
js/i18n.js              ← dicionário EN + troca de idioma (D7)
assets/fonts/           ← fraunces-latin.woff2, geist-latin.woff2
assets/img/             ← WebP nas larguras da §3.2
assets/og/og-anelx.jpg  ← 1200×630
assets/icons/           ← SVG desenhados à mão: carrinho, +, setas, ×, menu
```

- **Sem framework, sem build, sem npm** (CLAUDE.md). A conversão de imagens roda uma vez, fora do repositório, e não vira dependência.
- A página funciona aberta direto do disco (sem `fetch` de JSON, porque o navegador bloqueia `fetch` em arquivo local).
- **HTML:** `header`, `nav`, `main`, uma `section` com `aria-labelledby` por bloco, um único `h1` (no hero) e "pular para o conteúdo" como primeiro elemento.
- **Carrossel:** rolagem nativa com encaixe e setas que só rolam. Sem rotação automática. Respeita `prefers-reduced-motion`.
- **Acessibilidade:** botões "+" com `aria-expanded`; setas e × com `aria-label` em PT e EN; `alt` PT/EN do `imagens.md`; navegação completa por teclado; foco conforme D2.
- **Orçamento:** HTML + CSS + JS ≤ 60 KB; fontes ~95 KB; primeira tela ≤ 400 KB.

---

## 10. Ordem de execução

Cada etapa termina com **capturas de tela em 360, 390, 768, 1024, 1280, 1440 e 1920px**, tiradas pelo Chrome sem janela, para você ver antes de eu seguir.

| Etapa | O quê | Depende de |
|---|---|---|
| 0 | Você responde D1–D11 e vê o que tem de conteúdo real da §8 | — |
| 1 | Preparar assets: converter e exportar as imagens, recortar a og, baixar as fontes, desenhar os ícones SVG | D8 |
| 2 | Base: `index.html` com a estrutura semântica, tokens, fontes, botões e tags | D2, D3, D5 |
| 3 | Seções 1–4: aviso, nav, hero e manifesto. Valido a sobreposição do hero a 768px | D1, D6, D9 |
| 4 | Seções 5–6: carrossel e prova numérica | — |
| 5 | Seção 7: telas do app em HTML/CSS + sensores | — |
| 6 | Seções 8–10: depoimentos, mídia/ciência e footer | D10 |
| 7 | EN completo no `i18n.js` + revisão dos limites em EN | D7 |
| 8 | Revisão final: teclado, contraste, zoom de 200%, tela de 320px, peso, nenhum `data-pendente` esquecido | — |
| 9 | Registro: `memoria.md`, `imagens.md` (tamanhos reais) e `specs/design.md` (só o que você aprovar) | — |
