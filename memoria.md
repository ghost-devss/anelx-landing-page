# memoria.md — AnelX

Diário de decisões e aprendizados. Entrada nova no topo. Decisão de design vira regra só quando entra no `specs/design.md`.

---

## 2026-11-24 — Plano do site e revisão das imagens

- Criado `specs/plano-do-site.md`: revisão das 16 imagens, tamanhos, tipografia, redlines, comportamento dos textos (medido no Chrome com as fontes reais), rascunho PT/EN e ordem de execução.
- **Imagens de `meus produtos/` não são WebP:** são JPEG ou PNG com extensão trocada (`hero-desktop.webp.png` tem extensão dupla). Somam ~11,9 MB. A conversão é feita pelo Chrome sem janela (sem instalar nada); teste: 729 KB → ~97 KB.
- **Fundo do hero é pêssego `#F3DDC5`, não creme.** Sensores `#F5E3CE`, mídia `#0C0D0B`, footer `#1A1A1A`. Não fundem com a página: usar cantos de 20px ou painel (decisão D1 no plano).
- **Azul de foco sobre carvão dá 2,89:1** (abaixo do mínimo de 3:1). Spec §8 em conflito (D2).
- **Spec se contradiz:** §2 diz texto suave só ≥ 16px; §3 põe a legenda em 14px tinta-60. Contraste real 6,30:1, então passa (D3).
- Fontes: Fraunces (latin, opsz+wght) 66 KB + Geist (latin) 29 KB. O subconjunto latin cobre todos os acentos do PT.
- **Pendente de ok:** decisões D1–D11 do plano. Nada aplicado no `specs/design.md`.

## 2026-11-24 — Paleta confirmada

- Dúvida: eu esperava um site mais azul (as fotos de `meus produtos/` são azuladas), mas a referência é creme/nude.
- Decisão: **manter creme + azul só como acento**, como no `specs/design.md` §2. Os 16 prompts seguem valendo.
- Opções descartadas: meio-termo (azul-noite no lugar do carvão) e azul dominante.

## 2026-11-24 — Imagens em todas as seções

- Pedido: imagem em todas as seções. Adicionados IMG-10 a IMG-16 no `imagens.md` (manifesto, prova numérica, sensores do app, 3 depoimentos, footer). Total: 16.
- Barra de aviso e nav ficam sem imagem (faixas finas). Cards menores de imprensa ficam só texto.
- Depoimentos: foto de mão + anel no topo do card, sem rosto. Citação e nome só de cliente real.
- Página com botão de copiar: https://claude.ai/artifact/2dHFULEySKhyQRyQ16GZfB
- **Pendente de ok:** o `specs/design.md` §4 ainda descreve manifesto, prova numérica, app, depoimentos e footer sem essas imagens.

## 2026-11-24 — Prompts de imagem

- Criado `imagens.md`: 9 prompts (hero desktop/mobile, 5 cards do carrossel, card de mídia, og:image), todos com o mesmo prompt base.
- **Acabamento do anel nas imagens:** titânio escovado prata (principal) + preto fosco (secundário). Nenhum outro.
- **Prompts neutros**, em inglês, proporção escrita no texto. Servem pra qualquer gerador.
- Luz: dourada/quente; azul só como acento (roupa, céu), pra casar com o azul royal do CTA.
- Anel descrito como aro liso genérico, sem topo achatado nem logo, pra não copiar a Oura. Gerar IMG-01 primeiro e usar como referência das outras.
- Não gerar com IA: telas do app (fazer em HTML/CSS), fotos de depoimento (só clientes reais ou iniciais), logos de imprensa.
- `meus produtos/compare_rings_coop.png` e `or4-ceramic-midnight-angle-view.png` são AVIF com extensão errada; não foram analisados.
- Acabamento do anel e regras de fotografia levados pro `specs/design.md` §7 com meu ok.

## 2026-11-24 — Escopo e stack

- Escopo: **landing page única** (não site com várias páginas).
- Stack: **HTML + CSS + JS puro**, sem framework nem build, pra começar.
- Gravado no `CLAUDE.md`. `specs/design.md` sem mudança: a estrutura de seções já era de uma página só.

## 2026-11-24 — Montagem do cérebro do projeto

- Produto definido: **AnelX**, anel inteligente que mede batimentos cardíacos.
- Criados os três arquivos-cérebro: `CLAUDE.md`, `specs/design.md`, `memoria.md`.
- Referência de clima/estrutura: site da **Oura** (`refererencia - site/` — print + link). Direção de atmosfera e estrutura, **não** clone.
- Decisões travadas (respondidas por mim):
  - **Idioma:** bilíngue PT-BR (principal) + EN.
  - **Acento:** azul royal `#2B4CF0`, como a referência.
  - **Tipografia:** serifa alto-contraste (Fraunces) nos títulos + sans geométrica (Geist) no corpo.
- Regra de ouro gravada no `CLAUDE.md`: pedido que contradiz o `specs/design.md` → parar e avisar antes.

### Aprendizados da referência (Oura)
- Paleta = creme quente + seções carvão quase-preto + 1 acento saturado. Acento usado com parcimônia (só CTA/foco).
- Profundidade vem da cor de fundo, quase sem sombra.
- Títulos em serifa sentence-case dão o ar editorial/premium; sans leve no corpo segura a clareza.
- Fotografia humana em close (pele, mãos, rosto) é o que dá calor — não stock frio.

### Em aberto (ainda não decidido)
- Wordmark/logo do AnelX.
- Auto-hospedar fontes vs Google Fonts.
- Mecânica do seletor PT/EN (`/en` vs toggle cliente).
