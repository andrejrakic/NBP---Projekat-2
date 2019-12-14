const { gql } = require("apollo-server");

const schema = gql`
  type CPU {
    percentage: Float!
  }

  type Query {
    cpu: CPU
  }

  type Mutation {
    cpu: CPU
  }

  type Subscription {
    cpu: CPU
  }
`;

module.exports = schema;
