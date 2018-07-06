import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActions from '../store/actions';

class FullPost extends Component {
	state = {
		loadedPost: null
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		if (id) {
			if (!this.props.loadedPost || (this.props.loadedPost
				&& this.props.loadedPost.id !== this.props.id)) {
				this.props.fetchPost(id);
			}
		}
	}

	render() {
		let post = <p>Please select a post</p>;
		if (this.props.id) {
			post = <p>Loading...</p>
		}
		if (this.props.loadedPost) {
			post = (
				<div className="row">
					<div className="col">
						<h4>{this.props.loadedPost.title}</h4>
						<p>{this.props.loadedPost.body}</p>
					</div>
				</div>
			);
		}
		return post;
	}
}

const mapStateToProps = state => {
	return {
		loadedPost: state.blog.loadedPost
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		fetchPost: blogActions.fetchPost,
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);