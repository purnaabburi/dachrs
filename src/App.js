import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { renderRoutes } from "react-router-config";
import LoginRoute from "./routes/Routes";
import "./App.css";

function App() {
  const history = createBrowserHistory();

  const dynamicRoutes = () => {
    return renderRoutes(LoginRoute);
  };
  return (
    <div className="App">
      <Router history={history}>
        <header className="App-header">{dynamicRoutes()}</header>
      </Router>
    </div>
  );
}

export default App;
