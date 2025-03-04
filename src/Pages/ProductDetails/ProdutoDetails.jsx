//Css

import styles from "./ProoductDetails.module.css";

//Ícone

import { FaShoppingCart } from "react-icons/fa";

//Hook

import { useParams } from "react-router-dom";
import { usePageLoading } from "../../Hooks/usePageLoading";
import { useContext } from "react";

//db

import db from "../../db/db.json";

//Image

import { FaStar } from "react-icons/fa";

//De Utils

import formatString from "../../utils/formatString";

//Components

import Loading from "../../Components/Loading";

//Context

import { ContextCarrinho } from "../../Context/ContextCarrinho";

const ProductDetails = () => {
  const products = db;

  const { dispatch } = useContext(ContextCarrinho);

  const { id } = useParams();
  const loading = usePageLoading();

  const product = products.find((product) => product.id === id);

  return (
    <div className={styles.conteinerProductDetails}>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.productCard}>
          <img
            src={`${import.meta.env.BASE_URL}imagens${product.image}`}
            alt={product.name}
          />
          <h2>{product.name}</h2>
          <p>{formatString(product.preco, "AOA")}</p>
          <span>Sobre o produto</span>
          <p className={styles.descricao}>{product.descricao}</p>
          <div>
            <span>Cores disponíveis:</span>
            {product.coresDisponiveis.map((cor) => (
              <p key={cor}>{cor}</p>
            ))}
          </div>
          <div>
            <span>Tamanhos disponíveis: </span>
            {product.tamanhosDisponiveis.map((tamanho) => (
              <p key={tamanho}>{tamanho}</p>
            ))}
          </div>
          <div>
            <span>Média de avaliações:</span>
            <p>
              {product.mediaDeAvalicoes}
              <FaStar
                className="estrela"
                style={{
                  color: "#FFD700",
                  fontSize: "16px",
                  marginLeft: "3px",
                }}
              />
            </p>
          </div>
          <div>
            <span>Estoque: </span>
            <p>{product.qtdEstoque}</p>
          </div>
          <button
            onClick={() => {
              dispatch({ type: "AddProduct", payload: product });
            }}
          >
            Add <FaShoppingCart />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
