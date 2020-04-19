import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: {
        salad: 0,
        mustard: 0,
        mayo: 0,
        bacon: 0,
        cheese: 0,
        aaloo: 0,
        meat: 0
    },
    totalPrice: 10
};

const INGREDIENT_PRICES = {
    salad: 20,
    mustard: 10,
    mayo: 10,
    bacon: 35,
    cheese: 15,
    aaloo: 25,
    meat: 35
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        default:
            return state;
    }
};

export default reducer;