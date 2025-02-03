const products = [
  {
    id: 1,
    title: 'Remera',
    price: '1000',
    category: 'deportes',
    description: 'talles: XL, L, M, S, XS',
    image:
      'https://lafabricaderemeras.com.ar/wp-content/uploads/2023/02/2-REMERAS-DEPORTIVAS-150x150.jpg',
  },
  {
    id: 2,
    title: 'Short',
    price: '2000',
    category: 'deportes',
    description: 'talles: 38, 40, 42, 44, 50, 52',
    image:
      'https://modadeportiva.com.ar/wp-content/uploads/2015/10/Keywhoss-Shorts-deportivos-rustico-negro-para-mujer-2016-150x150.jpg',
  },
  {
    id: 30,
    title: 'Buzo',
    price: '3000',
    category: 'urbana',
    description: 'Colores: rojo, azul y verde',
    image:
      'https://winprom.com.ar/wp-content/uploads/2020/06/buzo-1-150x150.jpg',
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};

export const getCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
    }, 1000);
  });
};