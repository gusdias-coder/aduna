# Aduna — site institucional

Redesign editorial premium para a agência Aduna, em HTML, CSS e JavaScript puro. Compatível com hospedagem estática no GitHub Pages, sem build, banco de dados ou bibliotecas externas.

## Estrutura

```text
aduna-site/
├── index.html                # Página principal
├── 404.html                  # Página de erro
├── assets/
│   ├── css/style.css         # Design responsivo
│   ├── js/main.js            # Navegação, parallax e animações de entrada
│   └── img/                 # Logos originais, arte vetorial e capa social
├── sitemap.xml
├── robots.txt
├── llms.txt
├── .nojekyll
└── AUDITORIA.md              # Relatório e checklist
```

## Publicação (repositório `gusdias-coder/aduna`)

**Prévia antes de publicar:** abra `index.html` localmente ou execute `node make-preview.mjs` para gerar `aduna-preview.html` na pasta anterior, com estilos, scripts e imagens embutidos. Esse HTML funciona offline. Nenhuma dessas ações publica o site.

1. Coloque **o conteúdo da pasta `aduna-site/` na raiz do repositório `aduna`**. Não envie a pasta externa como diretório aninhado: `index.html` deve aparecer na raiz.
2. No GitHub, abra **Settings → Pages → Build and deployment** e selecione **Deploy from a branch**.
3. Escolha a branch `main` e a pasta `/ (root)`; salve a configuração.
4. Aguarde a disponibilização em `https://gusdias-coder.github.io/aduna/`.
5. Verifique navegação, WhatsApp, Instagram, capa de compartilhamento e metadados no endereço publicado.

Se você renomear o repositório ou usar domínio próprio, atualize as URLs absolutas em `index.html`, `robots.txt`, `sitemap.xml`, `llms.txt` e `404.html` (se aplicável).

## Identidade e conteúdo

- Paleta: preto azulado `#070b14`, azul-marinho `#0b2d69`, azul destaque `#426feb`, fundo claro `#f8f8f5`.
- Logos preservadas da versão recebida, inclusive proporção original.
- Contato Aduna: WhatsApp `+55 (51) 99478-7320` e Instagram `@aduna_maketing` (fornecidos por Gustavo).
- Site.on: link para `https://gusdias-coder.github.io/site-on-portfolio/`.
- Serviços: redes sociais, captação/produção e edição de vídeos e tráfego pago.
- Não há resultados numéricos, depoimentos, clientes ou fotos inventados.

## Animação e acessibilidade

- Animações de entrada usam `IntersectionObserver`; parallax responde ao scroll de forma limitada e leve.
- Menu mobile com botão acessível, controle de foco, tecla `Escape` e fechamento ao selecionar seção.
- Toda a informação essencial existe no HTML sem depender de JavaScript.
- `prefers-reduced-motion` desliga os efeitos para usuários que preferem movimento reduzido.

## Checklist de lançamento

- [ ] Confirmar se o WhatsApp e o Instagram são canais oficiais e estão corretos.
- [ ] Revisar o conteúdo com a responsável pela Aduna (especialmente a descrição da parceria Site.on).
- [ ] Confirmar URL final `https://gusdias-coder.github.io/aduna/`.
- [ ] Incluir fotos reais, cases ou vídeos no futuro, caso a Aduna autorize.
- [ ] Testar o site publicado em celular, desktop e navegação por teclado.
- [ ] Validar metadados, sitemap e indexação no ambiente público.

Veja `AUDITORIA.md` para os pontos corrigidos, testes e limitações.
