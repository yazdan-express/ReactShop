import React from "react";
import Cards from "./components/Cards";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route element={<Cards />} path="/" />
          </Routes>
        </Layout>
      </BrowserRouter>
      
      
    </>
  );
};

export default App;
