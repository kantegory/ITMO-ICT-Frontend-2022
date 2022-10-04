import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./components/Slider";
import Album from "./components/Album";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <Slider/>
        <Album/>
    </div>
  );
}

export default App;
