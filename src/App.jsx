import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import ProductsScreen from "screens/Products/ProductsScreen";
import { products } from "data/dummy";
import { Component } from "react";

class App extends Component {
  state = {
    category: "",
    isLoggedIn: false,
  };

  changeCategory = (newCategory) => {
    this.setState({ category: newCategory });
  };

  toggleLogIn = () => {
    this.setState((prev) => ({ ...prev, isLoggedIn: !prev.isLoggedIn }));
  };

  render() {
    return (
      <>
        <Header
          changeCategory={this.changeCategory}
          isLoggedIn={this.state.isLoggedIn}
          toggleLogIn={this.toggleLogIn}
        />
        <ProductsScreen products={products} category={this.state.category} />
        <Footer />
      </>
    );
  }
}

export default App;
