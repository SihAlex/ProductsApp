import { createContext, useState } from "react";

export const CategoryContext = createContext({});

export const CategoryContextProvider = (props) => {
  const [category, setCategory] = useState("");

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  };

  const categoryState = {
    category,
    changeCategory,
  };

  return (
    <CategoryContext.Provider value={categoryState}>
      {props.children}
    </CategoryContext.Provider>
  );
};
