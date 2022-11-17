import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import {useEffect, useMemo, useState} from "react";
import {Context} from "./context";
import {useFetching} from "./hooks/useFetching";
import ApiService from "./API/ApiService";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import {useAuth} from "./hooks/useAuth";

function App() {
    const api = new ApiService()
    const [filter, setFilter] = useState({"keywords":[], "colors":[]})
    const [previewPhoto, setPreviewPhoto] = useState([])
    const [colors, setColors] = useState([])
    const [keywords, setKeywords] = useState([{"total": "", "keyword": ""}])
    const token = useMemo(()=>(localStorage.getItem("token")), [])


    const [fetchFilter, isFilterLoading, filterError] = useFetching( async ()=>{
        const colors = await api.getColors()
        setColors(colors.colors)
        const keywords = await api.getKeywords(30)
        setKeywords(keywords.keywords)
    })

    const [fetchUser, isUserLoading, UserError] = useFetching( async ()=>{
        const user = api.getUser()
    })

    useEffect(()=>{
        fetchFilter()
        fetchUser()
    },[])



  return (
    <div className="App">
        <Context.Provider value={{
            filter,
            setFilter,
            previewPhoto,
            setPreviewPhoto,
            colors,
            setColors,
            keywords,
            setKeywords,
            isFilterLoading
        }}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Context.Provider>
</div>
  );
}

export default App;
