# AnelX — landing page

Landing page do **AnelX**, um anel inteligente que acompanha os batimentos cardíacos de dia e de noite.
Página única, bilíngue (português e inglês), feita só com **HTML, CSS e JavaScript puro**: não tem framework, etapa de build nem `npm install`.

> *EN — Single-page, bilingual (PT-BR / EN) landing page for AnelX, a heart-rate smart ring. Plain HTML, CSS and JavaScript: no framework, no build step. Docs are in Portuguese; the site itself switches languages in the browser.*

---

## Destaques

- **Uma página só.** Todos os links levam a seções da própria página.
- **Bilíngue.** O português está escrito no HTML (é o que os buscadores leem). O inglês é aplicado no navegador pelo botão PT/EN, a escolha fica salva e também funciona `?lang=en` na URL.
- **Animações com GSAP + ScrollTrigger:**
  - entrada cinematográfica no hero;
  - telas do app que se abrem em leque;
  - contador de "100 mil";
  - fundo que escurece ao chegar à seção Ciência.
  
  Tudo respeita "reduzir movimento" do sistema.
- **Acessível:**
  - contraste AA;
  - foco visível;
  - navegação completa por teclado;
  - alvos de toque de pelo menos 44px;
  - textos alternativos nos dois idiomas.
- **Leve.** Imagens em WebP com `srcset`, fontes auto-hospedadas (sem Google Fonts) e scripts com `defer`.

## Como rodar

Não há nada para instalar. Basta servir a pasta com qualquer servidor estático e abrir `http://localhost:…/`:

| Opção | Comando |
|---|---|
| VS Code | extensão **Live Server** → "Open with Live Server" |
| Python | `python -m http.server 8000` |
| PHP | `php -S 127.0.0.1:8000` |
| Node | `npx serve .` |

> Abrir o `index.html` direto do disco (`file://`) faz o navegador bloquear as fontes, e a página aparece em Georgia/Arial. Use um servidor.

## Estrutura

```
index.html            a página inteira (conteúdo em PT)
css/styles.css        estilos: tokens, seções na ordem da página, bloco de movimento no fim
js/i18n.js            textos em inglês + troca de idioma
js/main.js            interações: aviso, nav, menu mobile, carrosséis, cards "+", newsletter
js/animacoes.js       todas as animações (GSAP + ScrollTrigger)
js/vendor/            GSAP 3.13 e ScrollTrigger (arquivos locais, sem CDN)
assets/fonts/         Fraunces e Geist (subconjunto latin) + licenças OFL
assets/img/           imagens otimizadas (WebP, 2 larguras cada)
assets/og/            imagem de compartilhamento (og:image)
meus produtos/        imagens originais em alta, antes da otimização
specs/                design.md (fonte da verdade de design) e plano-do-site.md
docs/                 documentação técnica
imagens.md            prompts e checklist das imagens
memoria.md            diário de decisões e aprendizados
```

## Documentação

| Documento | Para quê |
|---|---|
| [docs/estrutura.md](docs/estrutura.md) | Seções da página, organização do CSS e do JS |
| [docs/conteudo-e-idiomas.md](docs/conteudo-e-idiomas.md) | Como editar textos e traduções, trocar imagens e achar pendências |
| [docs/animacoes.md](docs/animacoes.md) | Cada animação, como acrescentar uma nova e as armadilhas conhecidas |
| [docs/publicacao.md](docs/publicacao.md) | Publicar no GitHub Pages e checklist antes do lançamento |
| [specs/design.md](specs/design.md) | Paleta, tipografia, tom de voz e estrutura (fonte da verdade de design) |

## Status

Versão de lançamento, com alguns **conteúdos provisórios**. Todos estão marcados no HTML com `data-pendente` e listados em [docs/publicacao.md](docs/publicacao.md#pendências-de-conteúdo). Os principais:

- depoimentos ilustrativos, que serão trocados por relatos reais de clientes;
- newsletter ainda sem serviço conectado;
- loja e contato comercial ainda não existem.

## Créditos e licenças

- **Fraunces** (títulos) e **Geist** (texto): SIL Open Font License 1.1. As licenças estão em [`assets/fonts/`](assets/fonts/).
- **GSAP** e **ScrollTrigger**: GreenSock, [licença padrão "no charge"](https://gsap.com/standard-license).
- **Imagens:** criadas para o AnelX a partir dos prompts em [`imagens.md`](imagens.md).
- **Referência:** a estrutura e o clima foram inspirados em sites de wearables premium. O AnelX não tem relação com nenhuma outra marca, e textos, nomes, fotos e layout são próprios.
- **Código:** ainda sem licença de uso definida. Até que exista uma, valem todos os direitos reservados.

> O AnelX não substitui acompanhamento médico.
