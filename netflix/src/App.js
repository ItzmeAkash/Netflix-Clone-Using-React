import React from "react";
import NavBar from "./components/NavBar/NavBar";
import './app.css';
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {original,action} from './urls';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={original} title='Netflix Original'/>
      <RowPost url={action} title='Action' isSmall/>

    </div>
  );
}
    

export default App;
