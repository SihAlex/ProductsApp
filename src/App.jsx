import { AuthContextProvider } from "./contexts/authContext";
import MainRouter from "./routes/main";

const App = () => {
  return (
    <AuthContextProvider>
      <MainRouter />
    </AuthContextProvider>
  );
};

export default App;
