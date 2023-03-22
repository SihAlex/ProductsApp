import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <Creds>@SihAlex</Creds>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #383838;
  width: 100%;
  min-height: 50px;
  box-shadow: 0px 0px 10px 2px #202020;
`;

const Creds = styled.p`
  color: white;
  font-weight: bold;
  text-align: center;
`;

export default Footer;
