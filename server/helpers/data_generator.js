const moment = require("moment");

const cpuData = () => {
  const min = 20;
  const max = 90;

  const percentage = parseInt(Math.random() * (max - min) + min, 10);
  return {
    percentage
  };
};

module.exports = {
  cpuData
};
