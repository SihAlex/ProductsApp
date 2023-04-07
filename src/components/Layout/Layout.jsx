import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "@/store/reducers";
import { getPhotos } from "@/store/actions";

const Layout = () => {
  const headerRef = useRef(null);
  const counter = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementBy5 = () => {
    dispatch(incrementByAmount(5));
  };

  const handleDecrementBy5 = () => {
    dispatch(decrementByAmount(5));
  };

  const handlePhotos = () => {
    dispatch(getPhotos());
  };

  return (
    <>
      <Header headerRef={headerRef} />

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrementBy5}>Increment by 5</button>
      <button onClick={handleDecrementBy5}>Decrement by 5</button>

      <p>{counter}</p>

      <button onClick={handlePhotos}>Fetch photos</button>

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
