# Estrutura

Como a página está montada e onde mexer em cada coisa. As decisões de design (cores, fontes, tom) estão em [`specs/design.md`](../specs/design.md), que é a fonte da verdade. Este documento fala de código.

## Seções da página

A ordem segue o `specs/design.md` §4. O número na primeira coluna é o mesmo dos comentários no HTML e no CSS.

| # | Seção | Âncora | Classe principal | Observação |
|---|---|---|---|---|
| 1 | Barra de aviso | `#aviso` | `.aviso` | Fecha e lembra a escolha (`localStorage: anelx-aviso`) |
| 2 | Nav fixa | `#nav` | `.nav` | Fica sólida ao rolar. Menu mobile abaixo de 1024px |
| 3 | Hero | `#topo` | `.hero` | Painel pêssego. A foto sobe por baixo do texto (`--sobe`) |
| 4 | Manifesto | `#manifesto` | `.manifesto` | Frase grande + faixa larga |
| 5 | Benefícios | `#beneficios` | `.carrossel` | Carrossel nativo com scroll-snap, setas e barra de progresso. O botão "+" mostra o detalhe |
| 6 | Prova numérica | — | `.prova` | "100 mil batidas por dia" + nota de rodapé |
| 7 | App | `#app` | `.leque` | 5 telas do app feitas em HTML/CSS (não são imagens) |
| 7b | Sensores | `#app-sensores` | `.sensores` | Foto + ficha técnica |
| 8 | Depoimentos | `#depoimentos` | `.depo-lista` | Carrossel no mobile e grade de 3 a partir de 1200px |
| 9 | Ciência | `#ciencia` | `.ciencia` | Seção escura. O conteúdo fica na própria página, sem links para fora |
| 10 | Rodapé | `#empresas` (bloco) | `.rodape` | Newsletter, colunas de links e aviso legal |

**Regra:** todo link é uma âncora interna (`href="#…"`). O único `href="#"` é o do carrinho, que fica oculto (`hidden`) até existir loja.

## CSS — `css/styles.css`

Um arquivo só, escrito **mobile primeiro**, e organizado nesta ordem:

1. `@font-face`: Fraunces e Geist, mais as fontes de reserva medidas (`size-adjust`), para o texto não mudar de linha quando a fonte real carrega.
2. **Tokens** em `:root`: cores com nomes do design (`--creme`, `--carvao`, `--azul`…), escala tipográfica fluida (`--fs-*`), `--gutter`, `--secao-y`, `--raio` e `--nav-h`.
3. Base, layout (`.container`, `.secao`), tipografia (`.display`, `.h1`, `.h2`, `.eyebrow`) e componentes (`.btn`, `.tag`).
4. Uma seção de CSS por seção da página, numeradas de 1 a 10.
5. **Movimento**, no fim do arquivo: regras que só valem com a classe `.anim` (ver [animacoes.md](animacoes.md)).

**Quebras de layout:** `640px` · `768px` (só no hero) · `1024px` (nav desktop e leque completo) · `1200px` (depoimentos em grade).

Convenções:
- Nomes em português, no estilo BEM: `bloco__elemento--variacao`.
- Cor sempre por token. Nada de hex solto, exceto os tons internos das telas do app.
- `[hidden] { display: none !important }`: se um componente define `display`, o atributo `hidden` deixaria de funcionar sem essa regra.

## JavaScript

Os quatro arquivos são carregados com `defer`, nesta ordem (a ordem importa):

| Arquivo | Papel | Depende de |
|---|---|---|
| `js/i18n.js` | Guarda o PT original, aplica o EN e dispara o evento `anelx:idioma` | — |
| `js/main.js` | Barra de aviso, nav, menu mobile, carrosséis, cards "+" e newsletter | `window.anelxI18n` (textos dinâmicos) |
| `js/vendor/gsap.min.js` + `ScrollTrigger.min.js` | Biblioteca de animação (arquivos locais) | — |
| `js/animacoes.js` | Todas as animações | GSAP, ScrollTrigger e `anelx:idioma` |

Há também um pequeno script **inline no `<head>`**, que roda antes da primeira pintura:
- esconde a página se o idioma salvo for EN, para não piscar em PT;
- respeita o aviso fechado;
- põe a classe `.anim` no `<html>` quando o movimento está permitido, e a retira se o GSAP não carregar em 3 s.

### Evento `anelx:idioma`

Disparado pelo `i18n.js` toda vez que o idioma é aplicado (`event.detail` é `'pt'` ou `'en'`). Quem troca texto à mão escuta esse evento:
- o `main.js`, para o rótulo do botão de menu;
- o `animacoes.js`, para o título do hero dividido em palavras, o contador e o recálculo das posições de rolagem.
