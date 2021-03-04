import chalk from 'chalk';

export const checkMenu = (menu: string): boolean => {
  let boolean = false;
  const regex = /[a-zA-Z]+.(S|M|L|XL|XXL)+.x([1-9]|[1-9][0-9]+)(;|)/g;

  if (menu.match(regex)) {
    boolean = true;
  } else {
    console.log(chalk.red('Your oder is not correct'));
  }
  return boolean;
};
