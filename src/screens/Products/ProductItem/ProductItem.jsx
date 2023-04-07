import { setActive } from "@/routes/main";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import styles from "./ProductItem.module.css";

const ProductsItem = ({ renderedCount, item, add, remove }) => {
  const [value, setValue] = useState(false);
  const ref = useRef(null);

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
    <CSSTransition
      in={"true"}
      nodeRef={ref}
      timeout={500}
      classNames={{
        enterActive: styles["product-enter"],
        enterDone: styles["product-enter-active"],
        exitActive: styles["product-exit-active"],
        exitDone: styles["product-exit"],
      }}
    >
      <Li ref={ref}>
        <NavLink to={`${item.id}`} style={setActive}>
          {item.name || "All"}
        </NavLink>
        <input type="checkbox" onChange={handleCheck} value={value} />
      </Li>
    </CSSTransition>
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
