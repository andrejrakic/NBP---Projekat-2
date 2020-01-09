import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import moment from "moment";
import { Line } from "react-chartjs-2";

import Loading from "./Loading";

const QUERY = gql`
  query Traffic {
    traffic {
      dps {
        timestamp
        value
      }
      total
    }
  }
`;

const SUBSCRIPTION = gql`
  subscription Traffic {
    traffic {
      dps {
        timestamp
        value
      }
      total
    }
  }
`;

class Traffic extends Component {
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

    const data2 = {
      labels: data.traffic.dps.map(item =>
        moment
          .unix(item.timestamp)
          .utc()
          .format("h:mm:ss a")
      ),
      datasets: [
        {
          label: "Traffic heartbeat",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: data.traffic.dps.map(item => ({
            x: item.timestamp,
            y: item.value
          }))
        }
      ]
    };

    return <Line ref="chart" data={data2} />;
  }
}

export default class TrafficContainer extends Component {
  render() {
    return (
      <div style={{ border: "1px solid #2c3e50" }}>
        <Query query={QUERY}>
          {({ subscribeToMore, ...result }) => (
            <Traffic
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
