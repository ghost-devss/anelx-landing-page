# Animações

Tudo está em `js/animacoes.js`, com **GSAP 3.13 + ScrollTrigger** servidos de `js/vendor/`. Não há npm nem CDN, pelo mesmo motivo das fontes: desempenho e LGPD. O tom segue o `specs/design.md`: calmo e premium. Movimentos são suaves e sem quique.

## Princípios

- **Reduzir movimento é respeitado.** Todo o código roda dentro de `gsap.matchMedia('(prefers-reduced-motion: no-preference)')`. Com a opção ligada no sistema, nada é criado. Se ela mudar com a página aberta, tudo é desfeito: o próprio GSAP reverte os tweens, e o array `limpar` reverte o resto (textos trocados à mão e ouvintes de eventos).
- **Classe `.anim` no `<html>`.** Ela é posta pelo script inline do `<head>` e esconde só o estado inicial do hero, para não piscar antes do JS. Se o GSAP não chegar em 3 s, ou se der erro, a classe sai e a página aparece normal, sem animação.
- **O conteúdo não espera a animação.** O texto do hero começa na hora. A foto espera decodificar, mas no máximo 0,8 s.
- **Só `transform`, `opacity` e `clip-path`**, para manter a fluidez. Nada de animar `width`, `top` ou `filter`.

## O que anima

| Onde | Função | O que acontece |
|---|---|---|
| Hero | `hero()` | O painel pêssego se abre (`clip-path`), o título surge palavra a palavra de dentro de uma máscara, tag/subtítulo/CTA entram em sequência e a foto se revela por uma janela que cresce a partir da base. Depois a foto "respira" (escala 1 → 1,04 em 10 s) e segue o mouse em poucos px (só desktop). Na rolagem, o texto sobe e some, a foto fica para trás e o painel recua |
| Geral | `revelar()` → `grupo()` | Textos, cards e fotos sobem com fade ao entrar na tela, uma vez só, em sequência dentro de cada grupo |
| Manifesto | `manifesto()` | A faixa nasce estreita e se abre até a largura total com a rolagem, com zoom lento por dentro |
| Fotos | `parallax()` | Parallax leve dentro das molduras (prova, sensores, destaque e rodapé) |
| Prova | `contador()` | "100 mil" / "100,000" conta a partir de 0. Enquanto conta, o título leva `aria-label` com o número real |
| App | `leque()` | As 5 telas começam empilhadas e se abrem em leque com a rolagem. Depois os gráficos se desenham, os scores se preenchem e as barras crescem |
| Ciência | `fundoEscuro()` | O fundo da página passa de creme para carvão. A seção de depoimentos mantém fundo creme próprio, que se dissolve só abaixo da nota |
| Âncoras | `ancoraSuave()` | Rolagem suave dos links internos, feita em JS (ver armadilhas) |

## Acrescentar uma revelação

Em `revelar()`, chame `grupo(seletor, gatilho, de, extra)`:

```js
grupo('.minha-secao .card', '.minha-secao', { y: 48 }, { stagger: 0.12 });
```

- `seletor`: os elementos que vão aparecer, em sequência.
- `gatilho`: o elemento que dispara a animação, quando o topo dele chega a 85% da tela.
- `de`: o estado inicial, além de `opacity: 0`.
- `extra`: ajustes de duração, `stagger` etc.

**Não anime com `y` um elemento que já usa `transform` no CSS.** Por exemplo, `.rodape__news` usa `translateY(-50%)` no desktop. Nesses casos, anime os filhos.

## Armadilhas conhecidas

1. **`scroll-behavior: smooth` quebra o ScrollTrigger.** Ao recalcular, ele pula a rolagem para 0 para medir. Com o smooth ligado, esse pulo vira animação e todas as posições saem deslocadas (aparece ao recarregar no meio da página). Por isso `html.anim { scroll-behavior: auto }`, e a rolagem suave dos âncoras é feita em JS.
2. **`clip-path` só com `fromTo` e as duas strings no mesmo formato.** O navegador encurta `inset(34% 20% 0% 20%)` para 3 valores; num `.to()`, o GSAP lê esse valor encurtado e interpola os números fora de ordem.
3. **O i18n reescreve o `innerHTML`.** O título do hero, dividido em `<span class="palavra">`, é redividido a cada `anelx:idioma`. O contador guarda o texto real antes de zerar.
4. **Constantes usadas dentro do `mm.add(...)` devem ser declaradas antes dele.** O callback roda na hora, e uma constante declarada depois causa erro de TDZ.
5. **Contraste durante transições de cor.** Texto solto sobre um fundo que muda de cor fica cinza sobre cinza no meio do caminho. Dê a ele um fundo próprio.
6. **Layout mudou? Recalcule.** `ScrollTrigger.refresh()` já é chamado na troca de idioma, quando as fontes carregam, quando o aviso fecha e no `load`. Se surgir outro conteúdo que muda de altura, chame `recalcular()`.

## Testar

- Teste num servidor (ver README), não em `file://`.
- **Reduzir movimento:** DevTools → Rendering → *Emulate CSS prefers-reduced-motion: reduce*. A página deve aparecer inteira e parada.
- **Recarregar no meio da página:** as animações devem disparar no lugar certo.
- **Trocar PT/EN** antes e depois de passar pelo hero e pelo contador.
