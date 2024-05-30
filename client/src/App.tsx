import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";

function App() {
  return (
    <BrowserRouter>
      <header>
        This is a multicantainer application
        <Link to={"/"}>Home</Link>
        <Link to={"/PageOne"}>Page One</Link>
      </header>
      <Routes>
        <Fragment>
          <Route path="/" element={<PageTwo />} />
          <Route path="/pageone" element={<PageOne />} />
        </Fragment>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
