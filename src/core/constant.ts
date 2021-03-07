export enum State {
  'Available' = 'available',
  'Waiting' = 'Waiting',
  'Close' = 'Close',
}

export enum StateCook {
  'Available' = 'available',
  'Cooking' = 'Cooking',
}

export enum DishType {
  Takoyaki = 1,
  Katsudon = 2,
  Udon = 4,
  Ramen = 8,
  MatchaCookie = 16,
}

export enum Dishsize {
  S = 1,
  M = 2,
  L = 4,
  XL = 8,
  XXL = 16,
}

export type Stock = {
  octopus: number;
  sojaSauce: number;
  rice: number;
  pork: number;
  eggs: number;
  noodle: number;
  chicken: number;
  dough: number;
  matcha: number;
  chocolate: number;
};

type DishesData = {
  Takoyaki: {
    octopus: number;
    sojaSauce: number;
    time: number;
  };
  Katsudon: {
    rice: number;
    pork: number;
    eggs: number;
    time: number;
  };
  Udon: {
    noodle: number;
    pork: number;
    eggs: number;
    time: number;
  };
  Ramen: {
    noodle: number;
    chicken: number;
    eggs: number;
    time: number;
  };
  MatchaCookie: {
    dough: number;
    matcha: number;
    chocolate: number;
    time: number;
  };
};
export const DishesData: any = {
  Takoyaki: {
    octopus: 1,
    sojaSauce: 1,
    time: 1,
  },
  Katsudon: {
    rice: 1,
    pork: 1,
    eggs: 1,
    time: 2,
  },
  Udon: {
    noodle: 1,
    pork: 1,
    eggs: 1,
    time: 2,
  },
  Ramen: {
    noodle: 1,
    chicken: 1,
    eggs: 1,
    time: 2,
  },
  MatchaCookie: {
    dough: 1,
    matcha: 1,
    chocolate: 1,
    time: 4,
  },
};
