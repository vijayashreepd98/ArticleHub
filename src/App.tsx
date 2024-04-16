import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import RouteData from "./global/routes";
import { ArticleContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <Router>
      <ArticleContextProvider>
        <Routes>
          {RouteData.map(({ path, page }) => {
            return (
              <Route
                path={path}
                element={React.createElement(page)}
                key={path}
              />
            );
          })}
        </Routes>
      </ArticleContextProvider>
    </Router>
  );
}

export default App;
