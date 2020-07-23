import * as actionsTypes from "./actionTypes";
export const addIngredient = (name) => {
  return {
    type: actionsTypes.ADD_INGREDIRNTS,
    ingredientName: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionsTypes.REMOVE_INGREDIRNTS,
    ingredientName: name,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionsTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionsTypes.FETCH_INGREDIENTS_FAILED,
  };
};
export const initIngredients = () => {
  return {
    type: actionsTypes.INIT_INGREDIENTS,
  };
};
