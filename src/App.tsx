import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteData from "./global/routes";
import { ArticleContextProvider } from "./context/ContextProvider";
import ArticleList from "./pages/ArticleList";

function App() {
 
  return (
    <Router>
      <ArticleContextProvider>
        <Routes>
          {RouteData.map(({ path, page }) => {
            return <Route path={path} Component={page} key={path} />;
          })}
                      <Route path={"path"} Component={ArticleList} key={"path"} />;

        </Routes>
      </ArticleContextProvider>
    </Router>
  );
}

export default App;
