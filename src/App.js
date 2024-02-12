import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home/Home";
// import About from "./Components/pages/About/About";
import ListingProduct from "./Components/pages/ListingProduct/ListingProduct";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/pages/NotFound/NotFound";
import ProDetails from "./Components/pages/ProDetails/ProDetails";
import Cart from "./Components/pages/Cart/Cart";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const MyContext = createContext();
function App() {
  const [productData, setProductData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getData("http://localhost:5000/productData");
  }, []);

  const getData = async (url) => {
    try {
      await axios.get(url).then((respone) => {
        setProductData(respone.data);
        // console.log(respone.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const addTocart = async (item) => {
    item.quantity = 1;
    try {
      await axios
        .post("http://localhost:5000/cartItems", item)
        .then((response) => {
          if (response !== undefined) {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    cartItems,
    addTocart,
  };
  return (
    productData.length !== 0 && (
      <BrowserRouter>
        <MyContext.Provider value={value}>
          <Header data={productData} />
          <Routes>
            <Route
              exact={true}
              path="/"
              element={<Home data={productData} />}
            />
            <Route
              exact={true}
              path="/cat/:id"
              element={<ListingProduct data={productData} single={true} />}
            />
            <Route
              exact={true}
              path="/cat/:id/:id/"
              element={<ListingProduct data={productData} single={false} />}
            />
            <Route
              exact={true}
              path="/product/:id"
              element={<ProDetails data={productData} />}
            />
            <Route exact={true} path="/notFount" element={<NotFound />} />
            <Route exact={true} path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>
    )
  );
}

export default App;
export { MyContext };
