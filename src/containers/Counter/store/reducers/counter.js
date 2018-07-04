import * as actions from '../actions/counter';

const initialState = {
    counter: 0,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };        
        case actions.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };        
        case actions.ADD:
            return {
                ...state,
                counter: state.counter + action.payload
            };         
        case actions.SUBTRACT:        
            return {
                ...state,
                counter: state.counter - action.payload
            };           
        default:
            return state;   
    }  
};

export default reducer;