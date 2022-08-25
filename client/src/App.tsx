import React, { FC } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//Page imports
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import About from "./pages/About/About";
import Orders from "./pages/Orders/Orders";
import Menu from "./pages/Menu/Menu";

const App: FC = () => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="orders" element={<Orders />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
