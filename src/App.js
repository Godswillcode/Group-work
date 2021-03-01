import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Service from "./Components/Pages/Service";
import Contact from "./Components/Pages/Contact";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import Dropdown from "./Components/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
        if(window.innerWidth > 768 && isOpen){
          setIsOpen(false)
        }
    }
    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })
  return (
    <>
    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/contact">
          {" "}
          <Contact />{" "}
        </Route>
      </Switch>
    </>
  );
}

export default App;
// text-primary is our primary color
// text-secondary is our secondary color

// reusable button, just import the button component and pass the prop of the type of button you want to use
// import { Button } from "./Components/Gbutton"; this how you do the importing
// 1 btn_primary
// 2 btn_outline_primary
// 3 btn_block
// heroBtn
