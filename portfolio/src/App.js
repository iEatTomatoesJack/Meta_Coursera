import {React} from "react";
import "./App.css";
import Header from './Modules/Header';
import Footer from './Modules/Footer';
import Main from './Modules/Main';

function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
     <Footer/>
    </div>
  );
}

export default App;
