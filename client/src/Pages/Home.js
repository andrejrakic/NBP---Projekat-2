import React, { Component } from "react";

import RamUsage from "../components/RamUsage";
import CpuUsage from "../components/CpuUsage";
import Header from "../components/Header";
import Traffic from "../components/Traffic";
import Distribution from "../components/Distribution";
import Messages from "../components/Messages";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ margin: "20px 40px" }} className="parent">
          <div className="div4">
            <CpuUsage />

            <div className="label">Avg CPU Usage</div>
          </div>
          <div className="div1">
            <Traffic />

            <div className="label">Traffic Hearbeat</div>
          </div>
          <div className="div3">
            <Distribution />
            <div className="label"> Region Distribution" </div>
          </div>
          <div className="div5">
            {" "}
            <h2>Alerts</h2>
            <Messages />
          </div>
          <div className="div2">
            <RamUsage />
            <div className="label">Ram Usage</div>
          </div>
        </div>
      </div>
    );
  }
}
