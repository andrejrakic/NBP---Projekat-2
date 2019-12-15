const { gql } = require("apollo-server");

const schema = gql`
  type CPU {
    percentage: Float!
  }

  type RAM {
    usage: Float!
  }

  type Distribution {
    region: String!
    percentage: Float!
  }

  type Query {
    cpu: CPU
    ram: RAM
    distribution: [Distribution]
  }

  type Mutation {
    cpu: CPU
    ram: RAM
    distribution: [Distribution]
  }

  type Subscription {
    cpu: CPU
    ram: RAM
    distribution: [Distribution]
  }
`;

module.exports = schema;
