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

const messageData = () => {
  const messages = [
    {
      title: "Server restarted - s1.us-west",
      description: "Something went wrong! Had to reboot",
      color: "#27ae60"
    },
    {
      title: "Service unavailable - web003",
      description: "web003 service down from last 5 minutes, Take action!",
      color: "#f39c12"
    },
    {
      title: "High CPU Utilization - 95% s2.us-east",
      description: "Watch for s2.us-east. CPU is at maximum!",
      color: "#e74c3c"
    },
    {
      title: "High latency - int005",
      description: "Woah! This is unacceptable. Latency has gone nuts.",
      color: "#e74c3c"
    }
  ];
  return messages.slice(0, parseInt(Math.random() * 4 + 1, 10));
};

module.exports = {
  cpuData,
  ramData,
  messageData,
  regionData
};
