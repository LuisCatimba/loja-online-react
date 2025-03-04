//Css

import styles from "./ProductCarrinho.module.css";

//Ícone

import { FaTrash } from "react-icons/fa";

//utils

import formatString from "../utils/formatString";

//Context

import { ContextCarrinho } from "../Context/ContextCarrinho";

//Hook

import { useContext } from "react";

const ProductCarrinho = ({ produto }) => {
  const { dispatch } = useContext(ContextCarrinho);

  return (
    <div className={styles.product}>
      <div>
        <img
          src={`${import.meta.env.BASE_URL}${produto.image}`}
          alt={produto.name}
        />
        <section>
          <div className={styles.divButtons}>
            <input
              type="button"
              value="+"
              onClick={() => {
                dispatch({ type: "IncrementProduct", payload: produto });
              }}
            />
            <p>{produto.qtd}</p>
            <input
              type="button"
              value="-"
              onClick={() =>
                dispatch({ type: "DecrementProduct", payload: produto })
              }
            />
          </div>
          <h4>{produto.name}</h4>
          <h3>
            <i>{formatString(produto.preco, "AOA")}</i>
          </h3>
        </section>
      </div>

      <FaTrash
        color="red"
        size={24}
        cursor="pointer"
        onClick={() => dispatch({ type: "DeleteProduct", payload: produto.id })}
      />
    </div>
  );
};

export default ProductCarrinho;
