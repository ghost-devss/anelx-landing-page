# specs/design.md — AnelX

Fonte da verdade de design. Derivado da referência Oura (`refererencia - site/`): estrutura, paleta, tipografia e tom. Não é clone — é direção de clima.

> Mudança neste arquivo só com meu aval explícito. Ver regra de ouro no `CLAUDE.md`.
> Medidas detalhadas (escala fluida, redlines, limites de texto): `specs/plano-do-site.md`.

---

## 1. Tom e voz

- **Calmo, premium, confiável.** Bem-estar de luxo discreto. Muito respiro, nada gritado.
- **Científico mas acolhedor.** Dados e prova ("X% dos usuários...", precisão validada) ditos com calor humano, não com jargão frio.
- **Centrado na pessoa.** Fala com o corpo e a saúde do usuário: "Entenda seu coração", "Sua saúde, no seu ritmo". Empoderamento, não medo.
- **Frases curtas, afirmativas.** Título faz uma promessa; subtítulo explica em uma linha.
- **Bilíngue:** PT-BR é o principal, EN é paralelo. Mesmo tom nos dois. Sem tradução literal — adaptar.
- **Sem promessa de diagnóstico.** Nada de "detecta arritmia" ou "previne infarto" sem certificação (ANVISA). O footer diz que o AnelX não substitui acompanhamento médico.

## 2. Paleta

Base creme quente + seções carvão quase-preto + UM acento saturado (azul royal). Neutros terrosos no meio.

| Papel | Nome | Hex | Uso |
|---|---|---|---|
| Fundo base | Creme | `#F4EEE4` | Fundo principal, claro e quente |
| Fundo alt | Creme-areia | `#EBE4D8` | Cards, blocos alternados |
| Fundo do hero | Pêssego-hero | `#F2DBC3` | **Só no painel do hero.** É o tom da própria foto do hero |
| Fundo escuro | Carvão | `#191714` | Seções "em destaque" (ciência/notícias, footer) |
| Carvão alt | Grafite | `#242019` | Cards e campos dentro do escuro |
| Texto forte | Tinta | `#1E1B16` | Títulos e corpo sobre creme |
| Texto suave | Tinta-60 | `#5C564C` | Subtítulos, legendas |
| Texto no escuro | Creme-claro | `#F4EEE4` | Texto sobre carvão |
| Texto suave no escuro | Creme-60 | `#A39B8E` | Legendas, títulos de coluna e placeholders sobre carvão |
| **Acento** | **Azul royal** | `#2B4CF0` | CTA primário, links, foco, detalhes |
| Acento hover | Azul fundo | `#2340D4` | Estado hover do acento |
| Pill escuro | Pill-tinta | `#2B2620` | Botões secundários pill sobre creme |
| Linha | Divisa | `#DAD1C2` | Bordas sutis, separadores |
| Linha no escuro | Divisa-escura | `#3A342B` | Bordas e separadores sobre carvão |

Regras:
- Acento é raro e proposital — CTA principal e foco. Não espalhar.
- Nunca azul puro de sistema; usar o `#2B4CF0` definido.
- Contraste mínimo AA. Tinta-60 sobre creme dá 6,30:1 e pode ser usado a partir de 14px.

## 3. Tipografia

Títulos em serifa alto-contraste (ar editorial); corpo em sans geométrica (clareza tech).

- **Títulos — serifa:** `Fraunces` (fallback `Newsreader`, `Georgia`, serif).
  - Peso 300–500. Sentence case (não CAIXA ALTA). Tracking levemente negativo em tamanhos grandes.
  - Tamanho óptico automático: o contraste aumenta sozinho nos tamanhos grandes.
- **Corpo / UI — sans geométrica:** `Geist` (fallback `Satoshi`, `Inter`, system-ui, sans-serif).
  - Corpo peso 400, títulos de UI 500, labels 500.
- **Tags / eyebrows:** sans, 500, CAIXA ALTA, letter-spacing `0.08em`, tamanho pequeno (12–13px).
- **Fontes hospedadas no próprio site** (`assets/fonts/`, subconjunto latin, que cobre os acentos do PT). Sem Google Fonts em produção.

Escala (desktop, fluida no mobile):
- Display: 56–72px / serifa / line-height 1.05
- H1: 40–48px / serifa
- H2: 28–34px / serifa
- H3: 20–22px / sans 500
- Citação: 20–22px / serifa 300 / line-height 1.35
- Corpo: 17–18px / sans 400 / line-height 1.6
- Legenda: 14px / sans / tinta-60

## 4. Estrutura (ordem das seções)

Herdada da referência, adaptada ao AnelX:

1. **Barra de aviso** (topo, fina) — oferta/frete. Fecha-se.
2. **Nav fixa** — logo AnelX, menu (Produto, Sua Saúde, Por que AnelX, Empresas), seletor PT/EN, carrinho. "Empresas" leva ao bloco Empresas do footer até existir contato comercial. O carrinho só aparece quando houver loja.
3. **Hero** — painel arredondado (cantos 20px, recuado 16px das bordas; 8px no mobile) com fundo pêssego-hero. Badge, título display (promessa), subtítulo 1 linha, CTA pill azul. A foto dos anéis (IMG-01/02) entra por baixo do texto e se funde ao painel por degradê.
4. **Manifesto** — frase grande em serifa + subcopy + dois botões pill + faixa larga (IMG-10).
5. **Carrossel de benefícios** — cards com foto humana em close, tag de categoria, texto branco sobre imagem, botão "+". Temas: Coração, Sono, Estresse, Atividade, Recuperação (IMG-03 a 07).
6. **Prova social numérica** — estatística grande em serifa + subcopy + CTA pill + foto da comunidade (IMG-11).
7. **App / produto** — telas do app em leque (UI escura, HTML/CSS) sobre creme + bloco dos sensores (IMG-12).
8. **Depoimentos** — 3 cards creme-areia com foto de mão + anel no topo (IMG-13 a 15), tag, citação, iniciais + nome. Sem rosto.
9. **Ciência / Na mídia** — SEÇÃO ESCURA (carvão). Card em destaque com imagem (IMG-08) + 3 cards. Enquanto não houver imprensa real, a seção se chama "Ciência por trás do AnelX" e traz conteúdo próprio; vira "Na mídia" quando houver cobertura real.
10. **Footer** — escuro: faixa com imagem (IMG-16) e newsletter, colunas de links, selos de pagamento, redes sociais.

## 5. Componentes

- **Botão primário:** pill totalmente arredondado, fundo azul `#2B4CF0`, texto creme, hover `#2340D4`.
- **Botão secundário:** pill, fundo pill-tinta `#2B2620` sobre creme, texto creme. Ou outline fino em creme sobre escuro.
- **Card de benefício:** cantos arredondados grandes (~20px), imagem full-bleed, overlay de gradiente na base pro texto (`rgba(25,23,20,.78)` → `.6` em 32% → transparente em 62%), tag pill no topo, "+" circular.
- **Tag/eyebrow:** pill pequeno, CAIXA ALTA, tracking largo.
- **Seções:** alternam creme / creme-areia; blocos de ênfase em carvão.

## 6. Layout e ritmo

- Container máx ~1200px, centralizado, margens generosas.
- Respiro vertical grande entre seções (96–128px desktop).
- Grid de cards: 3–4 colunas desktop, 1 no mobile, scroll horizontal no carrossel.
- Cantos arredondados consistentes (cards 20px, botões = pill, inputs 8–12px).
- Sombras quase ausentes; profundidade vem de cor de fundo, não de sombra.

## 7. Fotografia / imagem

- Humana, pele real, close de mãos/rosto/pescoço, luz natural quente.
- Produto (anel) fotografado limpo sobre creme, com faixa/onda fluida.
- Nada de stock frio ou gráfico 3D exagerado. Calor e realismo.

### O anel nas imagens

- **Forma:** aro liso e contínuo, ~7,5 mm de largura, perfil levemente abaulado, bordas arredondadas. Sem topo achatado, sem facetas, sem pedras, sem gravação, sem logo.
- **Interior:** titânio polido com 3 janelas de sensor escuras (cantos arredondados); brilho verde e vermelho suave quando o interior aparece.
- **Acabamentos:** titânio escovado prata (principal) e preto fosco (secundário). Nenhum outro no site.
- Mesmo tamanho e proporção em todas as imagens. Discreto no dedo, nunca gritante.

### Regras de fotografia

- Luz dourada de fim de tarde ou manhã suave. Quente sempre.
- Azul royal só como acento (uma camiseta, um pedaço de céu).
- Imagens com fundo próprio (hero pêssego, sensores, mídia, footer) entram em painel ou card com cantos de 20px, em vez de tentar fundir sem borda com a página.
- Cada imagem reserva área livre pro texto onde o layout pede.
- Não gerar com IA: telas do app (HTML/CSS), fotos de depoimento (só clientes reais ou iniciais), logos de imprensa.
- Prompts e checklist de aprovação: `imagens.md`.

## 8. Acessibilidade

- Contraste AA mínimo.
- Foco visível: **azul acento nas seções claras**, **creme nas seções escuras** (azul sobre carvão dá só 2,89:1).
- Alvos de toque ≥ 44px. Navegação por teclado completa.
- Imagens com `alt` nos dois idiomas.

---

## Decisões de implementação (antes pendências)

- **Logo:** provisório — "AnelX" em Fraunces 500, como texto. O logo final entra em SVG quando existir.
- **Fontes:** auto-hospedadas (desempenho + LGPD).
- **Seletor PT/EN:** troca no navegador. PT escrito no HTML; EN em `js/i18n.js`; escolha salva e `?lang=en` na URL.

## Pendências de design

- Logo/wordmark definitivo do AnelX (a Oura usa ŌURA com mácron — não copiar).
- Ícone de favicon e símbolo da marca.
