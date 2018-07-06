import * as actions from './actions';

const initialState = {
    posts: [],
    loadedPost: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.SET_POSTS:     
            return {
                ...state,
                posts: action.payload
            };
        case actions.SET_POST:     
            return {
                ...state,
                loadedPost: action.payload
            };                         
        default:
            return state;   
    }  
};

export default reducer;