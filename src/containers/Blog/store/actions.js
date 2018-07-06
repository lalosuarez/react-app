import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const SET_POSTS = 'SET_POSTS';
export const SET_POST = 'SET_POST';

export const setPosts = (posts) =>  {
    console.log('[ActionCreator] setPosts', posts);
    return {type: SET_POSTS, payload: posts};
}

export const setPost = (post) =>  {
    console.log('[ActionCreator] setFetchedPost', post);
    return {type: SET_POST, payload: post};
}

export const fetchPosts = () =>  {
    return dispatch => {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				console.log('[ActionCreator] fetchPosts', response);
				// Selects only 4 posts.
                dispatch(setPosts(response.data.slice(0,5)));
			}).catch(error => {
				console.error(error);
			})
    }
}

export const fetchPost = (id) =>  {
    return dispatch => {
		axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
			.then(response => {
				console.log('[ActionCreator] fetchPost ' + id, response);
				// Selects only 4 posts.
                dispatch(setPost(response.data));
			}).catch(error => {
				console.error(error);
			})
    }
}