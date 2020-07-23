import axios from "../../axios-orders";
import * as actions from "../actions/index";
import { put } from "redux-saga/effects";
export function* initIngredientsSata(action) {
  try {
    const response = yield axios.get(
      "https://burgerbuilder-748cb.firebaseio.com/ingredients.json"
    );
    yield put(actions.setIngredients(response.data));
  } catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}
