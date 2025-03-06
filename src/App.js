import './App.css';
import { useLocation } from "react-router-dom"
import {useLayoutEffect} from 'react';
// import Header from "./Components/Navbar/Navbar"
import Header from "./Components/Header/Header"
import Router from "./Router";
import Footer from "./Components/Footer/Footer";
import Whatsappchat from "./Components/Whatsappchat/Whatsappchat";


const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}


function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header/>
        <Router/>
        <Footer/>
        <Whatsappchat/>
      </Wrapper>
    </div>
  );
}

export default App;
