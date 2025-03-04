import { useReducer } from "react";

//Contexto

import { ContextCarrinho } from "../Context/ContextCarrinho";

export const ProductCarrinhoProvider = ({ children }) => {
  const stateReducer = (produtosNoCarrinho, action) => {
    switch (action.type) {
      case "AddProduct":
        return [...produtosNoCarrinho, { ...action.payload, qtd: 1 }];

      case "DeleteProduct":
        return produtosNoCarrinho.filter(
          (product) => product.id !== action.payload
        );

      case "IncrementProduct": {
        const newProduct = {
          ...action.payload,
          qtd:
            action.payload.qtd < action.payload.qtdEstoque
              ? action.payload.qtd + 1
              : action.payload.qtd,
        };
        return produtosNoCarrinho.map((produto) =>
          produto.id === newProduct.id ? newProduct : produto
        );
      }

      case "DecrementProduct": {
        const newProduct = {
          ...action.payload,
          qtd:
            action.payload.qtd > 0
              ? action.payload.qtd - 1
              : action.payload.qtd,
        };
        return produtosNoCarrinho
          .map((produto) => {
            if (produto.id == newProduct.id) {
              return newProduct;
            } else {
              return produto;
            }
          })
          .filter((produto) => produto.qtd > 0);
      }

      default:
        return produtosNoCarrinho;
    }
  };
  const [produtosNoCarrinho, dispatch] = useReducer(stateReducer, []);

  return (
    <ContextCarrinho.Provider value={{ produtosNoCarrinho, dispatch }}>
      {children}
    </ContextCarrinho.Provider>
  );
};
