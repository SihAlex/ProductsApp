import useLogin from "@/hooks/useLogin";
import Menu from "components/Menu/Menu";
import styled from "styled-components";

const Header = ({ changeCategory }) => {
  const [isLoggedIn, toggleLogIn] = useLogin();

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
