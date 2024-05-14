//import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/index.jsx";
import { Home } from "./components/Home/index.jsx";
import { SpecificItem } from "./components/SpecificItem/index.jsx";
import { About } from "./components/About/index.jsx";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contacts" Component={Contact} />
          <Route path="/blogs/:id" Component={SpecificItem} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
