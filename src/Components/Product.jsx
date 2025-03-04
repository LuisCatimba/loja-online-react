//Css

import styles from "./Product.module.css";

//Ícones

import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

//De utils

import FormateString from "../utils/formatString";

//Context

import { ContextCarrinho } from "../Context/ContextCarrinho";

//Hooks

import { useContext } from "react";

const Product = ({ product }) => {
  const Navigate = useNavigate();
  const { produtosNoCarrinho, dispatch } = useContext(ContextCarrinho);

  const handleAdd = (product) => {
    const productExist = produtosNoCarrinho.find(
      (produto) => produto.id == product.id
    );

    if (productExist) {
      dispatch({ type: "IncrementProduct", payload: productExist });
    } else {
      dispatch({ type: "AddProduct", payload: product });
    }
  };
  return (
    product.qtdEstoque > 0 && (
      <div className={styles.div}>
        <img
          src={`${import.meta.env.BASE_URL}${product.image.replace(/^\//, "")}`}
          alt={product.name}
        />
        <h3>{product.name}</h3>
        <p>
          Preço: <span>{FormateString(product.preco, "AOA")}</span>
        </p>
        <p>Estoque: {product.qtdEstoque}</p>
        <div className={styles.btns}>
          <button
            onClick={() => {
              handleAdd(product);
            }}
          >
            Add <FaShoppingCart />
          </button>
          <button
            onClick={() => {
              Navigate(`/product/${product.id}`);
            }}
          >
            Mais detalhes
          </button>
        </div>
      </div>
    )
  );
};

export default Product;
