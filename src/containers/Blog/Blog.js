import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import axios from 'axios';

class Blog extends Component {

	state = {
		posts: [],
		selectedPostId: null
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
		this.setState({selectedPostId: id});
	};

  render() {
		const posts = this.state.posts.map((post) => {
			return <Post key={post.id}
				title={post.title}
				onPostClick={() => this.onPostClickHandler(post.id)}/>
		});

		return (
      <div className="row">
				<div className="col">
					<h2>Welcome to the blog</h2>
					<section>{posts}</section>
					<section>
						<FullPost id={this.state.selectedPostId} />
					</section>
				</div>
			</div>
    );
	}
}

export default Blog;