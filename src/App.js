import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Service from "./Components/Pages/Service";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <>
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
