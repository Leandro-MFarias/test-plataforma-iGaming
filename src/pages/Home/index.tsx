import { Banners } from "../../components/Banners";
import { Categories } from "../../components/Categories";
import { Footer } from "../../components/Footer";
import { Games } from "../../components/Games";
import { Header } from "../../components/Header";
import { MenuBottom } from "../../components/MenuBottom";
import { SearchGames } from "../../components/SearchGames";
import { CategoriesProvider } from "../../context/CategoriesContext";

export function Home() {
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
