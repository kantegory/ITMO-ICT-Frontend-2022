import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import {useEffect} from "react";
import {initLogin} from "./store/actions/authActions";
import {useAuth} from "./hooks/useAuth";
import {useDispatch} from "react-redux";
import Profile from "./pages/Profile";
import {fetchLike} from "./store/actions/likeActions";
import HomePage from "./pages/HomePage";


function App() {
    const dispatch = useDispatch()
    const {isAuth, isLoading, token, user, error} = useAuth()

    useEffect(()=>{
        if(!user.username){
            dispatch(initLogin(token))
        }
    }, [])

    useEffect(()=>{
        if(user.username){
            dispatch(fetchLike(token))
        }
    }, [user])

    return (
    <div className="App">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
    </div>
  );
}

export default App;
