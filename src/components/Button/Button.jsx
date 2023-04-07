import { Spin } from "antd";
import styled from "styled-components";

const Button = (props) => {
  const { onClick, children, loading } = props;
  return (
    <StyledButton {...props} onClick={onClick}>
      {loading && <Spin size="small" style={{ marginRight: "5px" }} />}
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: greenyellow;
  border: none;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 10px;
  font-weight: bold;
  &:hover {
    background-color: #92da28;
  }
  &:active {
    background-color: #93da2849;
  }
`;

export default Button;
