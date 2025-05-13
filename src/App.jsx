import React, { useState } from "react";
import Cards from "./components/Cards";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Cart from "./components/Cart";
import ContactUs from "./components/ContactUs";
import { Bounce, ToastContainer } from "react-toastify";

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryItems , setCategoryItems] = useState([]);
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <Layout setFilteredProducts={setFilteredProducts} setCategoryItems={setCategoryItems}>
          <Routes>
            <Route
              element={<Cards filteredProducts={filteredProducts} categoryItems={categoryItems} />}
              path="/"
            />
            <Route element={<Cart setFilteredProducts={setFilteredProducts} />} path="/cart" />
            <Route element={<ContactUs setFilteredProducts={setFilteredProducts}/>} path="/contact-us" />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
