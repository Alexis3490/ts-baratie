import Kitchen from '../../classes/Kitchen';

export const isBookedByCook = (kitchen: Kitchen): boolean => {
  let isBooked = false;

  for (const cook of kitchen.getCooks()) {
    if (cook.getOrder() !== '') {
      isBooked = true;
    }
  }
  return isBooked;
};
