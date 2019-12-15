const { gql } = require("apollo-server");

const schema = gql`
  type CPU {
    percentage: Float!
  }

  type RAM {
    usage: Float!
  }

  type Query {
    cpu: CPU
    ram: RAM
  }

  type Mutation {
    cpu: CPU
    ram: RAM
  }

  type Subscription {
    cpu: CPU
    ram: RAM
  }
`;

module.exports = schema;
