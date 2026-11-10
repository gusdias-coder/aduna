# Site da Aduna

Site estático (HTML, CSS, JS, Bootstrap 5.3 e GSAP) pronto para GitHub Pages.

## Estrutura

```
aduna-site/
├── index.html
├── robots.txt
├── sitemap.xml
├── llms.txt
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── img/logo-azul.png, logo-branca.png
```

## Publicar no GitHub Pages

1. Crie um repositório chamado `aduna-site` na conta do GitHub.
2. Envie todos os arquivos desta pasta para a branch `main`.
3. Vá em **Settings → Pages**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`.
4. Em alguns minutos o site fica em `https://SEU-USUARIO.github.io/aduna-site/`.

## Dados para trocar antes de publicar

Procure por `SEU-USUARIO`, `SEU_INSTAGRAM`, `5551000000000` e `contato@seudominio.com.br` nos arquivos:

- `index.html`: links de WhatsApp (contato e botão flutuante), Instagram, e-mail, canonical e Open Graph.
- `sitemap.xml`, `robots.txt`, `llms.txt`: domínio e endereço do site.

Se a Aduna tiver domínio próprio, troque as URLs pelo domínio e ative o domínio personalizado em **Settings → Pages**.

## Movimento

As animações ficam em `assets/js/main.js` (GSAP + ScrollTrigger). Para desativar as animações, o site respeita automaticamente a preferência de "reduzir movimento" do sistema operacional.
