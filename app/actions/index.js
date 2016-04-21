export const INCREMENT = 'INCREMENT';
export function increment(){
    return dispatch => {
        return {
            type: INCREMENT
        }
    }
}

export const DECREMENT = 'DECREMENT';
export function decrement(){
    return dispatch => {
        return {
            type: DECREMENT
        }
    }
}