# Quintal Tropical Sabores

Primeira versão local do website institucional da Quintal Tropical Sabores, em Next.js, React e TypeScript. O site não foi publicado.

## Executar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. Para produção local: `npm run build` e `npm start`.

## Estrutura

- `app/page.tsx`: homepage, apresentação, destaques e contato.
- `app/cardapio/page.tsx`: página de exploração do cardápio.
- `components/MenuExplorer.tsx`: busca, categorias, catálogo e modo experiência.
- `data/products.ts`: produtos, preços, categorias e cadastro de ingredientes.
- `data/business.ts`: endereço, horário e canais oficiais.
- `public/images/brand/logo.png`: imagem de logotipo fornecida.
- `public/images/hero/pistache.png`: conceito visual fornecido para a hero.

## Dados do cardápio

O arquivo `data/products.ts` centraliza os itens cadastrados. Para adicionar um produto, inclua um objeto em `products`, usando uma categoria existente. Informe `price` somente com valor confirmado; itens sem valor devem permanecer sem esse campo e serão apresentados como “Consulte o valor”. `options` atende variações de tamanho. `ingredients` deve conter apenas itens confirmados pela loja.

Os produtos e preços cadastrados foram conferidos visualmente nas 14 páginas do cardápio enviado. Itens sem preço definido no arquivo são apresentados como “Consulte o valor”. Sorvetes e açaís não receberam catálogo fictício. A disponibilidade do sabor pistache usado na hero precisa ser confirmada antes de uso comercial; a imagem é conceitual.

## Prévia e imagens

Com o Bun instalado, execute `~/.bun/bin/bun run --bun dev` na pasta do projeto. A seção Cardápio da homepage apresenta todas as categorias com itens no PDF. A faixa inferior escolhe a categoria e as setas percorrem os produtos dessa seleção. A página `/cardapio` oferece a experiência por categoria e o catálogo pesquisável.

Os 34 recortes em `public/images/products` correspondem às fotos impressas no PDF. Vitaminas e bebidas da última página usam apresentação gráfica porque o documento fornece apenas texto para esses itens.

O componente compartilhado em `components/ui/dish-orbit-carousel.tsx` sincroniza a órbita da foto com o nome e os detalhes. As setas, as miniaturas e os gestos horizontais permitem escolher outro produto. A preferência de movimento reduzido ativa a troca imediata.

O servidor de desenvolvimento grava em `.next`. O build e o servidor de produção usam `.next-production`.
