import { createContext, useState } from "react";

export const ContextCarrinho = createContext();

export const BotaoVisivelContext = createContext();

export const BotaoVisivelContextProvider = ({ children }) => {
  const [visivel, setVisivel] = useState(false);

  return (
    <BotaoVisivelContext.Provider value={{ visivel, setVisivel }}>
      {children}
    </BotaoVisivelContext.Provider>
  );
};
