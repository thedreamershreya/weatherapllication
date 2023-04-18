import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Error from "./Components/Error";

import Main from "./Components/main/Main";
import Subscribe from "./Components/Subscribe Page/Subscribe";
import './App.css'


function App() {

 
  return (
    <div>
      
     
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/subscribe' element={<Subscribe />}/>
          <Route path='/*' element={<Error />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      
      
     
    </div>


  );
}

export default App;
