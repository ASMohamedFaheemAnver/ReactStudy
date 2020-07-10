import React, { Component } from "react";

class RegCmp extends Component {
  render() {
    console.log("Regular component render.");

    return (
      <div>
        <p>Regular component. {this.props.name}</p>
      </div>
    );
  }
}

export default RegCmp;
