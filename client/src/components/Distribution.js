import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Pie } from "react-chartjs-2";

import Loading from "./Loading";

const QUERY = gql`
  query Distribution {
    distribution {
      region
      percentage
    }
  }
`;

const SUBSCRIPTION = gql`
  subscription Distribution {
    distribution {
      region
      percentage
    }
  }
`;

class Distribution extends Component {
  componentDidMount() {
    this.props.subscribeToNewData();
  }

  render() {
    const { data, error, loading } = this.props;
    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <p>Error!</p>;
    }

    const data1 = {
      labels: ["us-east", "us-west"],
      datasets: [
        {
          data: data.distribution.map(item => item.percentage),
          backgroundColor: ["#FE5F55", "#40434E"],
          hoverBackgroundColor: ["#FE5F55", "#40434E"]
        }
      ]
    };

    console.log(data);
    return <Pie data={data1} />;
  }
}

// data.distribution || []

export default class DistributionContainer extends Component {
  render() {
    return (
      <div style={{ border: "1px solid #cf5c36" }} className="distribution">
        <Query query={QUERY}>
          {({ subscribeToMore, ...result }) => (
            <Distribution
              {...result}
              subscribeToNewData={() =>
                subscribeToMore({
                  document: SUBSCRIPTION,
                  updateQuery: (prev, { subscriptionData }) => {
                    if (!subscriptionData.data) return prev;
                    return subscriptionData.data;
                  }
                })
              }
            />
          )}
        </Query>
      </div>
    );
  }
}
