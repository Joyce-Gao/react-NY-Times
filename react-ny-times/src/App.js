import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import configureStore from "./store/configureStore";
import Homepage from "./pages/Homepage";
import World from "./pages/World";
import Science from "./pages/Science";
import SignIn from "./pages/SignIn";
import Search from "./pages/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/css/Common.css";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/world" component={World} />
          <Route path="/search" component={Search} />
          <Route path="/science">
            <Science />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
