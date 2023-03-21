import Menu from "components/Menu/Menu";
import styled from "styled-components";

const Header = ({ changeCategory, toggleLogIn, isLoggedIn }) => {
  return (
    <HeaderContainer>
      <Menu changeCategory={changeCategory} />
      <button onClick={toggleLogIn}>{isLoggedIn ? "Log Out" : "Log In"}</button>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: azure;
  width: 100%;
  min-height: 50px;
`;

export default Header;
