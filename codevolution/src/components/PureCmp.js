import React, { PureComponent } from "react";

export class PureCmp extends PureComponent {
  render() {
    console.log("Pure component render.");

    return (
      <div>
        <p>Pure component. {this.props.name}</p>
      </div>
    );
  }
}

export default PureCmp;
