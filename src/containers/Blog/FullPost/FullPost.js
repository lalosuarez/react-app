import React, { Component } from 'react';
import axios from 'axios';

class FullPost extends Component {
  state = {
    loadedPost: null
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      if (!this.state.loadedPost || (this.state.loadedPost
          && this.state.loadedPost.id !== this.props.id)) {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => {
          console.log(response);
          this.setState({loadedPost: response.data});
        });
      }
    }
  }

  render() {
    let post = <p>Please select a post</p>;
    if (this.props.id) {
      post = <p>Loading...</p>
    }
    if (this.state.loadedPost) {
      post = (
        <div className="row">
          <div className="col">
            <h4>{this.state.loadedPost.title}</h4>
            <p>{this.state.loadedPost.body}</p>
          </div>
			  </div>        
      );
    }
		return post;
	}
}

export default FullPost;