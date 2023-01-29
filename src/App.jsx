import "./App.css";
import BestSellerCard from "./components/molecules/BestSellerCard";
import DesignedImages from "./components/molecules/DesignedImages";
import LandingPageText from "./components/molecules/LandingPageText";
import NavbarItems from "./components/molecules/NavbarItems";

function App() {
  return (
    <div>
      <NavbarItems />
      <LandingPageText />
      <BestSellerCard />
      <DesignedImages />
    </div>
  );
}

export default App;
