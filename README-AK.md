# CEL — Como Empreender Lucrando — LP aspirante

**Cliente:** CEL (Felipe Winston)
**Público:** Quem vai abrir / acabou de abrir
**Objetivo:** levar ao checkout Hotmart (W94393903V · off=9bv66jk3), com UTMs repassadas

## Stack
HTML, CSS e JS puros (sem framework, sem bundler, sem build). Sem libs externas além da fonte Roboto (Google Fonts) e GTM.

## Deploy — Vercel
Import do repo · Framework Preset **Other** · Root Directory na raiz · sem Build/Install Command, sem Output Directory.

## Edições sobre o exportado
- Export original tinha as 3 versões num só projeto; separado em 1 repo por versão (decisão AK).
- Removido o redirect da raiz `/` → `/dono-em-operacao` (cada repo serve a LP na raiz).
- `og-image.jpg` movido para `assets/`; `canonical`, `og:url` e `og:image` sem o prefixo `/aspirante`.
- `favicon.ico` e `robots.txt` copiados para a raiz do repo.
- `vercel.json` adaptado ao padrão AK (cache de assets + HTML sem cache).

## Pendências
- [ ] URL real da Vercel/domínio: trocar `SEU-DOMINIO.com.br` (canonical, og:url, og:image) e fazer segundo commit
- [ ] ID do GTM: trocar `GTM-XXXXXXX` (head e body); Pixel Meta e GA4 dentro do GTM
- [ ] Confirmar link de checkout Hotmart, parcelamento (12x R$19,70) e métodos de pagamento
- [ ] Validar o bônus "Diagnóstico dos 8 pilares" ([A VALIDAR]) ou remover
- [ ] Razão social, CNPJ e política de privacidade no rodapé (removidos a pedido)
- [ ] robots.txt hoje `Allow: /`; se for só tráfego pago, usar `Disallow: /` + `noindex` [DECIDIR]

Última atualização: 08/10/2026
