//Css

import "./Carrinho.css";

//Componente

import ProductCarrinho from "./ProductCarrinho";

//Ícone

import { FaShoppingCart } from "react-icons/fa";

//Context

import { ContextCarrinho } from "../Context/ContextCarrinho";
import { BotaoVisivelContext } from "../Context/ContextCarrinho";

//Hooks

import { useContext } from "react";

import formatString from "../utils/formatString";

const Carrinho = () => {
  const { produtosNoCarrinho } = useContext(ContextCarrinho);
  const { visivel } = useContext(BotaoVisivelContext);

  const precoTotal = produtosNoCarrinho.reduce((acumulador, item) => {
    return acumulador + item.qtd * item.preco;
  }, 0);

  return (
    <section
      className={visivel ? "conteinerCarrinho activo" : "conteinerCarrinho"}
    >
      {produtosNoCarrinho.length > 0 ? (
        <>
          <div className="productCarrinho">
            {produtosNoCarrinho.map((produto) => (
              <ProductCarrinho produto={produto} key={produto.preco} />
            ))}
          </div>
          <div className="resumoCarrinho">
            <h5>Total</h5>
            <h3>
              <i>{formatString(precoTotal, "AOA")}</i>
            </h3>
            <button>Finalizar compra</button>
          </div>
        </>
      ) : (
        <p className="p">
          Você ainda não adicionou produtos ao carrinho <FaShoppingCart />.
        </p>
      )}
    </section>
  );
};

export default Carrinho;
