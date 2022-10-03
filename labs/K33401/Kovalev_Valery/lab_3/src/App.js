import logo from './logo.svg';
import './App.css';
import ApiService from "./API/ApiService";
import {useEffect} from "react";
import {useGetPhotoByRequestQuery, useGetRandomPhotosQuery} from "./redux";

function App() {
    const randomPhotos = useGetRandomPhotosQuery(10);
    // const query_photos = useGetPhotoByRequestQuery(30, "cars")

    if(!randomPhotos.isLoading){
        console.log(randomPhotos.data)
    } else {
        console.log(randomPhotos.data)
    }



  return (
    <div className="App">

    </div>
  );
}

export default App;
