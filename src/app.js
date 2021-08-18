import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, SignIn, SignUp, Browse } from "./pages";
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.Home}>
        <Home />
      </Route>
      <Route path={ROUTES.SIGN_IN}>
        <SignIn />
      </Route>
      <Route path={ROUTES.SIGN_UP}>
        <SignUp />
      </Route>
      <Route path={ROUTES.BROWSE}>
        <Browse />
      </Route>
    </Router>
  );
}
