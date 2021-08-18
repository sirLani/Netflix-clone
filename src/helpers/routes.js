import React, { Children } from "react";
import { Router, Redirect, Route } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, shildren, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return Children;
        }
        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }
        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, Children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return Children;
        }
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "signin",
                state: { from: location },
              }}
            />
          );
        }
        return null
      }}
    />
  );
}
