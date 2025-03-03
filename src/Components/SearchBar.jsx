//Css

import styles from "./SearchBar.module.css";

//Ícones

import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

//Hook
import { useGetProduct } from "../Hooks/useGetProducts";
import { useState, useContext } from "react";

//Context

import { ProductContext } from "../Context/ContextProduct";
import { ContextCarrinho } from "../Context/ContextCarrinho";
import { BotaoVisivelContext } from "../Context/ContextCarrinho";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const products = useGetProduct(searchValue);

  const { setProducts } = useContext(ProductContext);
  const { produtosNoCarrinho } = useContext(ContextCarrinho);
  const { visivel, setVisivel } = useContext(BotaoVisivelContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchValue(e.target.valuue);
    setProducts(products);
    setSearchValue("");
  };

  return (
    <div className={styles.conteinerSearchBar}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar produto..."
          value={searchValue ? searchValue : ""}
          required
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          style={{
            all: "unset",
            color: "white",
            fontSize: "18px",
            textAlign: "center",
            verticalAlign: "center",
            height: "80%",
            padding: "5px 5px 5px 8px",
            borderLeft: "3px solid rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
          }}
        >
          <FaSearch />
        </button>
      </form>
      <div className={styles.carrinho}>
        {produtosNoCarrinho && produtosNoCarrinho.length > 0 && (
          <span>{produtosNoCarrinho.length}</span>
        )}
        <FaShoppingCart onClick={() => setVisivel(!visivel)} />
      </div>
    </div>
  );
};

export default SearchBar;
