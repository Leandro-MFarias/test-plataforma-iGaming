import styles from "./searchGames.module.css";
import glass from "../../assets/search.png";

import games from "../../data/games.json";
import { useState } from "react";

interface Game {
  id: number;
  category: string;
  name: string;
  image: string;
}

export function SearchGames() {
  const [listSearch, setListSearch] = useState<Game[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    if (!value || value.length < 3) {
      setListSearch([]);
      return;
    }
    const filtered = games.filter((game) =>
      game.name.toLowerCase().includes(value.toLowerCase())
    );

    setListSearch(filtered);
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerInput}>
        <input
          type="text"
          className={styles.input}
          placeholder="Pesquise por jogos e provedores"
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          onChange={(e) => handleInput(e)}
        />
        <img src={glass} alt="Lupa de pesquisa" />
      </div>
      {isOpen && listSearch.length > 0 && (
        <div className={styles.containerList}>
          {listSearch.map((item) => (
            <div key={item.id} className={styles.c}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
