import React, { Component } from "react";
import "./content.css";
export default class content extends Component {
  onCommentWidgetClick = () => {
    console.log(this.props);
    this.props.history.push("/component-widget");
  };
  render() {
    return (
      <div className="hm-gradient wrapper_main">
        <div>
          <h1 className="heading">MERN Stack Interview Prepration Tasks</h1>
          <p>Every task has its own importance so prepare all of them.</p>
          <hr />
          {/* Standard button */}
          <button
            type="button"
            className="btn btn-default"
            onClick={this.onCommentWidgetClick}
          >
            CommentWidget
          </button>
          {/* <button type="button" className="btn btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-success">
            Success
          </button>
          <button type="button" className="btn btn-info">
            Info
          </button>
          <button type="button" className="btn btn-warning">
            Warning
          </button>
          <button type="button" className="btn btn-danger">
            Danger
          </button> */}
        </div>
      </div>
    );
  }
}
