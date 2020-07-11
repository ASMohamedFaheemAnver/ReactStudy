import React, { Component } from "react";
import RegCmp from "./RegCmp";
import PureCmp from "./PureCmp";
import MemoComp from "./MemoComp";

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
        <MemoComp name={this.state.name}></MemoComp>
        {/* <RegCmp name={this.state.name}></RegCmp>
        <PureCmp name={this.state.name}></PureCmp> */}
      </div>
    );
  }
}

export default ParentComp;
