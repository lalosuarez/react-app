import * as actions from '../actions/results';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.STORE_RESULT:       
            return {
                ...state,
                results: state.results.concat({
                    id: Math.floor(Math.random() * 10000000000) + 1,
                    value: action.payload
                })
            };
        case actions.DELETE_RESULT:     
            return {
                ...state,
                results: state.results.filter(el => el.id !== action.payload)
            };            
        default:
            return state;   
    }  
};

export default reducer;