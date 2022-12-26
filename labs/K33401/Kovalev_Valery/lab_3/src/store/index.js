import authReducer from "./slices/AuthSlice";
import categoriesReducer from "./slices/CategoriesSlice";
import searchReducer from "./slices/SearchSlice";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
    search: searchReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};
