import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { getToken } from "./API/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "./store/actions/authActions";
import { useAuth } from "./hooks/useAuth";
import BasePage from "./pages/BasePage";

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchToken({ username: "kovalev-vxx", password: "Mail308819ru112" }));
  }, [dispatch]);

  const { user, isAuth } = useAuth();

  return <BasePage />;
}
export default App;
