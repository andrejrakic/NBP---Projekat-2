import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loading from "./Loading";
import { Doughnut } from "react-chartjs-2";

const QUERY = gql`
  query RAM {
    ram {
      usage
    }
  }
`;

const SUBSCRIPTION = gql`
  subscription RAM {
    ram {
      usage
    }
  }
`;

class RamUsage extends Component {
  componentDidMount() {
    this.props.subscribeToNewData();
  }

  getData1(usage) {
    return {
      labels: ["Used", "Free"],
      datasets: [
        {
          data: [usage, 16000 - usage],
          backgroundColor: ["#FE5F55", "#40434E"],
          hoverBackgroundColor: ["#FE5F55", "#40434E"]
        }
      ]
    };
  }

  render() {
    const { data, error, loading } = this.props;
    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <p>Error!</p>;
    }
    return <Doughnut data={this.getData1(data.ram.usage)} />;
  }
}

const RamUsageContainer = () => (
  <div style={{ border: "1px solid #2c3e50" }} className="chart">
    <Query query={QUERY}>
      {({ subscribeToMore, ...result }) => (
        <RamUsage
          className="child"
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

export default RamUsageContainer;
