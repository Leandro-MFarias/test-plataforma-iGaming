import { useCategory } from "../../context/CategoriesContext";
import games from "../../data/games.json";
import { categories } from "../util/getCategories";
import styles from "./games.module.css";

export function Games() {
  const { selectedCategory } = useCategory();

  const category = categories.find(
    (category) => category.category === selectedCategory
  );

  return (
    <div className={styles.games}>
      {selectedCategory === "todos" ? (
        <>
          {categories.map((category, index) => (
            <div key={index} className={styles.containerCategory}>
              <div className={styles.headerCategory}>
                <div>
                  <img src={category.icon} alt="ícone da categoria" />
                  <p>{category.category}</p>
                </div>
                <div>
                  <button className={styles.seeAll}>Ver todos</button>
                  <span className={styles.counter}>
                    {
                      games.filter(
                        (game) => game.category === category.category
                      ).length
                    }
                  </span>
                </div>
              </div>

              <div className={styles.scrollGames}>
                {games
                  .filter((game) => game.category === category.category)
                  .map((game) => (
                    <img key={game.id} src={game.image} alt={game.name} />
                  ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <div className={styles.containerCategory}>
            <div className={styles.headerCategory}>
              <div>
                <img src={category?.icon} alt="ícone da categoria" />
                <p>{category?.category}</p>
              </div>
              <div>
                <span className={styles.seeAll}>Ver todos</span>
                <span className={styles.counter}>
                  {
                    games.filter((game) => game.category === category?.category)
                      .length
                  }
                </span>
              </div>
            </div>

            <div className={styles.listGames}>
              {games
                .filter((game) => game.category === category?.category)
                .map((game) => (
                  <img key={game.id} src={game.image} alt={game.name} />
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
