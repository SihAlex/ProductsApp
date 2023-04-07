import { AuthContextProvider } from "./contexts/authContext";
import { ProductsContextProvider } from "./contexts/productsContext";
import MainRouter from "./routes/main";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <MainRouter />
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
