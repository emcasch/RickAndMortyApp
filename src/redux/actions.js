export const ADD_FAV_CHARACTER = 'ADD_FAV_CHARACTER';
export const DELETE_FAV_CHARACTER= 'DELETE_FAV_CHARACTER';
export const FILTER_CARDS= 'FILTER_CARDS';
export const ORDER_CARDS= 'ORDER_CARDS';

export const addFavCharacter = (character) => {
    return {type: ADD_FAV_CHARACTER, payload: character}
}

export const deleteFavCharacter = (id) => {
    return {type: DELETE_FAV_CHARACTER, payload: id}
}   

export const filterCards = (gender) => {
    return {type: FILTER_CARDS, payload: gender}
}

export const orderCards = (id) => {
    return {type: ORDER_CARDS, payload: id }
}