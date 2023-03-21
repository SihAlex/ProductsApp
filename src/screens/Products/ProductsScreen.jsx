import { useEffect, useState } from "react";
import styled from "styled-components";
import useCount from "@/hooks/useCount";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductsItem from "./ProductItem/ProductItem";
import useTotalCount from "@/hooks/useTotalCount";

const ProductsScreen = ({ products, category }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [count, add, remove] = useCount();
  const [totalCount, renderedCount] = useTotalCount();

  useEffect(() => {
    console.log(`Now selected ${selectedProduct}`);
  }, [selectedProduct]);

  const selectProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <h3>Total: {totalCount}</h3>
      <h3>Selected: {count}</h3>
      <ProductsContainer>
        <Ul>
          {products
            .filter((product) =>
              category ? product.category === category : true
            )
            .map((product) => (
              <ProductsItem
                key={product.id}
                item={product}
                add={add}
                remove={remove}
                renderedCount={renderedCount}
                selectProduct={selectProduct}
              />
            ))}
        </Ul>
        {selectedProduct && <ProductDetails product={selectedProduct} />}
      </ProductsContainer>
    </>
  );
};

const Ul = styled.ul`
  width: 250px;
`;

const ProductsContainer = styled.main`
  display: flex;
`;

export default ProductsScreen;
