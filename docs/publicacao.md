# Publicação

O site é só um conjunto de arquivos estáticos, então qualquer hospedagem estática serve. O caminho mais simples é o **GitHub Pages**, direto deste repositório.

## GitHub Pages

1. No GitHub: **Settings → Pages**.
2. Em *Build and deployment*, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e salve.
3. Em 1 ou 2 minutos o site estará em `https://<usuario>.github.io/anelx-landing-page/`.
4. Cada push na `main` publica de novo, automaticamente.

O GitHub Pages só funciona em repositório **público** no plano gratuito.

Tudo usa caminhos relativos (`css/…`, `assets/…`), então o site funciona tanto em subpasta (`/anelx-landing-page/`) quanto num domínio próprio.

### Domínio próprio (opcional)

Em **Settings → Pages → Custom domain**, informe o domínio e crie no seu provedor de DNS o registro indicado pelo GitHub. Marque **Enforce HTTPS**.

## Antes de divulgar

- [ ] **`og:image` com URL absoluta.** As redes sociais não aceitam caminho relativo. Troque `assets/og/og-anelx.jpg` por `https://<seu-dominio>/assets/og/og-anelx.jpg` no `<head>` do `index.html`.
- [ ] Testar o link de compartilhamento num depurador de cartões (por exemplo, o *Sharing Debugger* do Facebook).
- [ ] Conferir as pendências de conteúdo abaixo.
- [ ] Rodar `anelxI18n.faltando()` no console. Deve devolver `[]`.

## Pendências de conteúdo

Todas estão marcadas com `data-pendente` no `index.html`:

| Onde | O que falta |
|---|---|
| `<head>` | URL absoluta da `og:image` |
| Barra de aviso | Oferta real (frete ou desconto); hoje anuncia o lançamento |
| Nav | Link da loja; o carrinho fica oculto até lá |
| Hero | CTA para a loja, quando houver; hoje leva à seção do app |
| Prova numérica | Estatística real de usuários, se houver; hoje é um fato fisiológico, com nota |
| Depoimentos | Trocar os 3 ilustrativos por relatos reais autorizados e remover a nota (ver [conteudo-e-idiomas.md](conteudo-e-idiomas.md#depoimentos)) |
| Ciência | Validar o texto de privacidade com a política de privacidade real |
| Newsletter | Conectar um serviço; hoje o formulário avisa que a inscrição ainda não está ativa |
| Rodapé, Empresas | Contato comercial, quando houver; hoje diz "Em breve" |

## O que não vai para o repositório

Veja o `.gitignore`:
- configurações locais do editor e do Claude Code;
- índice do CodeGraph;
- arquivos `.env`;
- a pasta `refererencia - site/`, com o print do site usado como referência visual, que é material de terceiros e fica só no computador local.
