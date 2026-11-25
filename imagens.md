# imagens.md — Prompts de imagem do AnelX

Prompts para gerar todas as imagens da landing page. Cada prompt traz o **prompt base** (igual em todos) seguido da parte específica da imagem. É só copiar o bloco inteiro.

- Prompts em inglês: os geradores respondem melhor. Explicações em português.
- Formato neutro: serve para GPT Image, Gemini, Flux ou Midjourney. A proporção vem escrita no texto (no Midjourney, adicionar `--ar` correspondente no fim).
- Fonte da verdade de cor e layout: `specs/design.md`.

---

## 1. Análise

### O anel (de `meus produtos/`)

Li 8 das 10 imagens. `compare_rings_coop.png` e `or4-ceramic-midnight-angle-view.png` são AVIF com extensão `.png` e não abriram aqui.

- **Forma:** aro contínuo e liso, ~7–8 mm de largura, perfil externo levemente abaulado, bordas arredondadas. Mesma espessura em toda a volta.
- **Interior:** titânio polido com 3 janelas de sensor escuras, retangulares de cantos arredondados. Brilho verde e vermelho dos LEDs aparece quando o interior está visível (`Oura_Ring_5_Stealth_1200x.png`).
- **Acabamentos nas fotos:** preto fosco, titânio escovado, dourado, rose, grafite, cerâmica brilhante colorida.
- **Como é usado:** indicador ou médio, justo no dedo, discreto, nunca o centro gritante da cena.

### Estilo das fotos de referência

- **Lifestyle** (`azul-homem`, `banner-04`, `oura-ring-atleta`, `Oura-Horizon-smart-ring`): sol natural forte, céu azul, roupa azul ou teal, close de mão, rosto cortado ou virado de lado, pele real com textura, leve grão de filme, profundidade de campo curta.
- **Estúdio** (`Ouras-Image`, `Ouras.ring`, `Mao-com-Oura-ring`): fundo em degradê suave ou pedestais curvos cor creme, anéis flutuando ou apoiados, sombra macia.

### Encontro com a spec de design

- A spec pede **luz natural quente** e paleta **creme + carvão + azul royal raro**. As fotos de referência são mais frias (céu azul forte).
- Síntese usada: **luz dourada de fim de tarde** (quente) + **azul só como acento** (uma camiseta, um pedaço de céu). Isso amarra a fotografia ao azul `#2B4CF0` do CTA sem esfriar o site.
- Fundos das imagens de produto terminam em creme `#F4EEE4` (seções claras) ou carvão `#191714` (seção escura), pra imagem fundir com a página sem borda visível.

### Decisões

- **Acabamento do AnelX:** titânio escovado prata (principal) + preto fosco (secundário). Nenhum outro aparece no site.
- **Sem cópia da Oura:** o prompt base descreve um aro liso genérico de anel inteligente, sem topo achatado nem facetas (detalhe característico de um modelo da Oura em `oura-ring-atleta.png`), sem logo, sem texto.
- **Consistência:** gerar a IMG-01 primeiro. Depois, nos geradores que aceitam imagem de referência (GPT Image, Gemini), anexar a IMG-01 aprovada em todos os outros prompts. Assim o anel do AnelX vira a referência, não as fotos da Oura.

---

## 2. Prompt base (vai em todos os prompts)

```
Real editorial photograph for a premium wellness brand. Product: a minimalist smart ring — one seamless, perfectly round band, about 7.5 mm wide and 2.5 mm thick, with a softly domed comfort-fit outer surface and gently rounded edges; no flat top, no facets, no gemstones, no engravings, no logos, no text. The inner surface is polished titanium with three small rounded-rectangle dark sensor windows; when the inside is visible, a faint green and red glow shows inside the windows. The outer finish is exactly one of two: brushed silver titanium or matte black — use only the finish named in this prompt. The ring has the same size and proportions in every image and sits snugly on the finger. Look: natural warm light, soft film grain, true-to-life skin with visible pores and fine lines, calm and quiet mood, generous negative space, shallow depth of field. Color world: warm cream, sand beige and deep charcoal, with royal blue used only as a small accent in clothing or sky. Avoid: any logo, brand name, letters or watermark; extra rings or other jewelry on the same hand; plastic or CGI look; cartoon style; oversaturated colors; harsh HDR; distorted, fused or extra fingers.
```

---

## 3. Mapa de imagens por seção

| ID | Seção (specs/design.md §4) | Proporção | Tamanho export | Acabamento |
|---|---|---|---|---|
| IMG-01 | 3. Hero — desktop | 16:9 | 2400×1350 | prata + preto |
| IMG-02 | 3. Hero — mobile | 4:5 | 1080×1350 | prata + preto |
| IMG-03 | 5. Carrossel — Coração | 4:5 | 1080×1350 | prata |
| IMG-04 | 5. Carrossel — Sono | 4:5 | 1080×1350 | preto |
| IMG-05 | 5. Carrossel — Estresse | 4:5 | 1080×1350 | prata |
| IMG-06 | 5. Carrossel — Atividade | 4:5 | 1080×1350 | preto |
| IMG-07 | 5. Carrossel — Recuperação | 4:5 | 1080×1350 | prata |
| IMG-10 | 4. Manifesto — faixa larga | 21:9 | 2520×1080 | prata |
| IMG-11 | 6. Prova numérica — comunidade | 3:2 | 1800×1200 | prata + preto |
| IMG-12 | 7. App — sensores em macro | 1:1 | 1200×1200 | prata |
| IMG-13 | 8. Depoimento 1 — Coração | 4:3 | 800×600 | prata |
| IMG-14 | 8. Depoimento 2 — Sono | 4:3 | 800×600 | preto |
| IMG-15 | 8. Depoimento 3 — Atividade | 4:3 | 800×600 | prata |
| IMG-08 | 9. Na mídia — card destaque | 16:10 | 1600×1000 | preto |
| IMG-16 | 10. Footer — faixa escura | 21:9 | 2520×1080 | preto |
| IMG-09 | Compartilhamento (og:image) | 1.91:1 | 1200×630 | prata |

Os IDs seguem a ordem em que foram criados, não a ordem da página.

Sem imagem:
- **Barra de aviso (1) e nav (2):** faixas de 40–70px de altura, não comportam foto. O logo vai em SVG.
- **Cards de imprensa (9):** os 3 cards menores ficam só com texto, como na referência.

Ver também §5 (o que não gerar).

### O que anexar no ChatGPT

A imagem 1 é sempre a **IMG-01 aprovada**: é ela que define o anel do AnelX. A imagem 2 (quando houver) é uma foto de `meus produtos/` usada **só** pra qualidade de luz, textura de pele e sensação de foto. As cores vêm do prompt. Anexe nessa ordem.

| ID | Imagem 1 | Imagem 2 (só clima) |
|---|---|---|
| IMG-01 | — (é a primeira) | `Ouras.ring.png` (opcional) |
| IMG-02 | IMG-01 aprovada (mesma cena, na vertical) | — |
| IMG-03 | IMG-01 aprovada | `Oura-Horizon-smart-ring.png` |
| IMG-04 | IMG-01 aprovada | — |
| IMG-05 | IMG-01 aprovada | `banner-04.png` |
| IMG-06 | IMG-01 aprovada | `azul-homem.png` |
| IMG-07 | IMG-01 aprovada | `Oura-Horizon-smart-ring.png` |
| IMG-08 | IMG-01 aprovada | — |
| IMG-09 | IMG-01 aprovada | `Ouras.ring.png` |
| IMG-10 a IMG-16 | IMG-01 aprovada | — |

Fotos da pasta que **não** entram:
- `oura-ring-atleta.png`: o anel tem topo achatado, justamente o detalhe que o prompt base exclui.
- `Oura_Ring_5_Stealth_1200x.png`: é o anel da Oura em detalhe; anexado, o ChatGPT copia o produto. Pros sensores (IMG-12) vale a IMG-01, que já mostra o interior.
- `Mao-com-Oura-ring.png`: fundo azul em degradê, fora da paleta creme.
- `Ouras-Image.png`: fundo cinza e cerâmica colorida, fora dos dois acabamentos.
- `compare_rings_coop.png` e `or4-ceramic-midnight-angle-view.png`: AVIF com extensão errada, não analisados.

No IMG-05 e IMG-06, a foto anexada não é a que inspirou a cena (`azul-homem` → IMG-05, `oura-ring-atleta` → IMG-06). Foi de propósito: anexar a foto de origem faz o ChatGPT devolver quase a mesma foto da Oura.

---

## 4. Prompts

### IMG-01 — Hero desktop

- **Seção:** 3. Hero. Fica abaixo do título display + subtítulo + CTA azul, centralizados.
- **Encaixe:** os 45% de cima da imagem ficam vazios (só creme) pro texto. Anéis no terço de baixo, centralizados. Bordas da imagem terminam em creme liso `#F4EEE4` pra fundir com o fundo da página.
- **Arquivo:** `assets/img/hero-desktop.webp`
- **alt PT:** "Dois anéis AnelX, prata e preto, sobre uma faixa de tecido creme."
- **alt EN:** "Two AnelX rings, silver and black, resting on a flowing cream fabric ribbon."

```
[PROMPT BASE]
Real editorial photograph for a premium wellness brand. Product: a minimalist smart ring — one seamless, perfectly round band, about 7.5 mm wide and 2.5 mm thick, with a softly domed comfort-fit outer surface and gently rounded edges; no flat top, no facets, no gemstones, no engravings, no logos, no text. The inner surface is polished titanium with three small rounded-rectangle dark sensor windows; when the inside is visible, a faint green and red glow shows inside the windows. The outer finish is exactly one of two: brushed silver titanium or matte black — use only the finish named in this prompt. The ring has the same size and proportions in every image and sits snugly on the finger. Look: natural warm light, soft film grain, true-to-life skin with visible pores and fine lines, calm and quiet mood, generous negative space, shallow depth of field. Color world: warm cream, sand beige and deep charcoal, with royal blue used only as a small accent in clothing or sky. Avoid: any logo, brand name, letters or watermark; extra rings or other jewelry on the same hand; plastic or CGI look; cartoon style; oversaturated colors; harsh HDR; distorted, fused or extra fingers.

[THIS IMAGE]
Finish: two rings side by side — one brushed silver titanium, one matte black. Scene: studio still life. The two rings stand upright on their edges, slightly overlapping in depth, resting on a long, softly flowing ribbon of cream silk that sweeps across the frame in a gentle S-curve from lower left to right. The silver ring is in front, turned three-quarters so the polished inner surface and the sensor windows are visible; the black ring sits just behind it. Framing: wide shot, rings small in the frame and centered in the lower third; the upper 45% of the image is empty, smooth warm cream background. Light: soft warm diffused key light from the upper left, gentle highlights along the ring edges, soft contact shadows on the silk. Background: seamless warm cream (#F4EEE4) that stays flat and even all the way to the image edges. Aspect ratio 16:9, horizontal.
```

### IMG-02 — Hero mobile

- **Seção:** 3. Hero em telas pequenas (`<picture>` troca pela IMG-01 acima de 768px).
- **Encaixe:** metade de cima vazia pro título e o CTA. Anéis no terço de baixo.
- **Arquivo:** `assets/img/hero-mobile.webp`
- **alt:** igual à IMG-01.

```
[PROMPT BASE]
Real editorial photograph for a premium wellness brand. Product: a minimalist smart ring — one seamless, perfectly round band, about 7.5 mm wide and 2.5 mm thick, with a softly domed comfort-fit outer surface and gently rounded edges; no flat top, no facets, no gemstones, no engravings, no logos, no text. The inner surface is polished titanium with three small rounded-rectangle dark sensor windows; when the inside is visible, a faint green and red glow shows inside the windows. The outer finish is exactly one of two: brushed silver titanium or matte black — use only the finish named in this prompt. The ring has the same size and proportions in every image and sits snugly on the finger. Look: natural warm light, soft film grain, true-to-life skin with visible pores and fine lines, calm and quiet mood, generous negative space, shallow depth of field. Color world: warm cream, sand beige and deep charcoal, with royal blue used only as a small accent in clothing or sky. Avoid: any logo, brand name, letters or watermark; extra rings or other jewelry on the same hand; plastic or CGI look; cartoon style; oversaturated colors; harsh HDR; distorted, fused or extra fingers.

[THIS IMAGE]
Finish: two rings — one brushed silver titanium, one matte black. Scene: the same studio still life as the desktop hero, recomposed vertically. The two rings stand upright on their edges on a ribbon of cream silk that curves gently upward from the bottom of the frame. The silver ring is in front, turned three-quarters so the inner surface and sensor windows are visible; the black ring sits just behind it. Framing: rings centered horizontally in the lower third; the upper half of the image is empty, smooth warm cream background. Light: soft warm diffused key light from the upper left, soft contact shadows. Background: seamless warm cream (#F4EEE4), flat and even to all edges. Aspect ratio 4:5, vertical.
```

### Cards do carrossel (IMG-03 a IMG-07) — regras comuns

- **Seção:** 5. Carrossel de benefícios. Card com cantos de 20px, imagem ocupando o card todo.
- **Encaixe:** canto superior esquerdo livre pra tag pill; canto superior direito livre pro botão "+"; terço de baixo calmo e um pouco mais escuro, sem detalhe importante, porque recebe o gradiente e o título em branco.
- **Anel:** sempre visível no terço do meio, nunca coberto pelo texto.

### IMG-03 — Card "Coração"

- **Arquivo:** `assets/img/card-coracao.webp`
- **alt PT:** "Mão com anel AnelX prata apoiada sobre o peito."
- **alt EN:** "Hand wearing a silver AnelX ring resting on the chest."

```
[PROMPT BASE]
Real editorial photograph for a premium wellness brand. Product: a minimalist smart ring — one seamless, perfectly round band, about 7.5 mm wide and 2.5 mm thick, with a softly domed comfort-fit outer surface and gently rounded edges; no flat top, no facets, no gemstones, no engravings, no logos, no text. The inner surface is polished titanium with three small rounded-rectangle dark sensor windows; when the inside is visible, a faint green and red glow shows inside the windows. The outer finish is exactly one of two: brushed silver titanium or matte black — use only the finish named in this prompt. The ring has the same size and proportions in every image and sits snugly on the finger. Look: natural warm light, soft film grain, true-to-life skin with visible pores and fine lines, calm and quiet mood, generous negative space, shallow depth of field. Color world: warm cream, sand beige and deep charcoal, with royal blue used only as a small accent in clothing or sky. Avoid: any logo, brand name, letters or watermark; extra rings or other jewelry on the same hand; plastic or CGI look; cartoon style; oversaturated colors; harsh HDR; distorted, fused or extra fingers.

[THIS IMAGE]
Finish: brushed silver titanium, worn on the index finger. Scene: close-up of a person's hand resting flat over the left side of their chest, on a soft cream linen shirt, as if feeling their heartbeat. Only the hand, part of the forearm and the shirt fabric are visible; no face. Framing: tight crop, the ring sits in the middle third of the frame, slightly right of center. The top-left and top-right corners are plain fabric with no detail. The bottom third is calm, slightly darker fabric in soft shadow. Light: warm late-afternoon window light from the right, soft shadows in the fabric folds. Aspect ratio 4:5, vertical.
```

### IMG-04 — Card "Sono"

- **Arquivo:** `assets/img/card-sono.webp`
- **alt PT:** "Mão com anel AnelX preto descansando sobre lençol creme pela manhã."
- **alt EN:** "Hand wearing a black AnelX ring resting on a cream bedsheet in the morning."

```
[PROMPT BASE]
Real editorial photograph for a premium wellness brand. Product: a minimalist smart ring — one seamless, perfectly round band, about 7.5 mm wide and 2.5 mm thick, with a softly domed comfort-fit outer surface and gently rounded edges; no flat top, no facets, no gemstones, no engravings, no logos, no text. The inner surface is polished titanium with three small rounded-rectangle dark sensor windows; when the inside is visible, a faint green and red glow shows inside the windows. The outer finish is exactly one of two: brushed silver titanium or matte black — use only the finish named in this prompt. The ring has the same size and proportions in every image and sits snugly on the finger. Look: natural warm light, soft film grain, true-to-life skin with visible pores and fine lines, calm and quiet mood, generous negative space, shallow depth of field. Color world: warm cream, sand beige and deep charcoal, with royal blue used only as a small accent in clothing or sky. Avoid: any logo, brand name, letters or watermark; extra rings or other jewelry on the same hand; plastic or CGI look; cartoon style; oversaturated colors; harsh HDR; distorted, fused or extra fingers.

[THIS IMAGE]
Finish: matte black, worn on the middle finger. Scene: a relaxed hand lying palm down on softly rumpled cream cotton bedsheets, early morning, the person still in bed. Only the hand, wrist and sheets are visible; the edge of a sand-beige pillow is blurred in the background. Framing: overhead three-quarter angle, the ring in the middle third of the frame. Top corners are plain sheet fabric. The bottom third is soft, slightly darker folds of sheet in shadow. Light: very soft, low warm sunrise light through a sheer curtain, long gentle shadows, hazy and peaceful. Aspect ratio 4:5, vertical.
```

### IMG-05 — Card "Estresse"

- **Arquivo:** `assets/img/card-estresse.webp`
- **alt PT:** "Pessoa de costas com a mão na nuca, usando anel AnelX prata, sob céu azul."
- **alt EN:** "Person seen from behind with a hand on the back of the neck, wearing a silver AnelX ring, under a blue sky."

```
[PROMPT BASE]
Real editorial photograph for a premium wellness brand. Product: a minimalist smart ring — one seamless, perfectly round band, about 7.5 mm wide and 2.5 mm thick, with a softly domed comfort-fit outer surface and gently rounded edges; no flat top, no facets, no gemstones, no engravings, no logos, no text. The inner surface is polished titanium with three small rounded-rectangle dark sensor windows; when the inside is visible, a faint green and red glow shows inside the windows. The outer finish is exactly one of two: brushed silver titanium or matte black — use only the finish named in this prompt. The ring has the same size and proportions in every image and sits snugly on the finger. Look: natural warm light, soft film grain, true-to-life skin with visible pores and fine lines, calm and quiet mood, generous negative space, shallow depth of field. Color world: warm cream, sand beige and deep charcoal, with royal blue used only as a small accent in clothing or sky. Avoid: any logo, brand name, letters or watermark; extra rings or other jewelry on the same hand; plastic or CGI look; cartoon style; oversaturated colors; harsh HDR; distorted, fused or extra fingers.

[THIS IMAGE]
Finish: brushed silver titanium, worn on the index finger. Scene: a person seen from behind and slightly to the side, outdoors, one hand resting on the back of their neck in a slow, releasing stretch, eyes not visible. They wear a royal blue t-shirt. Behind them, a warm sun-lit cream limestone wall on one side and a clear soft blue sky on the other. Framing: low angle, the hand and ring in the middle third, close enough to see the knuckles and skin texture. Top corners are plain sky and plain wall. The bottom third is the blue shirt in soft shadow. Light: warm golden-hour sun from the side, natural skin highlights. Aspect ratio 4:5, vertical.
```

### IMG-06 — Card "Atividade"

- **Arquivo:** `assets/img/card-atividade.webp`
- **alt PT:** "Atleta descansando os braços numa barra depois do treino, com anel AnelX preto."
- **alt EN:** "Athlete resting their arms on a bar after training, wearing a black AnelX ring."

```
[PROMPT BASE]
Real editorial photograph for a premium wellness brand. Product: a minimalist smart ring — one seamless, perfectly round band, about 7.5 mm wide and 2.5 mm thick, with a softly domed comfort-fit outer surface and gently rounded edges; no flat top, no facets, no gemstones, no engravings, no logos, no text. The inner surface is polished titanium with three small rounded-rectangle dark sensor windows; when the inside is visible, a faint green and red glow shows inside the windows. The outer finish is exactly one of two: brushed silver titanium or matte black — use only the finish named in this prompt. The ring has the same size and proportions in every image and sits snugly on the finger. Look: natural warm light, soft film grain, true-to-life skin with visible pores and fine lines, calm and quiet mood, generous negative space, shallow depth of field. Color world: warm cream, sand beige and deep charcoal, with royal blue used only as a small accent in clothing or sky. Avoid: any logo, brand name, letters or watermark; extra rings or other jewelry on the same hand; plastic or CGI look; cartoon style; oversaturated colors; harsh HDR; distorted, fused or extra fingers.

[THIS IMAGE]
Finish: matte black, worn on the middle finger. Scene: an athlete in their thirties catching their breath after an outdoor run, forearms resting over a dark metal bar of an outdoor training park, hands hanging loosely. They wear a faded royal blue t-shirt; their face is out of focus in the upper background, turned away. Framing: the hands and the ring are sharp in the middle third; the background is soft blur of warm grass and pale sky. Top corners are blurred background with no detail. The bottom third is the dark bar and soft shadow. Light: warm low golden-hour sun from behind and to the side, gentle rim light on the forearms, a light sheen of sweat on the skin. Aspect ratio 4:5, vertical.
```

### IMG-07 — Card "Recuperação"

- **Arquivo:** `assets/img/card-recuperacao.webp`
- **alt PT:** "Mãos segurando uma caneca de cerâmica, com anel AnelX prata e suéter areia."
- **alt EN:** "Hands holding a ceramic mug, wearing a silver AnelX ring and a sand-colored sweater."

```
[PROMPT BASE]
Real editorial photograph for a premium wellness brand. Product: a minimalist smart ring — one seamless, perfectly round band, about 7.5 mm wide and 2.5 mm thick, with a softly domed comfort-fit outer surface and gently rounded edges; no flat top, no facets, no gemstones, no engravings, no logos, no text. The inner surface is polished titanium with three small rounded-rectangle dark sensor windows; when the inside is visible, a faint green and red glow shows inside the windows. The outer finish is exactly one of two: brushed silver titanium or matte black — use only the finish named in this prompt. The ring has the same size and proportions in every image and sits snugly on the finger. Look: natural warm light, soft film grain, true-to-life skin with visible pores and fine lines, calm and quiet mood, generous negative space, shallow depth of field. Color world: warm cream, sand beige and deep charcoal, with royal blue used only as a small accent in clothing or sky. Avoid: any logo, brand name, letters or watermark; extra rings or other jewelry on the same hand; plastic or CGI look; cartoon style; oversaturated colors; harsh HDR; distorted, fused or extra fingers.

[THIS IMAGE]
Finish: brushed silver titanium, worn on the index finger. Scene: two hands gently wrapped around a plain matte cream ceramic mug of tea, resting on the lap. The person wears a chunky sand-beige knit sweater with the sleeves pulled slightly over the wrists. No face visible. Framing: close-up from slightly above, the ring and mug in the middle third. Top corners are plain soft knit texture. The bottom third is the lap in soft shadow, darker knit fabric. Light: warm soft morning light from a window on the left, a faint wisp of steam above the mug. Aspect ratio 4:5, vertical.
```

### IMG-08 — Card destaque "Na mídia"

- **Seção:** 9. Na mídia — seção escura (carvão). Card grande à esquerda com título branco e botão no canto inferior esquerdo.
- **Encaixe:** canto inferior esquerdo escuro e liso pro título e botão. Bordas terminam em carvão `#191714` pra fundir com a seção. Assunto à direita e no centro.
- **Arquivo:** `assets/img/midia-destaque.webp`
- **alt PT:** "Duas mãos se tocando em luz baixa, uma delas com anel AnelX preto."
- **alt EN:** "Two hands touching in low light, one wearing a black AnelX ring."

```
[PROMPT BASE]
Real editorial photograph for a premium wellness brand. Product: a minimalist smart ring — one seamless, perfectly round band, about 7.5 mm wide and 2.5 mm thick, with a softly domed comfort-fit outer surface and gently rounded edges; no flat top, no facets, no gemstones, no engravings, no logos, no text. The inner surface is polished titanium with three small rounded-rectangle dark sensor windows; when the inside is visible, a faint green and red glow shows inside the windows. The outer finish is exactly one of two: brushed silver titanium or matte black — use only the finish named in this prompt. The ring has the same size and proportions in every image and sits snugly on the finger. Look: natural warm light, soft film grain, true-to-life skin with visible pores and fine lines, calm and quiet mood, generous negative space, shallow depth of field. Color world: warm cream, sand beige and deep charcoal, with royal blue used only as a small accent in clothing or sky. Avoid: any logo, brand name, letters or watermark; extra rings or other jewelry on the same hand; plastic or CGI look; cartoon style; oversaturated colors; harsh HDR; distorted, fused or extra fingers.

[THIS IMAGE]
Finish: matte black, worn on the index finger. Scene: two hands of two different people reaching toward each other, fingertips just touching, against a deep charcoal background. One hand wears the ring. Framing: horizontal editorial composition; the hands enter from the right and top, meeting in the right-center of the frame; the ring is sharp and catches a thin line of light along its edge. The lower-left third of the image is empty, smooth deep charcoal (#191714). All image edges fade into the same flat charcoal. Light: low-key, a single warm soft light from the upper right sculpting the skin, deep soft shadows, quiet and intimate. Aspect ratio 16:10, horizontal.
```

### IMG-09 — Imagem de compartilhamento (og:image)

- **Uso:** prévia do link em WhatsApp, redes sociais e buscadores (`<meta property="og:image">`). Não aparece na página.
- **Encaixe:** anel no terço esquerdo; metade direita vazia em creme pra colocar título e logo depois, por cima, num editor.
- **Arquivo:** `assets/img/og-anelx.jpg` (JPG: algumas redes não leem WebP)
- **alt PT:** "Anel AnelX prata sobre pedestal creme."
- **alt EN:** "Silver AnelX ring on a cream plinth."

```
[PROMPT BASE]
Real editorial photograph for a premium wellness brand. Product: a minimalist smart ring — one seamless, perfectly round band, about 7.5 mm wide and 2.5 mm thick, with a softly domed comfort-fit outer surface and gently rounded edges; no flat top, no facets, no gemstones, no engravings, no logos, no text. The inner surface is polished titanium with three small rounded-rectangle dark sensor windows; when the inside is visible, a faint green and red glow shows inside the windows. The outer finish is exactly one of two: brushed silver titanium or matte black — use only the finish named in this prompt. The ring has the same size and proportions in every image and sits snugly on the finger. Look: natural warm light, soft film grain, true-to-life skin with visible pores and fine lines, calm and quiet mood, generous negative space, shallow depth of field. Color world: warm cream, sand beige and deep charcoal, with royal blue used only as a small accent in clothing or sky. Avoid: any logo, brand name, letters or watermark; extra rings or other jewelry on the same hand; plastic or CGI look; cartoon style; oversaturated colors; harsh HDR; distorted, fused or extra fingers.

[THIS IMAGE]
Finish: brushed silver titanium. Scene: studio still life, a single ring standing upright on its edge on a low, round, matte sand-beige plaster plinth with softly curved edges. The ring is turned three-quarters so the polished inner surface and the sensor windows are visible, with a faint green and red glow inside. Framing: the ring and plinth sit in the left third of the frame; the right half is empty, smooth warm cream background. Light: soft warm diffused light from the upper left, gentle highlight along the ring's edge, soft contact shadow on the plinth. Background: seamless warm cream (#F4EEE4), flat to all edges. Aspect ratio 1.91:1, horizontal.
```

### IMG-10 — Manifesto, faixa larga

- **Seção:** 4. Manifesto. Fica abaixo da frase grande e dos dois botões, na largura do container, cantos de 20px.
- **Encaixe:** sem texto por cima. Terço esquerdo calmo (parede e chão iluminados); pessoa e anel no terço direito.
- **Arquivo:** `assets/img/manifesto.webp`
- **alt PT:** "Pessoa sentada perto da janela, de olhos fechados, com anel AnelX prata."
- **alt EN:** "Person sitting by a window with eyes closed, wearing a silver AnelX ring."

```
[PROMPT BASE]
Real editorial photograph for a premium wellness brand. Product: a minimalist smart ring — one seamless, perfectly round band, about 7.5 mm wide and 2.5 mm thick, with a softly domed comfort-fit outer surface and gently rounded edges; no flat top, no facets, no gemstones, no engravings, no logos, no text. The inner surface is polished titanium with three small rounded-rectangle dark sensor windows; when the inside is visible, a faint green and red glow shows inside the windows. The outer finish is exactly one of two: brushed silver titanium or matte black — use only the finish named in this prompt. The ring has the same size and proportions in every image and sits snugly on the finger. Look: natural warm light, soft film grain, true-to-life skin with visible pores and fine lines, calm and quiet mood, generous negative space, shallow depth of field. Color world: warm cream, sand beige and deep charcoal, with royal blue used only as a small accent in clothing or sky. Avoid: any logo, brand name, letters or watermark; extra rings or other jewelry on the same hand; plastic or CGI look; cartoon style; oversaturated colors; harsh HDR; distorted, fused or extra fingers.

[THIS IMAGE]
Finish: brushed silver titanium, worn on the index finger. Scene: a person sitting cross-legged on a pale wooden floor beside a large window, eyes closed, breathing slowly, both hands resting on the knees with palms up. They wear loose cream linen clothes. Framing: wide horizontal crop from the chin down to the knees; the person sits in the right third of the frame, the ring hand clearly visible and in focus. The left third is an empty sunlit cream wall and floor with soft window-frame shadows. Light: warm low morning sun through the window, long soft shadows, golden glow on the skin. Aspect ratio 21:9, wide panoramic.
```

### IMG-11 — Prova numérica, comunidade

- **Seção:** 6. Prova numérica. Fica abaixo da estatística, do texto e do botão, centralizada, até 960px de largura, cantos de 20px.
- **Encaixe:** sem texto por cima. Três mãos em fila horizontal no meio; margens de tecido liso em volta.
- **Arquivo:** `assets/img/comunidade.webp`
- **alt PT:** "Mãos de três pessoas de idades diferentes, cada uma com um anel AnelX."
- **alt EN:** "Hands of three people of different ages, each wearing an AnelX ring."

```
[PROMPT BASE]
Real editorial photograph for a premium wellness brand. Product: a minimalist smart ring — one seamless, perfectly round band, about 7.5 mm wide and 2.5 mm thick, with a softly domed comfort-fit outer surface and gently rounded edges; no flat top, no facets, no gemstones, no engravings, no logos, no text. The inner surface is polished titanium with three small rounded-rectangle dark sensor windows; when the inside is visible, a faint green and red glow shows inside the windows. The outer finish is exactly one of two: brushed silver titanium or matte black — use only the finish named in this prompt. The ring has the same size and proportions in every image and sits snugly on the finger. Look: natural warm light, soft film grain, true-to-life skin with visible pores and fine lines, calm and quiet mood, generous negative space, shallow depth of field. Color world: warm cream, sand beige and deep charcoal, with royal blue used only as a small accent in clothing or sky. Avoid: any logo, brand name, letters or watermark; extra rings or other jewelry on the same hand; plastic or CGI look; cartoon style; oversaturated colors; harsh HDR; distorted, fused or extra fingers.

[THIS IMAGE]
Finish: three rings, one per hand — left hand brushed silver titanium, middle hand matte black, right hand brushed silver titanium. Scene: top-down view of three hands from three different people resting side by side on a sand-beige linen tablecloth, fingers relaxed. The people are of clearly different ages (about twenty-five, forty-five and seventy) and different skin tones; the oldest hand shows natural wrinkles and age spots. Each hand wears one ring on the index or middle finger. Framing: the three hands form an evenly spaced horizontal row through the middle of the frame, wrists entering from the bottom edge; plain linen around them. Light: soft warm daylight from the upper left, gentle shadows under the fingers. Aspect ratio 3:2, horizontal.
```

### IMG-12 — App, sensores em macro

- **Seção:** 7. App. Bloco abaixo das telas do app em leque: imagem à esquerda, texto curto sobre os sensores à direita. No mobile, imagem em cima do texto. As telas do app continuam em HTML/CSS.
- **Encaixe:** sem texto por cima. Anel ocupando ~60% do quadro, centralizado; fundo creme liso pra fundir com a seção.
- **Arquivo:** `assets/img/sensores.webp`
- **alt PT:** "Interior do anel AnelX em close, com os três sensores acesos."
- **alt EN:** "Close-up of the inside of the AnelX ring, with its three sensors lit."

```
[PROMPT BASE]
Real editorial photograph for a premium wellness brand. Product: a minimalist smart ring — one seamless, perfectly round band, about 7.5 mm wide and 2.5 mm thick, with a softly domed comfort-fit outer surface and gently rounded edges; no flat top, no facets, no gemstones, no engravings, no logos, no text. The inner surface is polished titanium with three small rounded-rectangle dark sensor windows; when the inside is visible, a faint green and red glow shows inside the windows. The outer finish is exactly one of two: brushed silver titanium or matte black — use only the finish named in this prompt. The ring has the same size and proportions in every image and sits snugly on the finger. Look: natural warm light, soft film grain, true-to-life skin with visible pores and fine lines, calm and quiet mood, generous negative space, shallow depth of field. Color world: warm cream, sand beige and deep charcoal, with royal blue used only as a small accent in clothing or sky. Avoid: any logo, brand name, letters or watermark; extra rings or other jewelry on the same hand; plastic or CGI look; cartoon style; oversaturated colors; harsh HDR; distorted, fused or extra fingers.

[THIS IMAGE]
Finish: brushed silver titanium. Scene: studio macro photograph of a single ring, tilted toward the camera so the polished inner surface faces the viewer. The three sensor windows are tack-sharp, each a small dark rounded rectangle under clear glass, with a soft green and red light glowing from inside; tiny reflections on the polished titanium. Framing: the ring fills about 60% of the frame, centered; the far edge of the band falls into soft focus. Light: soft warm diffused studio light from above, one clean highlight along the outer edge. Background: seamless warm cream (#F4EEE4), flat to all edges. Aspect ratio 1:1, square.
```

### Depoimentos (IMG-13 a IMG-15) — regras comuns

- **Seção:** 8. Depoimentos. A foto fica no topo de cada um dos 3 cards creme-areia, com os cantos de cima arredondados; tag, citação e nome vêm embaixo.
- **Por que mão e não rosto:** rosto gerado ao lado de depoimento sugere um cliente real que não existe. A foto mostra o anel no dia a dia; o nome e a citação têm que ser de cliente real.
- **Encaixe:** sem texto por cima. Anel no centro do quadro. Tom calmo pra combinar com o card.

### IMG-13 — Depoimento 1, Coração

- **Arquivo:** `assets/img/depo-coracao.webp`
- **alt PT:** "Mão com anel AnelX prata apoiada no joelho, num banco de praça."
- **alt EN:** "Hand wearing a silver AnelX ring resting on the knee on a park bench."

```
[PROMPT BASE]
Real editorial photograph for a premium wellness brand. Product: a minimalist smart ring — one seamless, perfectly round band, about 7.5 mm wide and 2.5 mm thick, with a softly domed comfort-fit outer surface and gently rounded edges; no flat top, no facets, no gemstones, no engravings, no logos, no text. The inner surface is polished titanium with three small rounded-rectangle dark sensor windows; when the inside is visible, a faint green and red glow shows inside the windows. The outer finish is exactly one of two: brushed silver titanium or matte black — use only the finish named in this prompt. The ring has the same size and proportions in every image and sits snugly on the finger. Look: natural warm light, soft film grain, true-to-life skin with visible pores and fine lines, calm and quiet mood, generous negative space, shallow depth of field. Color world: warm cream, sand beige and deep charcoal, with royal blue used only as a small accent in clothing or sky. Avoid: any logo, brand name, letters or watermark; extra rings or other jewelry on the same hand; plastic or CGI look; cartoon style; oversaturated colors; harsh HDR; distorted, fused or extra fingers.

[THIS IMAGE]
Finish: brushed silver titanium, worn on the index finger. Scene: a man in his sixties resting on a wooden park bench after a walk, one hand relaxed on his knee over sand-colored chino trousers. Only the hand, forearm and knee are visible; no face. Framing: close-up, the ring centered in the frame; soft blurred green park and warm light in the background. Light: warm late-afternoon sun from the side. Aspect ratio 4:3, horizontal.
```

### IMG-14 — Depoimento 2, Sono

- **Arquivo:** `assets/img/depo-sono.webp`
- **alt PT:** "Mão com anel AnelX preto apagando um abajur à noite."
- **alt EN:** "Hand wearing a black AnelX ring switching off a bedside lamp at night."

```
[PROMPT BASE]
Real editorial photograph for a premium wellness brand. Product: a minimalist smart ring — one seamless, perfectly round band, about 7.5 mm wide and 2.5 mm thick, with a softly domed comfort-fit outer surface and gently rounded edges; no flat top, no facets, no gemstones, no engravings, no logos, no text. The inner surface is polished titanium with three small rounded-rectangle dark sensor windows; when the inside is visible, a faint green and red glow shows inside the windows. The outer finish is exactly one of two: brushed silver titanium or matte black — use only the finish named in this prompt. The ring has the same size and proportions in every image and sits snugly on the finger. Look: natural warm light, soft film grain, true-to-life skin with visible pores and fine lines, calm and quiet mood, generous negative space, shallow depth of field. Color world: warm cream, sand beige and deep charcoal, with royal blue used only as a small accent in clothing or sky. Avoid: any logo, brand name, letters or watermark; extra rings or other jewelry on the same hand; plastic or CGI look; cartoon style; oversaturated colors; harsh HDR; distorted, fused or extra fingers.

[THIS IMAGE]
Finish: matte black, worn on the middle finger. Scene: at night, a woman's hand reaching to switch off a small bedside lamp with a cream fabric shade, on a light oak nightstand with a closed book. Only the hand, wrist and nightstand are visible. Framing: close-up, the ring centered in the frame, the lamp glow just above it. Light: the warm amber glow of the lamp is the only light source, soft falloff into a dark warm room. Aspect ratio 4:3, horizontal.
```

### IMG-15 — Depoimento 3, Atividade

- **Arquivo:** `assets/img/depo-atividade.webp`
- **alt PT:** "Mãos com anel AnelX prata amarrando o cadarço de um tênis."
- **alt EN:** "Hands wearing a silver AnelX ring tying a running shoe."

```
[PROMPT BASE]
Real editorial photograph for a premium wellness brand. Product: a minimalist smart ring — one seamless, perfectly round band, about 7.5 mm wide and 2.5 mm thick, with a softly domed comfort-fit outer surface and gently rounded edges; no flat top, no facets, no gemstones, no engravings, no logos, no text. The inner surface is polished titanium with three small rounded-rectangle dark sensor windows; when the inside is visible, a faint green and red glow shows inside the windows. The outer finish is exactly one of two: brushed silver titanium or matte black — use only the finish named in this prompt. The ring has the same size and proportions in every image and sits snugly on the finger. Look: natural warm light, soft film grain, true-to-life skin with visible pores and fine lines, calm and quiet mood, generous negative space, shallow depth of field. Color world: warm cream, sand beige and deep charcoal, with royal blue used only as a small accent in clothing or sky. Avoid: any logo, brand name, letters or watermark; extra rings or other jewelry on the same hand; plastic or CGI look; cartoon style; oversaturated colors; harsh HDR; distorted, fused or extra fingers.

[THIS IMAGE]
Finish: brushed silver titanium, worn on the index finger. Scene: two hands tying the laces of a plain off-white running shoe with no logo, the foot resting on a pale wooden floor, early morning before a run. A sliver of royal blue running shorts at the top edge. Framing: close-up from slightly above, the ring and laces centered in the frame. Light: warm soft morning light from a doorway on the right. Aspect ratio 4:3, horizontal.
```

### IMG-16 — Footer, faixa escura

- **Seção:** 10. Footer, fundo carvão. Faixa no topo do footer, na largura do container; o título da newsletter ("Receba novidades") fica por cima, à esquerda.
- **Encaixe:** 60% da esquerda em carvão liso pro texto; anel no terço direito. Bordas terminam em carvão `#191714` pra fundir com o footer.
- **Arquivo:** `assets/img/footer.webp`
- **alt PT:** "Anel AnelX preto sobre pedra escura, com luz quente na borda."
- **alt EN:** "Black AnelX ring on dark stone, with warm light along its edge."

```
[PROMPT BASE]
Real editorial photograph for a premium wellness brand. Product: a minimalist smart ring — one seamless, perfectly round band, about 7.5 mm wide and 2.5 mm thick, with a softly domed comfort-fit outer surface and gently rounded edges; no flat top, no facets, no gemstones, no engravings, no logos, no text. The inner surface is polished titanium with three small rounded-rectangle dark sensor windows; when the inside is visible, a faint green and red glow shows inside the windows. The outer finish is exactly one of two: brushed silver titanium or matte black — use only the finish named in this prompt. The ring has the same size and proportions in every image and sits snugly on the finger. Look: natural warm light, soft film grain, true-to-life skin with visible pores and fine lines, calm and quiet mood, generous negative space, shallow depth of field. Color world: warm cream, sand beige and deep charcoal, with royal blue used only as a small accent in clothing or sky. Avoid: any logo, brand name, letters or watermark; extra rings or other jewelry on the same hand; plastic or CGI look; cartoon style; oversaturated colors; harsh HDR; distorted, fused or extra fingers.

[THIS IMAGE]
Finish: matte black. Scene: low-key studio still life, a single ring lying flat on a slab of dark charcoal slate with a fine natural texture. A thin warm rim light traces the ring's outer edge; a faint green glow escapes from the sensor windows onto the stone. Framing: the ring sits small in the right third of the frame; the left 60% is empty, smooth deep charcoal. All image edges fade into flat charcoal (#191714). Light: one warm soft light from behind and to the right, deep shadows everywhere else. Aspect ratio 21:9, wide panoramic.
```

---

## 5. O que NÃO gerar com IA

- **Telas do app (seção 7):** gerador de imagem erra texto e números. Construir as telas em HTML/CSS (ou exportar de um mockup) com dados de exemplo.
- **Rostos nos depoimentos (seção 8):** rosto gerado ao lado de depoimento passa a ideia de cliente real que não existe. As fotos dos cards mostram só mão e anel (IMG-13 a 15). Citação e nome têm que ser de cliente real.
- **Logos e manchetes de imprensa (seção 9):** só cobertura real do AnelX. Sem logo de veículo de imprensa inventado ou copiado.
- **Logo/wordmark do AnelX:** pendência de design aberta. Melhor desenhar em vetor (SVG) do que gerar.

---

## 6. Checklist de aprovação (cada imagem)

- [ ] Anel com a mesma forma da IMG-01: aro liso, sem topo achatado, sem facetas.
- [ ] Só prata escovado ou preto fosco.
- [ ] Nenhum texto, logo ou marca d'água.
- [ ] Mãos com 5 dedos, sem deformação.
- [ ] Área livre pro texto onde o layout pede (topo no hero, canto inferior esquerdo no card de mídia, terço de baixo nos cards).
- [ ] Bordas fundem com o fundo da seção (creme ou carvão).
- [ ] Luz quente; azul só como acento.
- [ ] Exportado em WebP (og-image em JPG) no tamanho da tabela da §3.
