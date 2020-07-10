import React, { Component } from "react";
import RegCmp from "./RegCmp";
import PureCmp from "./PureCmp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "freedom",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "freedom",
      });
    }, 2000);
  }

  render() {
    console.log("Parent component render.");
    return (
      <div>
        <p>Parent component.</p>
        <RegCmp name={this.state.name}></RegCmp>
        <PureCmp name={this.state.name}></PureCmp>
      </div>
    );
  }
}

export default ParentComp;
