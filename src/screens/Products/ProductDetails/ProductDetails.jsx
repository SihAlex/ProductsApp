import { convert } from "@/utils/uahToDollar";
import { useState } from "react";
import styled from "styled-components";

const ProductDetails = ({ product }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Your response '${text}' was succesfully submitted!`);
  };

  return (
    <DetailsContainer>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price (UAH): {product.price}</p>
      <p>Price (USD): {convert(product.price)}</p>
      <form onSubmit={onSubmit}>
        <textarea onChange={onChange} value={text}></textarea>
        <button type="submit">Submit commentary</button>
      </form>
    </DetailsContainer>
  );
};

const DetailsContainer = styled.div`
  padding-left: 10%;
`;

export default ProductDetails;
