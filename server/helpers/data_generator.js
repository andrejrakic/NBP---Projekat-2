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

const regionData = () => {
  const min = 10;
  const max = 60;

  const region1 = parseInt(Math.random() * (max - min) + min, 10);
  const region2 = 100 - region1;
  return [
    { region: "us-west", percentage: region1 },
    { region: "us-east", percentage: region2 }
  ];
};

module.exports = {
  cpuData,
  ramData,
  regionData
};
