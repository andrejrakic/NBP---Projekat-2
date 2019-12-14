const pubsub = require("./pubsub");
const { cpuData } = require("./helpers/data_generator");
const { get, set } = require("./helpers/redis");

const COMPONENTS = {
  CPU: "cpu"
};

const publishRandomData = async (generator, component) => {
  const data = generator();
  pubsub.publish(component, { [component]: data });
  await set(component, data);
  return data;
};

module.exports = {
  Query: {
    cpu: () => get(COMPONENTS.CPU)
  },
  Mutation: {
    cpu: () => publishRandomData(cpuData, COMPONENTS.CPU)
  },
  Subscription: {
    cpu: {
      subscribe: () => pubsub.asyncIterator(COMPONENTS.CPU)
    }
  }
};
