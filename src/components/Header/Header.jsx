import { AuthContext } from "@/contexts/authContext";
import { Modal } from "antd";
import Menu from "components/Menu/Menu";
import { useContext, useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import SignInForm from "./SignInForm/SignInForm";
import { useFormik } from "formik";
import * as yup from "yup";

const Header = ({ headerRef }) => {
  const { user, signIn, signOut } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const usernameNotLongEnough = "Username must be at least 3 characters";
  const requiredField = (fieldName) => `${fieldName} is required.`;

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, usernameNotLongEnough)
      .max(40)
      .required(requiredField("Username")),
    password: yup
      .string()
      .matches(/^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).*$/)
      .required(requiredField("Password")),
  });

  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
    formik.resetForm();
  };

  const handleSubmitLogin = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      onCloseModal();
      setConfirmLoading(false);
      signIn();
    }, 2000);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleSubmitLogin();
    },
  });

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
            onClick={formik.handleSubmit}
          >
            Sign In
          </Button>,
        ]}
      >
        <SignInForm formik={formik} onSubmit={handleSubmitLogin} />
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
