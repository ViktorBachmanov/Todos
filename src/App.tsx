import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Todos from "./features/todos/Todos";
import { Urls } from "./constants";

function App() {
  return (
    <Routes>
      <Route path={Urls.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={Urls.TODOS} element={<Todos />} />
      </Route>
    </Routes>
  );
}

export default App;
