# Auditoria — Aduna

Análise do projeto enviado e das alterações executadas em 10/11/2026. Esta é uma auditoria técnica do código local, não uma comprovação de métricas reais de produção.

| Área | Problema observado no projeto original | Ajuste implementado |
| --- | --- | --- |
| Identidade | Layout com cards padronizados e diferenciação visual limitada | Direção editorial própria, tipografia de alto contraste, arte orbital azul e ritmo de seção |
| Navegação | Menu móvel dependia do JavaScript do Bootstrap hospedado em CDN | Menu próprio com `aria-expanded`, Escape, gestão de foco e fechamento por link |
| Animação | GSAP, Bootstrap e ícones externos exigiam múltiplas requisições e a falha no CDN afetava interações | CSS e JavaScript nativos; `IntersectionObserver`, animações progressivas e redução de movimento |
| Contato | Links falsos para WhatsApp, Instagram e e-mail | WhatsApp e Instagram informados pelo usuário; e-mail não publicado por não ter sido fornecido |
| SEO | Canonical, Open Graph, sitemap e robots tinham `SEU-USUARIO` | URLs planejadas do repositório `aduna`, imagem 1200×630, sitemap e robôs alinhados |
| Dados estruturados | `ProfessionalService` anunciava URL fictícia e perfil inexistente | `Organization` com somente informações fornecidas e URL planejada |
| Imagens | Open Graph usava logo transparente sem arte apropriada | Capa social específica em PNG; arte SVG leve para hero e textura |
| Conteúdo | Seção Site.on misturava o serviço com o escopo da Aduna | Parceria destacada, oferta de sites separada e linguagem comercial mais objetiva |
| Responsividade | Ajustes antigos limitados a dois breakpoints | Layouts específicos para até 1050px, 780px, 560px e 360px |
| Operação | Faltava página 404 e checklist final | 404 personalizada, `.nojekyll`, README de deploy e pendências declaradas |

## Critérios de qualidade

| Recurso | Estado | Evidência / próximo passo |
| --- | --- | --- |
| Página estática GitHub Pages | Preparada | `index.html` na raiz; nenhuma etapa de build necessária |
| WhatsApp | Implementado; validar em produção | `wa.me/5551994787320` com texto pré-preenchido |
| Instagram | Implementado; validar em produção | `instagram.com/aduna_maketing/` |
| Site.on | Implementado; validar em produção | Link público do portfólio fornecido |
| Menus e âncoras | Estrutura validada; interação visual pendente | 23 IDs sem duplicação, âncoras internas resolvidas; script validado com `node --check` |
| Acessibilidade | Melhorada, não certificada | Semântica, foco visível, redução de movimento; revisão manual necessária |
| SEO | Configurado; confirmar URL publicada | Metadados, JSON-LD, OG, canonical, sitemap e robots |
| Desempenho | Otimizado estruturalmente; sem nota garantida | Sem CDNs; vetores e textura WebP; medir no destino de produção |
| Depoimentos/cases | Não aplicável sem dados | Nenhuma evidência social inventada |
| Formulário e analytics | Não implementados | Evita simular envio e coletar dados sem serviço definido |

## Pendências antes de anunciar o lançamento

1. Confirmar com a prima de Gustavo o texto comercial, o número e o perfil social.
2. Publicar a raiz dos arquivos no repositório `gusdias-coder/aduna` e confirmar se a URL final coincide com os metadados.
3. Testar os cliques externos em ambiente público e como a imagem aparece ao compartilhar o endereço.
4. Opcional: adicionar imagens e vídeos **reais e autorizados** da Aduna, além de eventuais cases documentados.

## Validações locais executadas

- Inspeção do HTML: 337 elementos, um `h1`, seis `h2` e 23 IDs sem duplicação.
- Conferência programática de âncoras, arquivos estáticos referenciados, textos alternativos das imagens e `rel="noopener"` em links externos.
- `Organization` JSON-LD válido, URL canônica coerente com sitemap e `llms.txt`.
- `node --check` no JavaScript sem erros de sintaxe.
- Capa social PNG gerada com dimensões de 1200 × 630 px e inspecionada.
- **Limitação do ambiente:** o Chromium automatizado não iniciou por restrição de socket; o navegador desktop recusou o endereço do servidor local e bloqueou o protocolo `file://`. Portanto, não foi possível registrar screenshots confiáveis da página renderizada ou medir Lighthouse. A revisão visual mobile/desktop ainda deve ser feita em um navegador acessível após o deploy.

## Riscos residuais

- Sem dados de acesso real não é possível medir Core Web Vitals de usuários reais, taxa de conversão ou posição no Google.
- Efeitos gráficos podem ter custos diferentes em aparelhos de entrada. A preferência por movimento reduzido está respeitada.
- A existência de URLs e links não atesta que a página pública já foi publicada, que o Instagram está acessível ou que o número recebe mensagens.

## Ajustes solicitados na revisão visual

- Removida a observação negativa sobre serviços de design gráfico ao fim da seção de serviços.
- Retirada a faixa azul de palavras em movimento após o hero; agora há uma transição direta para a seção sobre a Aduna.
- Restaurada a apresentação de valores em etiquetas discretas, acompanhadas da frase institucional, sem a grade numerada.
- Adicionado bloqueio de overflow horizontal acidental em telas estreitas.
