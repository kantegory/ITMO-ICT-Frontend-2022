import logo from "./logo.svg";
import "./App.css";
import { useEffect, useLayoutEffect } from "react";
import { getToken, getUser } from "./API/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken, fetchUser } from "./store/actions/authActions";
import { useAuth } from "./hooks/useAuth";

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchToken({ username: "kovalev-vxx", password: "Mail308819ru112" }));
  }, [dispatch]);

  const { user, isAuth } = useAuth();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{user.username}</h1>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
