import authReducer from "./slices/AuthSlice";
import categoriesReducer from "./slices/CategoriesSlice";
import searchReducer from "./slices/SearchSlice";
import profileReducer from "./slices/ProfileSlice";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
    search: searchReducer,
    profile: profileReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};
