# Conteúdo e idiomas

## Editar um texto

O **português** está escrito direto no `index.html`. O **inglês** está no objeto `EN` em `js/i18n.js`, indexado pela mesma chave.

```html
<h2 class="display" data-i18n="manifesto.titulo">Sua saúde, no seu ritmo.</h2>
```

```js
// js/i18n.js
'manifesto.titulo': 'Your health, at your own pace.',
```

- **Mudar o PT:** edite o HTML.
- **Mudar o EN:** edite a chave no `i18n.js`.
- **Texto novo:** crie um `data-i18n="secao.chave"` no HTML e a mesma chave no `EN`.
- **Atributos** (`alt`, `aria-label`, `placeholder`, `content`) usam `data-i18n-attr`. Vários pares são separados por `;`:

  ```html
  <img alt="Dois anéis AnelX…" data-i18n-attr="alt:img.hero">
  ```

- **Textos criados pelo JavaScript** (ex.: mensagens da newsletter) ficam no objeto `JS` do `i18n.js`, com `pt` e `en`.

O `data-i18n` troca o **`innerHTML`** do elemento. Pode ter marcação simples dentro (ex.: `<sup>1</sup>`), mas qualquer coisa que outro script tenha colocado ali é apagada a cada troca de idioma.

### Conferir traduções faltando

Com a página aberta, rode no console do navegador:

```js
anelxI18n.faltando()   // → [] quando todas as chaves têm inglês
```

### Tom de voz

Siga o `specs/design.md` §1:
- calmo e afirmativo, com frases curtas;
- o EN é **adaptado**, não traduzido ao pé da letra;
- **nada de promessa de diagnóstico** ("detecta arritmia", "previne infarto"). O anel acompanha e mostra; quem diagnostica é o médico.

## Trocar uma imagem

Cada foto tem duas larguras em WebP, em `assets/img/`, servidas com `srcset`/`sizes`:

```html
<img src="assets/img/card-sono-640.webp"
     srcset="assets/img/card-sono-640.webp 640w, assets/img/card-sono-928.webp 928w"
     sizes="(min-width: 640px) 380px, 80vw" width="928" height="1152" …>
```

1. Gere as duas larguras com os **mesmos nomes e proporções** (larguras e `sizes` de cada imagem: [`specs/plano-do-site.md`](../specs/plano-do-site.md) §3.2). Mantenha `width`/`height` coerentes com a proporção, para a página não pular ao carregar.
2. Guarde o original em alta em `meus produtos/`.
3. Atualize o `alt` em PT (HTML) e em EN (`img.*` no `i18n.js`) descrevendo **o que a foto mostra de fato**.
4. As regras de fotografia (luz quente, anel liso sem logo, azul só como acento) estão no `specs/design.md` §7. Os prompts usados estão em [`imagens.md`](../imagens.md).

As telas do app (seção 7) **não são imagens**: são HTML/CSS dentro de `.leque`. Os números delas são texto e podem ser editados direto.

## Pendências (`data-pendente`)

Todo conteúdo provisório leva `data-pendente="o que falta"` no próprio elemento. Para listar:

```bash
grep -n -o 'data-pendente="[^"]*"' index.html
```

A lista atual está em [publicacao.md](publicacao.md#pendências-de-conteúdo).

### Depoimentos

Os três depoimentos atuais são **ilustrativos** e há uma nota visível dizendo isso (`.depo-nota`). Publicar depoimento inventado como se fosse real é publicidade enganosa (CDC art. 37 e Código do CONAR). Ao trocar pelos reais:

1. use citação, nome e cidade **autorizados por escrito** pelo cliente, com até 160 caracteres;
2. troque as iniciais em `.autor__iniciais`;
3. atualize as chaves `depo.d1`–`depo.d3` no `i18n.js`;
4. **remova a nota** `.depo-nota` do HTML e a chave `depo.nota`.
