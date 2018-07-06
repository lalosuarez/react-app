import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActions from '../store/actions';
import Post from '../../../components/Post/Post';

class Posts extends Component {
	
	componentDidMount() {
		this.props.fetchPosts();
	};

	onPostClickHandler = (id) => {
		console.log('Post id ', id);
		this.props.history.push({pathname: '/posts/' + id});
	};

	render() {
		const posts = this.props.posts.map((post) => {
			return (
				// <Link to={'/posts/' + post.id}>
				<Post title={post.title} key={post.id}
					onPostClick={() => this.onPostClickHandler(post.id)} />
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

const mapStateToProps = state => {
    return {
        posts: state.blog.posts
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchPosts: blogActions.fetchPosts,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);