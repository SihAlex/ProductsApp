import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "components/Header/Header";

const Layout = () => {
  const headerRef = useRef(null);

  return (
    <>
      <Header headerRef={headerRef} />

      <ScrollView offset={headerRef.current && headerRef.current.clientHeight}>
        <Content>
          <Outlet />
        </Content>
      </ScrollView>
    </>
  );
};

const ScrollView = styled.div.attrs((props) => ({
  offset: (props.offset || 86) + "px",
}))`
  ${(props) => `height: calc(100vh - ${props.offset})`};
  overflow-y: auto;
  background-color: #202020;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #8d8888;
  }
`;

const Content = styled.main`
  min-height: calc(100% - 20px);
  padding: 10px 50px 10px 50px;
  margin: 0 auto;
  width: 75%;
  background-color: white;
`;

export default Layout;
