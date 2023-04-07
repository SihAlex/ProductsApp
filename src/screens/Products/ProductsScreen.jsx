import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import useCount from "@/hooks/useCount";
import ProductsItem from "./ProductItem/ProductItem";
import useTotalCount from "@/hooks/useTotalCount";
import { Outlet, useLocation, useParams } from "react-router-dom";
import styles from "./ProductsScreen.module.css";
import { TransitionGroup } from "react-transition-group";
import { ProductsContext } from "@/contexts/productsContext";

const ProductsScreen = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [count, add, remove] = useCount();
  const [totalCount, renderedCount] = useTotalCount();
  const { products } = useContext(ProductsContext);

  const [historyRoute, setHistoryRoute] = useState("");

  const { categoryId, productId } = useParams();
  const location = useLocation();

  useEffect(() => {
    console.log(`Now selected ${selectedProduct?.name}`);
  }, [selectedProduct]);

  useEffect(() => {
    setHistoryRoute((prev) => `${prev} ${location.pathname}`);
  }, [categoryId, productId]);

  const selectProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <Container>
      <h3>History: {historyRoute}</h3>
      <h3>Total: {totalCount}</h3>
      <h3>Selected: {count}</h3>
      <ProductsContainer>
        <TransitionGroup>
          <ul className={styles.list}>
            {products
              .filter((product) => {
                return categoryId !== undefined && +categoryId !== 0
                  ? product.categoryId === +categoryId
                  : true;
              })
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
          </ul>
        </TransitionGroup>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </ProductsContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  width: 75%;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

export default ProductsScreen;
