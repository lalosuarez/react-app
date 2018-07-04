import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

import { Route, Link, Switch } from 'react-router-dom';

class Blog extends Component {

  render() {
		return (
			<div className="row">
				<div className="col">
					<header>
						<nav>
							<ul>
								<li><Link to="/posts">Posts</Link></li>
								<li><Link to="/posts/new">New Post</Link></li> 
							</ul>
						</nav>
					</header>
				</div>
				<Switch>
					<Route path="/" exact component={Posts} />
					<Route path="/posts" exact component={Posts} />
					<Route path="/posts/new" exact component={NewPost} />
					<Route path="/posts/:id" exact component={FullPost} />
				</Switch>
			</div>
    );
	}
}

export default Blog;