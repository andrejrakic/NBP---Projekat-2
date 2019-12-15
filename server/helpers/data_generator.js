const moment = require("moment");

const cpuData = () => {
  const min = 20;
  const max = 90;

  const percentage = parseInt(Math.random() * (max - min) + min, 10);
  return {
    percentage
  };
};

const ramData = () => {
  const max = 15700;

  const usage = parseInt(Math.random() * max, 10);
  return {
    usage
  };
};

module.exports = {
  cpuData,
  ramData
};
