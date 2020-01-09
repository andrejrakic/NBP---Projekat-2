import React, { Component } from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import CpuUsage from "../components/CpuUsage";
import Header from "../components/Header";
import Traffic from "../components/Traffic";
import Distribution from "../components/Distribution";
import Messages from "../components/Messages";

const Label = ({ title }) => (
  <div
    style={{
      width: "100%",
      background: "#2c3e50",
      color: "#fff",
      height: 35,
      textAlign: "center",
      fontSize: "1.3em",
      padding: 4
    }}
  >
    {title}
  </div>
);

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ margin: "20px 40px" }} className="parent">
          <div className="div1">
            <CpuUsage />
            <Label title="Avg CPU Usage" />
          </div>
          <div className="div2">
            <Traffic />
            <Label title="Traffic heartbeat" />
          </div>
          <div className="div3">
            <Distribution />
            <Label title="Region Distribution" />
          </div>
          <div className="div4">
            {" "}
            <h2>Alerts</h2>
            <Messages />
          </div>
          <div className="div5">
            <h2>RAM</h2>
          </div>
        </div>
      </div>
    );
  }
}
