const pubsub = require("./pubsub");
const { cpuData } = require("./helpers/data_generator");
const { ramData } = require("./helpers/data_generator");
const { get, set } = require("./helpers/redis");

const COMPONENTS = {
  CPU: "cpu",
  RAM: "ram"
};

const publishRandomData = async (generator, component) => {
  const data = generator();
  pubsub.publish(component, { [component]: data });
  await set(component, data);
  return data;
};

module.exports = {
  Query: {
    cpu: () => get(COMPONENTS.CPU),
    ram: () => get(COMPONENTS.RAM)
  },
  Mutation: {
    cpu: () => publishRandomData(cpuData, COMPONENTS.CPU),
    ram: () => publishRandomData(ramData, COMPONENTS.RAM)
  },
  Subscription: {
    cpu: {
      subscribe: () => pubsub.asyncIterator(COMPONENTS.CPU)
    },
    ram: {
      subscribe: () => pubsub.asyncIterator(COMPONENTS.RAM)
    }
  }
};
