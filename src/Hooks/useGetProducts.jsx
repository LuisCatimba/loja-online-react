import { use, useState } from "react";
import db from "../db/db.json";

//Hook

import { useEffect } from "react";

export const useGetProduct = (query) => {
  const products = db;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    const res = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    setProduct(res);
  }, [query]);

  return product;
};
