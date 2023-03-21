import { Component } from "react";
import styled from "styled-components";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductsItem from "./ProductItem/ProductItem";

class ProductsScreen extends Component {
  state = {
    count: 0,
    totalCount: 0,
    selectedProduct: null,
  };

  add = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };
  remove = () => {
    this.setState((prev) => ({
      count: prev.count - 1,
    }));
  };
  renderedCount = (unmount) => {
    this.setState((prev) => ({
      totalCount: unmount ? prev.totalCount - 1 : prev.totalCount + 1,
    }));
  };
  selectProduct = (product) => {
    this.setState({ selectedProduct: product });
  };
  render() {
    const { products, category } = this.props;
    const { count, totalCount, selectedProduct } = this.state;

    return (
      <>
        <h3>Total: {totalCount}</h3>
        <h3>Selected: {count}</h3>
        <ProductsContainer>
          <Ul>
            {products
              .filter((product) =>
                category ? product.category === this.props.category : true
              )
              .map((product) => (
                <ProductsItem
                  key={product.id}
                  item={product}
                  add={this.add}
                  remove={this.remove}
                  renderedCount={this.renderedCount}
                  selectProduct={this.selectProduct}
                />
              ))}
          </Ul>
          {selectedProduct && <ProductDetails product={selectedProduct} />}
        </ProductsContainer>
      </>
    );
  }
}

const Ul = styled.ul`
  width: 250px;
`;

const ProductsContainer = styled.main`
  display: flex;
`;

export default ProductsScreen;
