import styles from "./menuBottom.module.css";
import dice from "../../assets/dice.svg";
import doubleDice from "../../assets/double-dice.svg";
import gift from "../../assets/gift.svg";
import soccer from "../../assets/soccer.svg";
import { useState } from "react";

export function MenuBottom() {
  const [activeItem, setActiveItem] = useState(0);

  const menuList = [
    { img: dice, name: "Jogos" },
    { img: doubleDice, name: "Cassino ao vivo" },
    { img: gift, name: "Promoções" },
    { img: soccer, name: "Esportes" },
  ];

  return (
    <nav className={styles.nav}>
      <ul>
        {menuList.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveItem(index)}
            className={`${styles.item} ${
              activeItem === index && styles.active
            }`}
          >
            <img
              src={item.img}
              alt={item.name}
              className={`${activeItem === index && styles.active}`}
            />
            <span className={`${activeItem === index && styles.active}`}>
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
