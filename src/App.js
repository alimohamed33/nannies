import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { Rings } from "react-loader-spinner";
import Nannies from "./components/Nannies";
import Categories from "./components/Categories";
import Register from "./pages/register/Register";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Nannies />} />
          <Route path="nannies" element={<Nannies />} />
          <Route path="categories" element={<Categories />} />
        </Route>

        <Route path="register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
