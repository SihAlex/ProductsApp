import styled from "styled-components";
import { categories } from "@/data/dummy";
import { NavLink } from "react-router-dom";
import { setActive } from "@/routes/main";

const Menu = () => {
  return (
    <Ul>
      {categories.map((category) => (
        <li key={category.id}>
          <NavLink to={`category/${category.id}`} style={setActive}>
            {category.name || "All"}
          </NavLink>
        </li>
      ))}
    </Ul>
  );
};

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  & a {
    text-decoration: none;
    font-weight: bold;
    padding-right: 25px;
    text-transform: capitalize;
  }
  & a:hover {
    cursor: pointer;
  }
`;

export default Menu;
