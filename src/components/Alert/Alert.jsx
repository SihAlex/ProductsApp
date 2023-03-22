import { useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import Button from "../Button/Button";
import styles from "./Alert.module.css";

const Alert = ({ message, show, setShow }) => {
  const ref = useRef(null);

  const close = () => setShow(false);

  return createPortal(
    <CSSTransition
      in={show}
      nodeRef={ref}
      timeout={200}
      classNames={{
        enterActive: styles["alert-enter"],
        enterDone: styles["alert-enter-active"],
        exitActive: styles["alert-exit-active"],
        exitDone: styles["alert-exit"],
      }}
      unmountOnExit
    >
      <MessageContainer ref={ref}>
        <p>{message}</p>
        <Button onClick={close}>OK</Button>
      </MessageContainer>
    </CSSTransition>,
    document.body
  );
};

const MessageContainer = styled.div`
  position: absolute;
  top: 10%;
  right: 50%;
  transform: translateX(50%);
  z-index: 999;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 2px 10px 0px #616161;
  border-radius: 20px;
`;

export default Alert;
