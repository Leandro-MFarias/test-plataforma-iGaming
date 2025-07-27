import { Header } from "./components/Header";
import { Banners } from "./components/Banners";
import { SearchGames } from "./components/SearchGames";
import { Categories } from "./components/Categories";
import { CategoriesProvider } from "./context/CategoriesContext";
import { Games } from "./components/Games";
import { Footer } from "./components/Footer";
import { MenuBottom } from "./components/MenuBottom";

function App() {
  return (
    <div>
      {/* HEADER */}
      <Header />

      {/* BANNER */}
      <Banners />

      {/* GAMES */}
      <div className="containerMain">
        <SearchGames />
        <CategoriesProvider>
          <Categories />
          <Games />
        </CategoriesProvider>
      </div>

      <Footer />
      <MenuBottom />
    </div>
  );
}

export default App;
