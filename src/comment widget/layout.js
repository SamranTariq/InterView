import React, { Component } from "react";
import "./layout.css";
export default class CommentBox extends Component {
  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: [
        {
          id: 1,
          author: "landiggity",
          body: "This is my first comment on this forum so don't be a dick",
        },
        {
          id: 2,
          author: "scarlett-jo",
          body:
            "That's a mighty fine comment you've got there my good looking fellow...",
        },
        {
          id: 3,
          author: "rosco",
          body: "What is the meaning of all of this 'React' mumbo-jumbo?",
        },
      ],
    };
  }

  render() {
    const comments = this._getComments();
    let commentNodes;
    let buttonText = "Show Comments";

    if (this.state.showComments) {
      buttonText = "Hide Comments";
      commentNodes = <div className="comment-list">{comments}</div>;
    }

    return (
      <div className="comment-box wrapper">
        <h2>Join the Discussion!</h2>
        <CommentForm addComment={this._addComment.bind(this)} />
        <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
          {buttonText}
        </button>
        <h3>Comments</h3>
        <h4 className="comment-count">
          {this._getCommentsTitle(comments.length)}
        </h4>
        {commentNodes}
      </div>
    );
  } // end render

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body,
    };
    this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
  }

  _handleClick() {
    this.setState({
      showComments: !this.state.showComments,
    });
  }

  _getComments() {
    return this.state.comments.map((comment) => {
      return (
        <Comment
          author={comment.author}
          body={comment.body}
          key={comment.id}
          id={comment.id}
        />
      );
    });
  }

  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return "No comments yet";
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  }
} // end CommentBox component

class CommentForm extends React.Component {
  render() {
    return (
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <div className="comment-form-fields">
          <input
            placeholder="Name"
            required
            ref={(input) => (this._author = input)}
          ></input>
          <br />
          <textarea
            placeholder="Comment"
            rows="4"
            required
            ref={(textarea) => (this._body = textarea)}
          ></textarea>
        </div>
        <div className="comment-form-actions">
          <button type="submit">Post Comment</button>
        </div>
      </form>
    );
  } // end render

  _handleSubmit(event) {
    event.preventDefault(); // prevents page from reloading on submit
    let author = this._author;
    let body = this._body;
    this.props.addComment(author.value, body.value);
  }
} // end CommentForm component

class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">- {this.props.body}</p>
        <div className="comment-footer">
          <a
            href="#"
            className="comment-footer-delete"
            onClick={() => this._deleteComment(this.props.id)}
          >
            Delete Comment
          </a>
        </div>
      </div>
    );
  }
  _deleteComment(id) {
    console.log(this.props);
    // this.setState({
    //   comments: this.state.comments.pop(id),
    // });
  }
}
