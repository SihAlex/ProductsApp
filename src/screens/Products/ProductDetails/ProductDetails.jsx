import { convert } from "@/utils/uahToDollar";
import { Component } from "react";
import styled from "styled-components";

class ProductDetails extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    alert(`Your response '${this.state.text}' was succesfully submitted!`);
  };

  render() {
    const { product } = this.props;
    return (
      <DetailsContainer>
        <h3>{product.name}</h3>
        <p>Category: {product.category}</p>
        <p>Price (UAH): {product.price}</p>
        <p>Price (USD): {convert(product.price)}</p>
        <form onSubmit={this.onSubmit}>
          <textarea onChange={this.onChange} value={this.state.text}></textarea>
          <button type="submit">Submit commentary</button>
        </form>
      </DetailsContainer>
    );
  }
}

const DetailsContainer = styled.div`
  padding-left: 10%;
`;

export default ProductDetails;
