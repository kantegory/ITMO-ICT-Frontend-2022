import authReducer from "./slices/AuthSlice";
import categoriesReducer from "./slices/CategoriesSlice"

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
