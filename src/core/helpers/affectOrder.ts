import Kitchen from '../../classes/Kitchen';

export const affectOrderToKitchen = (
  kitchens: Kitchen[],
  orders: string[],
  limitOrderPerKitchen: number,
  cooks: number,
  initialKitchen: Kitchen,
): void => {
  for (let i = kitchens.length - 1; i < kitchens.length; i++) {
    if (
      orders.length + kitchens[i].getOrders().length <=
      limitOrderPerKitchen
    ) {
      for (const index in orders) {
        kitchens[i].addOders(orders[index]);
      }
    } else {
      new Kitchen(cooks);
      kitchens = initialKitchen.getInstanceKitchens();
    }
  }
};

export const affectOrderToCook = (kitchens: Kitchen[], time: number) => {
  for (const kitchen of kitchens) {
    kitchen.assignOrderToCook();
    for (const cook of kitchen.getCooks()) {
      if (cook.getOrder() !== '') {
        cook.buildOrder(time);
      }
    }
  }
};
