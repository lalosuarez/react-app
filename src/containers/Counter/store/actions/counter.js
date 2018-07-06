export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const incremement = () =>  {
    return {type: INCREMENT};
}

export const decrement = () =>  {
    return {type: DECREMENT};
}

export const add = (num) =>  {
    return {type: ADD, payload: num};
}

export const subtract = (num) =>  {
    return {type: SUBTRACT, payload: num};
}