import chalk from 'chalk';
import { Dishsize, DishType } from '../constant';

export const checkMenu = (menu: string): boolean => {
  let boolean = false;

  const name = Object.keys(DishType).filter(element => {
    return isNaN(Number(element));
  });

  const size = Object.keys(Dishsize).filter(element => {
    return isNaN(Number(element));
  });

  const regex = new RegExp(
    `(${name.join('|')})+.(${size.join('|')})+.x([1-9]|[1-9][0-9]+)(;|)`,
    'g',
  );
  if (regex.test(menu)) {
    boolean = true;
  } else {
    console.log(chalk.red('Your order is not correct'));
  }
  return boolean;
};
