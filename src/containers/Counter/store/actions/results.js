export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const storeResult = (result) =>  {
    return {type: STORE_RESULT, payload: result};
}

export const deleteResult = (id) =>  {
    return {type: DELETE_RESULT, payload: id};
}