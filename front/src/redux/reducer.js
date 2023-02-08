import { ADD_FAV_CHARACTER, DELETE_FAV_CHARACTER, FILTER_CARDS, ORDER_CARDS } from './actions'

const initialState = {
    myFavourites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAV_CHARACTER:
            return {
                ...state,
                myFavourites: [...state.myFavourites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case DELETE_FAV_CHARACTER:
            let filteredList = state.myFavourites.filter((character) => character.id !== action.payload)
            return {
                ...state,
                myFavourites: filteredList,
                allCharacters: filteredList
            }
        case FILTER_CARDS: 
            let filteredList2 = state.allCharacters.filter((character) => character.gender === action.payload)
            return {
                ...state,
                myFavourites: filteredList2
                }
        case ORDER_CARDS: 
            if(action.payload === "Ascendente"){
                return{
                    ...state,
                    myFavourites: state.allCharacters.sort(function(a, b) {
                        return a.id - b.id;
                      })
                }}
            else if (action.payload === "Descendente"){
                return {
                    ...state,
                    myFavourites: state.allCharacters.sort(function(a, b) {
                        return b.id - a.id;
                      })
                }
            }
        default:
            return {...state}
    }
}

export default reducer;