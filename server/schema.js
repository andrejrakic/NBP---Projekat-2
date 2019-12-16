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

  type Message {
    title: String!
    description: String!
    color: String!
  }

  type Dps {
    timestamp: Int!
    value: Float!
  }

  type Traffic {
    total: Int!
    dps: [Dps]
  }

  type Query {
    cpu: CPU
    ram: RAM
    distribution: [Distribution]
    messages: [Message]
    traffic: Traffic
  }

  type Mutation {
    cpu: CPU
    ram: RAM
    distribution: [Distribution]
    messages: [Message]
    traffic: Traffic
  }

  type Subscription {
    cpu: CPU
    ram: RAM
    distribution: [Distribution]
    messages: [Message]
    traffic: Traffic
  }
`;

module.exports = schema;
