import "./App.css";

//Componentes

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Carrinho from "./Components/Carrinho";

//Pages

import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProdutoDetails";
import Page404 from "./Pages/Page404/Page404";

//Router

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Context

import { ProductContextProvider } from "./Context/ContextProduct";
import { ProductCarrinhoProvider } from "./Providers/ProductCarrinhoProvider";
import { BotaoVisivelContextProvider } from "./Context/ContextCarrinho";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProductCarrinhoProvider>
          <ProductContextProvider>
            <BotaoVisivelContextProvider>
              <NavBar />
              <div className="conteiner">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="*" element={<Page404 />} />
                </Routes>
              </div>
              <Carrinho />
              <Footer />
            </BotaoVisivelContextProvider>
          </ProductContextProvider>
        </ProductCarrinhoProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
