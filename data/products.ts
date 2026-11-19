export type Product = {
  id: string;
  name: string;
  category: string;
  description?: string;
  price?: number;
  options?: { name: string; price: number }[];
  featured?: boolean;
  image?: string;
  ingredients?: string[];
};

export const products: Product[] = [
  {
    "id": "empadao-frango",
    "name": "Empadão de frango",
    "category": "Empadões",
    "price": 15.9,
    "description": "Recheio de frango cremoso com requeijão.",
    "image": "/images/products/empadao-frango.jpg",
    "featured": true,
    "ingredients": [
      "Frango",
      "Requeijão"
    ]
  },
  {
    "id": "empadao-palmito",
    "name": "Empadão de palmito",
    "category": "Empadões",
    "price": 15.9,
    "description": "Recheado com creme de palmito.",
    "image": "/images/products/empadao-palmito.jpg",
    "ingredients": [
      "Creme de palmito"
    ]
  },
  {
    "id": "empadao-carne-seca",
    "name": "Empadão de carne-seca",
    "category": "Empadões",
    "price": 18.9,
    "description": "Recheio cremoso de carne-seca e Catupiry.",
    "image": "/images/products/empadao-carne-seca.jpg",
    "ingredients": [
      "Carne-seca",
      "Catupiry"
    ]
  },
  {
    "id": "salada-individual",
    "name": "Salada Individual",
    "category": "Saladas",
    "price": 5.9,
    "description": "Adicional para o empadão: alface, rúcula, tomate e cebola roxa.",
    "image": "/images/products/salada-individual.jpg",
    "ingredients": [
      "Alface",
      "Rúcula",
      "Tomate",
      "Cebola roxa"
    ]
  },
  {
    "id": "toast-parma",
    "name": "Toast de Parma",
    "category": "Toasts",
    "price": 27.9,
    "description": "Fatia de pão italiano levemente tostada, molho pesto, rúcula, parma e tomate confit.",
    "image": "/images/products/toast-parma.jpg",
    "featured": true,
    "ingredients": [
      "Fatia de pão italiano levemente tostada",
      "molho pesto",
      "rúcula",
      "parma",
      "tomate confit"
    ]
  },
  {
    "id": "toast-egg",
    "name": "Toast Egg",
    "category": "Toasts",
    "price": 19.9,
    "description": "Fatia de pão italiano levemente tostada, creme de ricota com tomate seco, ovos cremosos e bacon crocante.",
    "image": "/images/products/toast-egg.jpg",
    "ingredients": [
      "Fatia de pão italiano levemente tostada",
      "creme de ricota com tomate seco",
      "ovos cremosos",
      "bacon crocante"
    ]
  },
  {
    "id": "toast-caprese",
    "name": "Toast Caprese",
    "category": "Toasts",
    "price": 32.9,
    "description": "Fatia de pão italiano levemente tostada, molho pesto, burrata, tomate confit, cebola roxa e manjericão.",
    "image": "/images/products/toast-caprese.jpg",
    "ingredients": [
      "Fatia de pão italiano levemente tostada",
      "molho pesto",
      "burrata",
      "tomate confit",
      "cebola roxa",
      "manjericão"
    ]
  },
  {
    "id": "toast-damasco",
    "name": "Toast de Damasco",
    "category": "Toasts",
    "price": 34.9,
    "description": "Fatia de pão levemente tostada, cream cheese, geleia de damasco e queijo brie.",
    "image": "/images/products/toast-damasco.jpg",
    "ingredients": [
      "Fatia de pão levemente tostada",
      "cream cheese",
      "geleia de damasco",
      "queijo brie"
    ]
  },
  {
    "id": "toast-morango",
    "name": "Toast Morango",
    "category": "Toasts",
    "price": 29.9,
    "description": "Fatia de pão de chocolate levemente tostada, creme de avelã, morangos e pistache seco.",
    "image": "/images/products/toast-morango.jpg",
    "ingredients": [
      "Fatia de pão de chocolate levemente tostada",
      "creme de avelã",
      "morangos",
      "pistache seco"
    ]
  },
  {
    "id": "toast-choco-biscuit",
    "name": "Toast Choco Biscuit",
    "category": "Toasts",
    "price": 21.9,
    "description": "Fatia de pão de chocolate levemente tostada, doce de leite, farofa de biscoito e morangos.",
    "image": "/images/products/toast-choco-biscuit.jpg",
    "ingredients": [
      "Fatia de pão de chocolate levemente tostada",
      "doce de leite",
      "farofa de biscoito",
      "morangos"
    ]
  },
  {
    "id": "toast-pistache",
    "name": "Toast Pistache",
    "category": "Toasts",
    "price": 26.9,
    "description": "Fatia de pão de chocolate levemente tostada, creme de pistache, sorvete de creme, chantilly e morangos.",
    "image": "/images/products/toast-pistache.jpg",
    "ingredients": [
      "Fatia de pão de chocolate levemente tostada",
      "creme de pistache",
      "sorvete de creme",
      "chantilly",
      "morangos"
    ]
  },
  {
    "id": "toast-bosque",
    "name": "Toast Bosque",
    "category": "Toasts",
    "price": 33.9,
    "description": "Fatia de pão de chocolate levemente tostada, chantilly, geleia de frutas vermelhas, mirtilo, morangos e sorvete.",
    "image": "/images/products/toast-bosque.jpg",
    "ingredients": [
      "Fatia de pão de chocolate levemente tostada",
      "chantilly",
      "geleia de frutas vermelhas",
      "mirtilo",
      "morangos",
      "sorvete"
    ]
  },
  {
    "id": "natural-frango",
    "name": "Natural de Frango",
    "category": "Lanches naturais",
    "price": 16.9,
    "description": "Pão de forma integral, patê de frango (frango desfiado, maionese light, creme de leite leve e cenoura ralada), azeitonas, uvas-passas, requeijão light, alface e tomate.",
    "image": "/images/products/natural-frango.jpg",
    "ingredients": [
      "Pão de forma integral",
      "patê de frango (frango desfiado, maionese light, creme de leite leve e cenoura ralada)",
      "azeitonas",
      "uvas-passas",
      "requeijão light",
      "alface",
      "tomate"
    ]
  },
  {
    "id": "natural-peru",
    "name": "Natural de Peito de Peru",
    "category": "Lanches naturais",
    "price": 22.9,
    "description": "Pão de forma integral, peito de peru, queijo fresco, requeijão light, alface e tomate.",
    "image": "/images/products/natural-peru.jpg",
    "ingredients": [
      "Pão de forma integral",
      "peito de peru",
      "queijo fresco",
      "requeijão light",
      "alface",
      "tomate"
    ]
  },
  {
    "id": "natural-atum",
    "name": "Natural de Atum",
    "category": "Lanches naturais",
    "price": 17.9,
    "description": "Pão de forma integral, patê de atum (atum desfiado, maionese light e cenoura ralada), azeitonas, uvas-passas, alface e tomate.",
    "image": "/images/products/natural-atum.jpg",
    "ingredients": [
      "Pão de forma integral",
      "patê de atum (atum desfiado, maionese light e cenoura ralada)",
      "azeitonas",
      "uvas-passas",
      "alface",
      "tomate"
    ]
  },
  {
    "id": "especial-parma",
    "name": "Especial de Parma",
    "category": "Sanduíches especiais",
    "price": 59.9,
    "description": "Pão italiano, parma, rúcula, cebola roxa, burrata, creme de ricota, tomate confit e molho pesto.",
    "image": "/images/products/especial-parma.jpg",
    "ingredients": [
      "Pão italiano",
      "parma",
      "rúcula",
      "cebola roxa",
      "burrata",
      "creme de ricota",
      "tomate confit",
      "molho pesto"
    ]
  },
  {
    "id": "especial-peru",
    "name": "Especial de peito de peru",
    "category": "Sanduíches especiais",
    "price": 38.9,
    "description": "Pão baguete, alface, peito de peru, tomate, creme de ricota com tomate seco, queijo minas e azeite.",
    "image": "/images/products/especial-peru.jpg",
    "ingredients": [
      "Pão baguete",
      "alface",
      "peito de peru",
      "tomate",
      "creme de ricota com tomate seco",
      "queijo minas",
      "azeite"
    ]
  },
  {
    "id": "especial-mortadela",
    "name": "Especial de mortadela defumada",
    "category": "Sanduíches especiais",
    "price": 41.9,
    "description": "Pão focaccia, mortadela defumada, rúcula, tomate, creme de ricota com azeitona preta e azeite.",
    "image": "/images/products/especial-mortadela.jpg",
    "ingredients": [
      "Pão focaccia",
      "mortadela defumada",
      "rúcula",
      "tomate",
      "creme de ricota com azeitona preta",
      "azeite"
    ]
  },
  {
    "id": "especial-presunto",
    "name": "Especial de presunto",
    "category": "Sanduíches especiais",
    "description": "Pão baguete, presunto, muçarela, alface, tomate, queijo prato, azeitona preta, creme de ricota com tomate seco e azeite.",
    "image": "/images/products/especial-presunto.jpg",
    "ingredients": [
      "Pão baguete",
      "presunto",
      "muçarela",
      "alface",
      "tomate",
      "queijo prato",
      "azeitona preta",
      "creme de ricota com tomate seco",
      "azeite"
    ]
  },
  {
    "id": "especial-salaminho",
    "name": "Especial de salaminho",
    "category": "Sanduíches especiais",
    "price": 32.9,
    "description": "Pão italiano, salaminho, tomate, creme de ricota, cebola roxa, muçarela, alface e azeite.",
    "image": "/images/products/especial-salaminho.jpg",
    "ingredients": [
      "Pão italiano",
      "salaminho",
      "tomate",
      "creme de ricota",
      "cebola roxa",
      "muçarela",
      "alface",
      "azeite"
    ]
  },
  {
    "id": "especial-caprese",
    "name": "Especial caprese",
    "category": "Sanduíches especiais",
    "price": 36.9,
    "description": "Pão focaccia, creme de ricota, molho pesto, burrata, rúcula e tomate confit.",
    "image": "/images/products/especial-caprese.jpg",
    "ingredients": [
      "Pão focaccia",
      "creme de ricota",
      "molho pesto",
      "burrata",
      "rúcula",
      "tomate confit"
    ]
  },
  {
    "id": "ovos-mexidos",
    "name": "Ovos mexidos",
    "category": "Ovos",
    "price": 20.9,
    "description": "Pão torrado, ovos mexidos, bacon crocante, presunto e queijo minas.",
    "image": "/images/products/ovos-mexidos.jpg",
    "ingredients": [
      "Pão torrado",
      "ovos mexidos",
      "bacon crocante",
      "presunto",
      "queijo minas"
    ]
  },
  {
    "id": "ovos-tropical",
    "name": "Ovos Tropical",
    "category": "Ovos",
    "price": 22.9,
    "description": "Ovos cremosos, fatia de pão torrada, creme de ricota, abacate, uvas, banana, morango e tomate-cereja.",
    "image": "/images/products/ovos-tropical.jpg",
    "ingredients": [
      "Ovos cremosos",
      "fatia de pão torrada",
      "creme de ricota",
      "abacate",
      "uvas",
      "banana",
      "morango",
      "tomate-cereja"
    ]
  },
  {
    "id": "milkshake-morango",
    "name": "Morango",
    "category": "Milk-shakes",
    "image": "/images/products/milkshake-morango.jpg",
    "options": [
      {
        "name": "300 ml",
        "price": 19.9
      },
      {
        "name": "400 ml",
        "price": 22.9
      },
      {
        "name": "500 ml",
        "price": 24.9
      }
    ],
    "featured": true
  },
  {
    "id": "milkshake-chocolate-avela",
    "name": "Chocolate com avelã",
    "category": "Milk-shakes",
    "options": [
      {
        "name": "300 ml",
        "price": 19.9
      },
      {
        "name": "400 ml",
        "price": 22.9
      },
      {
        "name": "500 ml",
        "price": 24.9
      }
    ],
    "image": "/images/products/milkshake-chocolate-avela.jpg"
  },
  {
    "id": "milkshake-ovomaltine",
    "name": "Ovomaltine",
    "category": "Milk-shakes",
    "options": [
      {
        "name": "300 ml",
        "price": 19.9
      },
      {
        "name": "400 ml",
        "price": 22.9
      },
      {
        "name": "500 ml",
        "price": 24.9
      }
    ],
    "image": "/images/products/milkshake-ovomaltine.jpg"
  },
  {
    "id": "acai-frutas",
    "name": "Açaí com frutas",
    "category": "Vitaminas",
    "price": 21.9,
    "description": "Açaí, leite, banana, morango e leite condensado.",
    "ingredients": [
      "Açaí",
      "leite",
      "banana",
      "morango",
      "leite condensado"
    ]
  },
  {
    "id": "acai-tribomba",
    "name": "Açaí Tribomba",
    "category": "Vitaminas",
    "price": 18.9,
    "description": "Açaí, leite, banana, paçoca, leite condensado, pó de guaraná, ginseng e catuaba.",
    "ingredients": [
      "Açaí",
      "leite",
      "banana",
      "paçoca",
      "leite condensado",
      "pó de guaraná",
      "ginseng",
      "catuaba"
    ]
  },
  {
    "id": "vitamina-a-moda",
    "name": "À moda",
    "category": "Vitaminas",
    "price": 12.9,
    "description": "Banana, maçã, mamão, abacate, amendoim, leite, açúcar e beterraba.",
    "ingredients": [
      "Banana",
      "maçã",
      "mamão",
      "abacate",
      "amendoim",
      "leite",
      "açúcar",
      "beterraba"
    ]
  },
  {
    "id": "vitamina-mista",
    "name": "Mista",
    "category": "Vitaminas",
    "price": 10.9,
    "description": "Banana, maçã, abacate, mamão, leite e açúcar.",
    "ingredients": [
      "Banana",
      "maçã",
      "abacate",
      "mamão",
      "leite",
      "açúcar"
    ]
  },
  {
    "id": "vitamina-mamao",
    "name": "Mamão",
    "category": "Vitaminas",
    "price": 12.9,
    "description": "Mamão, leite e açúcar.",
    "ingredients": [
      "Mamão",
      "leite",
      "açúcar"
    ]
  },
  {
    "id": "vitamina-abacate",
    "name": "Abacate",
    "category": "Vitaminas",
    "price": 12.9,
    "description": "Abacate, leite e açúcar.",
    "ingredients": [
      "Abacate",
      "leite",
      "açúcar"
    ]
  },
  {
    "id": "vitamina-duo",
    "name": "Duo",
    "category": "Vitaminas",
    "price": 18.9,
    "description": "Banana, morango, leite e açúcar.",
    "ingredients": [
      "Banana",
      "morango",
      "leite",
      "açúcar"
    ]
  },
  {
    "id": "suco-laranja",
    "name": "Laranja",
    "category": "Sucos naturais",
    "price": 12.9,
    "description": "300 ml.",
    "image": "/images/products/suco-laranja.jpg"
  },
  {
    "id": "suco-abacaxi",
    "name": "Abacaxi",
    "category": "Sucos naturais",
    "price": 12.9,
    "description": "300 ml.",
    "image": "/images/products/suco-abacaxi.jpg"
  },
  {
    "id": "suco-maracuja",
    "name": "Maracujá",
    "category": "Sucos naturais",
    "price": 12.9,
    "description": "300 ml.",
    "image": "/images/products/suco-maracuja.jpg"
  },
  {
    "id": "pudim",
    "name": "Pudim Tradicional",
    "category": "Sobremesas",
    "price": 16.9,
    "image": "/images/products/pudim.jpg",
    "featured": true
  },
  {
    "id": "red-velvet",
    "name": "Red Velvet - fatia",
    "category": "Sobremesas",
    "price": 25.9,
    "image": "/images/products/red-velvet.jpg"
  },
  {
    "id": "bolo-chocolate",
    "name": "Bolo Chocolate - fatia",
    "category": "Sobremesas",
    "price": 25.9,
    "image": "/images/products/bolo-chocolate.jpg"
  },
  {
    "id": "torta-kinder",
    "name": "Torta Brownie Kinder Bueno",
    "category": "Sobremesas",
    "price": 32.9,
    "image": "/images/products/torta-kinder.jpg"
  },
  {
    "id": "brownie",
    "name": "Brownie Recheado",
    "category": "Sobremesas",
    "price": 13.9,
    "description": "Recheios: maracujá, brigadeiro, caramelo salgado ou ninho.",
    "image": "/images/products/brownie.jpg"
  },
  {
    "id": "refrigerante",
    "name": "Refrigerante lata",
    "category": "Bebidas",
    "price": 8,
    "description": "Coca, coca-zero, fanta laranja, fanta uva, sprite, guaraná ou guaraná zero."
  },
  {
    "id": "agua",
    "name": "Água Mineral",
    "category": "Bebidas",
    "price": 6
  },
  {
    "id": "agua-gas",
    "name": "Água com gás",
    "category": "Bebidas",
    "price": 6
  },
  {
    "id": "redbull",
    "name": "Energético Red Bull",
    "category": "Bebidas",
    "price": 15
  },
  {
    "id": "cafe",
    "name": "Café",
    "category": "Bebidas",
    "price": 9.9
  }
];

export const categories = [...new Set(products.map(product => product.category))];
const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
export const money = (value: number) => currency.format(value);
export function displayPrice(product: Product) {
  if (product.options?.length) return "A partir de " + money(Math.min(...product.options.map(option => option.price)));
  return product.price === undefined ? "Consulte o valor" : money(product.price);
}
