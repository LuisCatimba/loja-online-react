//Css

import "./Home.css";

//Componentes

import Product from "../../Components/Product";
import Loading from "../../Components/Loading";

//Hook

import { useContext } from "react";

//Conetext

import { ProductContext } from "../../Context/ContextProduct";

import { usePageLoading } from "../../Hooks/usePageLoading";

const Home = () => {
  const { products } = useContext(ProductContext);

  const loading = usePageLoading();

  return (
    <div className="HomeDiv">
      {loading ? (
        <Loading />
      ) : products.length > 0 ? (
        <>
          <h2>Produtos</h2>
          <div>
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </>
      ) : (
        <p>Nenhum resultado encontrado</p>
      )}
    </div>
  );
};

export default Home;
