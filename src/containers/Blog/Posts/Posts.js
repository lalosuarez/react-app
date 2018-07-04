import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import axios from 'axios';

class Posts extends Component {

	state = {
		posts: []
	};

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				console.log(response);
				// Selects only 4 posts.
				this.setState({posts: response.data.slice(0,4)});
			});
	};

	onPostClickHandler = (id) => {
		console.log('Post id ', id);
		this.props.history.push({pathname: '/posts/' + id});
	};

  render() {
		const posts = this.state.posts.map((post) => {
			return (
				// <Link to={'/posts/' + post.id}>
					<Post title={post.title} key={post.id}
						onPostClick={() => this.onPostClickHandler(post.id)}/>
				// </Link>		
			);
		});

		return (
      <div className="row">
				<div className="col">
					<section>{posts}</section>
				</div>
			</div>
    );
	}
}

export default Posts;