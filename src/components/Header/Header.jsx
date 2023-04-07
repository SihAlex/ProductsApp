import { AuthContext } from "@/contexts/authContext";
import { setActive } from "@/routes/main";
import { Form, Modal } from "antd";
import Menu from "components/Menu/Menu";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button/Button";
import SignInForm from "./SignInForm/SignInForm";

const Header = ({ headerRef }) => {
  const { user, signIn, signOut } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [form] = Form.useForm();

  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
    form.resetFields();
  };

  const handleSubmitLogin = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      onCloseModal();
      setConfirmLoading(false);
      signIn();
    }, 2000);
  };

  return (
    <HeaderContainer ref={headerRef}>
      <Menu />
      <Button onClick={user.isLoggedIn ? signOut : onOpenModal}>
        {user.isLoggedIn ? "Sign Out" : "Sign In"}
      </Button>
      <Modal
        title={"Sign In"}
        open={showModal}
        onCancel={onCloseModal}
        footer={[
          <Button
            key="back"
            style={{ marginRight: "10px" }}
            onClick={onCloseModal}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={confirmLoading}
            onClick={form.submit}
          >
            Sign In
          </Button>,
        ]}
      >
        <SignInForm form={form} onSubmit={handleSubmitLogin} />
      </Modal>
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
