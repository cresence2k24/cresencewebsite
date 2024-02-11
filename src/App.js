import React, {useState,useEffect} from 'react';
import { BrowserRouter ,Route, Routes} from "react-router-dom";
import Home from './components/home';
const App = () => {

  const [loading, setLoading] = useState(true);
  const preloader = document.getElementById("preload");
useEffect(()=>{
  preloader.style.display = "none";
  setLoading(false);
},[])
  return (
    !loading && (
    <div>
    <BrowserRouter>
      <Routes>
        <Route index element={< Home/>}/>
        {/* <Route path='/events' element={< Events/>}/> */}
      </Routes>
    </BrowserRouter>
  </div>)
  );
};

export default App;
