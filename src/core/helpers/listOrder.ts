export const listOrder = (menu: string): (object | number)[] => {
  const MultipleCommands = new RegExp('.*;.*', 'g');
  if (MultipleCommands.test(menu)) {
    const listProducts = menu.split(';');
    const data = '{"products":[]}';
    const json = JSON.parse(data);
    for (let i = 0; i < listProducts.length; i++) {
      let products = listProducts[i].split(' ');
      if (products.length > 3) {
        products = products.slice(1, products.length);
      }
      json['products'].push({
        name: products[0],
        size: products[1],
        time: products[2],
      });
    }
    return [json, listProducts.length];
  } else {
    const products = menu.split(' ');
    return [
      {
        name: products[0],
        size: products[1],
        time: products[2],
      },
      1,
    ];
  }
};
