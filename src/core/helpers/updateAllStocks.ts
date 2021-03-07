import Kitchen from '../../classes/Kitchen';

const updateAllStocks = (time: number, kitchen: Kitchen) => {
  setInterval(function() {
    if (kitchen !== undefined) {
      kitchen.updateAllStocks();
    }
  }, time);
};

export default updateAllStocks;
