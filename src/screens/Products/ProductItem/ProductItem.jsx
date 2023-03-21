import { useEffect } from "react";
import styled from "styled-components";

const ProductsItem = ({ renderedCount, item, selectProduct, add, remove }) => {
  useEffect(() => {
    renderedCount();
    return () => renderedCount(true);
  }, []);

  const handleCheck = (e) => {
    e.target.checked ? add() : remove();
  };

  return (
    <Li>
      <h3>
        <a onClick={() => selectProduct(item)}>{item.name}</a>
      </h3>
      <input type="checkbox" onChange={handleCheck} />
    </Li>
  );
};

const Li = styled.li`
  display: flex;
  justify-content: space-between;
`;

export default ProductsItem;
