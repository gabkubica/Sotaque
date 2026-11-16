# Galeria · como funciona e como editar

Endereço: https://gabkubica.github.io/Sotaque/galeria/

**Tudo ainda é exemplo**: nome da galeria, artistas, obras, preços, textos, políticas e contatos.

## Onde está cada coisa

| Arquivo | O que tem |
|---|---|
| `obras.js` | **Todos os dados**: nome, contatos, pagamento, artistas, séries, obras, exposições e notícias, ateliê, perguntas frequentes, tamanhos de encomenda |
| `gal.js` | As páginas e os recursos (ver na parede, slideshow, filtros, seleção, compartilhar) |
| `gal.css` | O visual (claro e escuro) |
| `index.html` | A página que carrega tudo |
| `fotos/` | (criar) as fotos reais das obras |
| `ferramentas/gerar.js` | Gera as páginas de compartilhamento, as imagens do link e o sitemap |
| `obra/`, `serie/`, `artista/`, `agenda/`, `pagina/`, `img/og/`, `sitemap.xml` | **Gerados automaticamente**: não editar à mão |

## Trocar por fotos reais

Em cada obra do `obras.js`, troque `arte:['mostarda','amanhecer']` por `foto:'fotos/amanhecer.jpg'`.
Use JPG de até ~1600 px no lado maior, com a obra recortada (sem parede em volta).
As **medidas** (`medidas:[altura, largura]` em cm) definem a proporção da imagem e a escala no "Ver na parede".
Para os artistas, use `foto:'fotos/artista1.jpg'` no lugar de `retrato:[...]`.

## Depois de mudar os dados

Rode o gerador (precisa de Node e Playwright) para atualizar a imagem que aparece ao
compartilhar no WhatsApp, as páginas para o Google e o sitemap:

```
node galeria/ferramentas/gerar.js
```

Se esquecer, o site continua certo para quem visita; só o "cartão" do link compartilhado e o Google
ficam com os dados antigos até rodar de novo.

## Recursos

- **Abertura**: slideshow em tela cheia com as obras marcadas `destaque:true` (com botão de pausa).
- **Ver na parede**: sala desenhada em escala real (sofá de 2,20 m, aparador, cama), 4 cores de parede; também para várias obras juntas (seleção e séries) e para tamanhos de encomenda.
- **Séries**, **Ateliê e processo**, **Exposições e notícias** (com "salvar na agenda"), **Perguntas frequentes e políticas**.
- **Minha seleção**: coração nas obras; envia o interesse em várias obras de uma vez pelo WhatsApp ou e-mail; link para compartilhar a seleção.
- **Filtros**: artista, série, tamanho, preço, formato, técnica, situação e cor. Os filtros ficam no link (ex.: `#obras?cor=azul`).
- **Preço** com parcelamento e desconto no Pix (configurar em `pagamento` no `obras.js`).
- **Google e compartilhamento**: cada obra tem uma página própria (`obra/o1.html`) com título, descrição, imagem 1200×630 e dados estruturados (obra, preço, exposição, perguntas frequentes). Os links de compartilhar usam essas páginas.

## Para o Google

Quando o site estiver pronto, cadastre `https://gabkubica.github.io/Sotaque/galeria/` no
Google Search Console e envie o sitemap `galeria/sitemap.xml`. Com domínio próprio, troque
`site:` no `obras.js` e rode o gerador.
