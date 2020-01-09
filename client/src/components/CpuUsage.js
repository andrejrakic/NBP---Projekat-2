import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loading from "./Loading";
import { Doughnut } from "react-chartjs-2";

const QUERY = gql`
  query CPU {
    cpu {
      percentage
    }
  }
`;

const SUBSCRIPTION = gql`
  subscription CPU {
    cpu {
      percentage
    }
  }
`;

class CpuUsage extends Component {
  componentDidMount() {
    this.props.subscribeToNewData();
  }

  getData(percent) {
    return [
      { x: 1, y: percent },
      { x: 2, y: 100 - percent }
    ];
  }

  getData1(percent) {
    return {
      labels: ["Used", "Free"],
      datasets: [
        {
          data: [percent, 100 - percent],
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
    return <Doughnut data={this.getData1(data.cpu.percentage)} />;
  }
}

const CpuUsageContainer = () => (
  <div style={{ border: "1px solid #cf5c36" }} className="chart">
    <Query query={QUERY}>
      {({ subscribeToMore, ...result }) => (
        <CpuUsage
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

export default CpuUsageContainer;
