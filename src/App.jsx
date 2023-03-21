import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import ProductsScreen from "screens/Products/ProductsScreen";
import { products } from "data/dummy";
import { useState } from "react";

const App = () => {
  const [category, setCategory] = useState("");

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <>
      <Header changeCategory={changeCategory} />
      <ProductsScreen products={products} category={category} />
      <Footer />
    </>
  );
};

export default App;
