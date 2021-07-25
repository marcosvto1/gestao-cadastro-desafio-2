const products = [
  {
    id: 01,
    name: 'TÊNIS ADIDAS FUTURECRAFT 4D',
    description: 'Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume. Não aplicável a nenhuma promoção.',
    skus: [
      {id: 1, skuId: 'TAFU4D-TAM-40', price: 10, sellingPrice: 20, available: false,},
      {id: 1, skuId: 'TAFU4D-TAM-38', price: 10, sellingPrice: 20, available: true },
    ]
  },
  {
    id: 01,
    name: 'TÊNIS ULTRABOOST',
    description: 'teste',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b7f8c33392684d72961cacc50166c252_9366/Tenis_Ultraboost_Preto_FW5699_01_standard.jpg',
    skus: [
      {id: 1, skuId: 'TULTRA-01-TAM-40', name: 'TÊNIS ULTRABOOST TAMANHO 40', price: 10, sellingPrice: 20, available: true,},
      {id: 1, skuId: 'TULTRA-A-02-TAM-38', name: 'TÊNIS ULTRABOOST TAMANHO 38', price: 10, sellingPrice: 20, available: true },
    ]
  }
]


/// Produtos
// 1 Camiseta Node js
   // Imagem
  // skus
    // - 1 Camiseta node - Tamanho P - Cor Preto
    // - 2 Camiseta node - Tamanho M - Cor Preto
    // - 3 Camiseta node - Tamanho G - Cor Preto
    // - 4 Camiseta node - Tamanho P - Cor Cinza
    // - 5 Camiseta node - Tamanho M - Cor Cinza
    // - 6 Camiseta node - Tamanho G - Cor Cinza
    // Cor e Tamanho são caracteristicas


/* 
O Produto é aquilo que é ofertado na vitrine da loja. Quando se oferta um item, uma loja não costuma exibir em sua vitrine detalhes específicos de um produto, como o tamanho da camiseta. O que se vende é a "Camiseta masculina com estampa", mas o que o cliente compra é a "Camiseta masculina com estampa - Tamanho M".
O entendimento do conceito de produto influencia diretamente na estratégia de exibição de itens na vitrine da loja. Os produtos é que são exibidos nas vitrines, enquanto os SKUs são selecionados pelo cliente já dentro da página do produto.
*/