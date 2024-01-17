import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Component/home";
import Contact from "./Component/contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
