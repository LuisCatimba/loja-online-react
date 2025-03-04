import { useReducer } from "react";

//Contexto

import { ContextCarrinho } from "../Context/ContextCarrinho";

export const ProductCarrinhoProvider = ({ children }) => {
  const stateReducer = (produtosNoCarrinho, action) => {
    switch (action.type) {
      case "AddProduct":
        console.log([...produtosNoCarrinho, { ...action.payload, qtd: 1 }]);
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
              ? action.payload.qtd++
              : action.payload.qtd,
        };
        console.log(
          produtosNoCarrinho.map((produto) =>
            produto.id === newProduct.id ? newProduct : produto
          )
        );
        return produtosNoCarrinho.map((produto) =>
          produto.id === newProduct.id ? newProduct : produto
        );
      }

      case "DecrementProduct": {
        const newProduct = {
          ...action.payload,
          qtd:
            action.payload.qtd > 0 ? action.payload.qtd-- : action.payload.qtd,
        };
        console.log(
          produtosNoCarrinho
            .map((produto) => {
              if (produto.id == newProduct.id) {
                if (newProduct.qtd > 0) {
                  return newProduct;
                } else {
                  return null;
                }
              } else {
                return produto;
              }
            })
            .filter((produto) => produto !== null)
        );
        return produtosNoCarrinho
          .map((produto) => {
            if (produto.id == newProduct.id) {
              if (newProduct.qtd > 0) {
                return newProduct;
              } else {
                return null;
              }
            } else {
              return produto;
            }
          })
          .filter((produto) => produto !== null);
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
