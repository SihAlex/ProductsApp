import { useEffect } from "react";
import { createContext, useState } from "react";

export const ProductsContext = createContext({});

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const savedProducts = await localStorage.getItem("products");
      setProducts(JSON.parse(savedProducts) ?? []);
    })();
  }, []);

  const addProduct = async (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    await localStorage.setItem(
      "products",
      JSON.stringify([...products, newProduct])
    );
  };

  const productsState = {
    products,
    addProduct,
  };

  return (
    <ProductsContext.Provider value={productsState}>
      {props.children}
    </ProductsContext.Provider>
  );
};
