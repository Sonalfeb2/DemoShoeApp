import ShoesForm from "./components/ShoesForm";
import Cart from "./components/Cart";
import "./Home.css";
import { CartContextProvider } from "./store/CartContext";
const Home = () => {
  return (
    <CartContextProvider>
      <header>
        <h1>Demo Shoes App</h1>
        <Cart />
      </header>
      <ShoesForm />
    </CartContextProvider>
  );
};
export default Home;
