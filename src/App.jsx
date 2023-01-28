import "./App.css";
import BestSellerCard from "./components/molecules/BestSellerCard";
import LandingPageText from "./components/molecules/LandingPageText";
import NavbarItems from "./components/molecules/NavbarItems";

function App() {
  return (
    <div>
      <NavbarItems />
      <LandingPageText />
      <BestSellerCard />
    </div>
  );
}

export default App;
