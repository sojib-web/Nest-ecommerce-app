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
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getData("http://localhost:3000/productData");
  }, []);

  const getData = async (url) => {
    try {
      await axios.get(url).then((respone) => {
        setProductData(respone.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header data={productData} />
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route exact={true} path="/listing" element={<ListingProduct />} />
          <Route exact={true} path="/product/detail" element={<ProDetails />} />
          <Route exact={true} path="/notfound" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
