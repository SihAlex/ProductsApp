import { setActive } from "@/routes/main";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ProductsItem = ({ renderedCount, item, add, remove }) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    renderedCount();
    return () => {
      renderedCount(true);
    };
  }, []);

  const handleCheck = (e) => {
    setValue((prev) => !prev);
    e.target.checked ? add() : remove();
  };

  return (
    <Li>
      <NavLink to={`${item.id}`} style={setActive}>
        {item.name || "All"}
      </NavLink>
      <input type="checkbox" onChange={handleCheck} value={value} />
    </Li>
  );
};

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: #383838;
  padding: 5px;
  margin-bottom: 5px;
`;

export default ProductsItem;
