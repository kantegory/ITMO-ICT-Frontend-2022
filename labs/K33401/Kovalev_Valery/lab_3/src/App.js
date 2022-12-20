import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { getToken } from "./API/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "./store/actions/authActions";
import { useAuth } from "./hooks/useAuth";
import BasePage from "./pages/BasePage/BasePage";
import { fetchCategories } from "./store/actions/categoriesActions";
import MainPage from "./pages/MainPage";

function App() {
  return <MainPage />;
}
export default App;
