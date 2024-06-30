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
  const [isLoaded, setIsLoaded] = useState(true);
  window.addEventListener("load", () => setIsLoaded(false));

  // during the window loading content...
  if (isLoaded)
    return (
      <div className="loading-center" style={{ marginTop: "5rem" }}>
        <Rings
          height="300"
          width="300"
          color="#FF382C"
          radius="10"
          visible={true}
          ariaLabel="rings-loading"
        />
      </div>
    );

  // when the window finished loading the content
  if (!isLoaded)
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
