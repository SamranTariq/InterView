import React, { Component } from "react";
import Content from "./content/content";
export default class main extends Component {
  render() {
    return (
      <div>
        <Content {...this.props} />
      </div>
    );
  }
}
