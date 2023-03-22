import { AuthContext } from "@/contexts/authContext";
import Menu from "components/Menu/Menu";
import { useContext } from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const Header = ({ headerRef }) => {
  const { user, signIn, signOut } = useContext(AuthContext);

  return (
    <HeaderContainer ref={headerRef}>
      <Menu />
      <Button onClick={user.isLoggedIn ? signOut : signIn}>
        {user.isLoggedIn ? "Sign Out" : "Sign In"}
      </Button>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #3a3838;
  z-index: 999;
  box-shadow: 0px 0px 10px 2px #202020;
`;

export default Header;
