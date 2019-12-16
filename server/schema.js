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

  type Query {
    cpu: CPU
    ram: RAM
    distribution: [Distribution]
    messages: [Message]
  }

  type Mutation {
    cpu: CPU
    ram: RAM
    distribution: [Distribution]
    messages: [Message]
  }

  type Subscription {
    cpu: CPU
    ram: RAM
    distribution: [Distribution]
    messages: [Message]
  }
`;

module.exports = schema;
