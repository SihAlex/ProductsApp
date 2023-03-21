import styled from "styled-components";

import { categories } from "@/data/dummy";

const Menu = ({ changeCategory }) => {
  return (
    <Ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button onClick={() => changeCategory(category.name)}>
            {category.name}
          </button>
        </li>
      ))}
    </Ul>
  );
};

const Ul = styled.ul`
  margin: 0;
`;

export default Menu;
