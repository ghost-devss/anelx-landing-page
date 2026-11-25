# specs/design.md — AnelX

Fonte da verdade de design. Derivado da referência Oura (`refererencia - site/`): estrutura, paleta, tipografia e tom. Não é clone — é direção de clima.

> Mudança neste arquivo só com meu aval explícito. Ver regra de ouro no `CLAUDE.md`.

---

## 1. Tom e voz

- **Calmo, premium, confiável.** Bem-estar de luxo discreto. Muito respiro, nada gritado.
- **Científico mas acolhedor.** Dados e prova ("X% dos usuários...", precisão validada) ditos com calor humano, não com jargão frio.
- **Centrado na pessoa.** Fala com o corpo e a saúde do usuário: "Entenda seu coração", "Sua saúde, no seu ritmo". Empoderamento, não medo.
- **Frases curtas, afirmativas.** Título faz uma promessa; subtítulo explica em uma linha.
- **Bilíngue:** PT-BR é o principal, EN é paralelo. Mesmo tom nos dois. Sem tradução literal — adaptar.

## 2. Paleta

Base creme quente + seções carvão quase-preto + UM acento saturado (azul royal). Neutros terrosos no meio.

| Papel | Nome | Hex | Uso |
|---|---|---|---|
| Fundo base | Creme | `#F4EEE4` | Fundo principal, claro e quente |
| Fundo alt | Creme-areia | `#EBE4D8` | Cards, blocos alternados |
| Fundo escuro | Carvão | `#191714` | Seções "em destaque" (notícias, footer) |
| Carvão alt | Grafite | `#242019` | Cards dentro do escuro |
| Texto forte | Tinta | `#1E1B16` | Títulos e corpo sobre creme |
| Texto suave | Tinta-60 | `#5C564C` | Subtítulos, legendas |
| Texto no escuro | Creme-claro | `#F4EEE4` | Texto sobre carvão |
| **Acento** | **Azul royal** | `#2B4CF0` | CTA primário, links, foco, detalhes |
| Acento hover | Azul fundo | `#2340D4` | Estado hover do acento |
| Pill escuro | Pill-tinta | `#2B2620` | Botões secundários pill sobre creme |
| Linha | Divisa | `#DAD1C2` | Bordas sutis, separadores |

Regras:
- Acento é raro e proposital — CTA principal e foco. Não espalhar.
- Nunca azul puro de sistema; usar o `#2B4CF0` definido.
- Contraste mínimo AA: texto suave só em tamanhos ≥ 16px.

## 3. Tipografia

Títulos em serifa alto-contraste (ar editorial); corpo em sans geométrica (clareza tech).

- **Títulos — serifa:** `Fraunces` (Google Fonts), fallback `Newsreader`, `Georgia`, serif.
  - Peso 300–500. Sentence case (não CAIXA ALTA). Tracking levemente negativo em tamanhos grandes.
- **Corpo / UI — sans geométrica:** `Geist` (fallback `Satoshi`, `Inter`, system-ui, sans-serif).
  - Corpo peso 400, títulos de UI 500, labels 500.
- **Tags / eyebrows:** sans, 500, CAIXA ALTA, letter-spacing `0.08em`, tamanho pequeno (12–13px).

Escala (desktop, fluida no mobile):
- Display: 56–72px / serifa / line-height 1.05
- H1: 40–48px / serifa
- H2: 28–34px / serifa
- H3: 20–22px / sans 500
- Corpo: 17–18px / sans 400 / line-height 1.6
- Legenda: 14px / sans / tinta-60

## 4. Estrutura (ordem das seções)

Herdada da referência, adaptada ao AnelX:

1. **Barra de aviso** (topo, fina) — oferta/frete. Fecha-se.
2. **Nav fixa** — logo AnelX, menu (Produto, Sua Saúde, Por que AnelX, Empresas), seletor PT/EN, carrinho.
3. **Hero** — badge, título display (promessa), subtítulo 1 linha, CTA pill azul, imagem do anel sobre onda/faixa creme fluida.
4. **Manifesto** — frase grande em serifa + subcopy + dois botões pill.
5. **Carrossel de benefícios** — cards com foto humana em close, tag de categoria, texto branco sobre imagem, botão "+". Temas: Coração, Sono, Estresse, etc.
6. **Prova social numérica** — estatística grande em serifa + subcopy + CTA pill.
7. **App / produto** — telas do app em leque (UI escura) sobre creme.
8. **Depoimentos** — 3 cards creme-areia, tag, citação, avatar + nome.
9. **Na mídia** — SEÇÃO ESCURA (carvão). Card em destaque com imagem + 3 cards de imprensa.
10. **Footer** — escuro: newsletter, colunas de links, selos de pagamento, redes sociais.

## 5. Componentes

- **Botão primário:** pill totalmente arredondado, fundo azul `#2B4CF0`, texto creme, hover `#2340D4`.
- **Botão secundário:** pill, fundo pill-tinta `#2B2620` sobre creme, texto creme. Ou outline fino em creme sobre escuro.
- **Card de benefício:** cantos arredondados grandes (~20px), imagem full-bleed, overlay de gradiente sutil na base pro texto, tag pill no topo, "+" circular.
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
- Fundos de produto terminam em creme `#F4EEE4` (seções claras) ou carvão `#191714` (seção escura), sem borda visível.
- Cada imagem reserva área livre pro texto onde o layout pede.
- Não gerar com IA: telas do app (HTML/CSS), fotos de depoimento (só clientes reais ou iniciais), logos de imprensa.
- Prompts e checklist de aprovação: `imagens.md`.

## 8. Acessibilidade

- Contraste AA mínimo; foco visível em azul acento.
- Alvos de toque ≥ 44px. Navegação por teclado completa.
- Imagens com `alt` nos dois idiomas.

---

## Pendências de design (decidir quando chegar a hora)

- Logo/wordmark do AnelX (a Oura usa ŌURA com mácron — não copiar).
- Ícone de favicon e símbolo da marca.
- Fontes auto-hospedadas vs Google Fonts (perf).
- Mecânica exata do seletor PT/EN (rota `/en` vs toggle no cliente).
