import styles from "./header.module.css";
import bell from "../../assets/bell.png";
import { useState } from "react";

export function Header() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const navItems = ["AO VIVO", "ESPORTES", "CASSINO", "CASSINO AO VIVO"];

  return (
    <header className={styles.header}>
      <img src="/uxbet-logo.png" alt="logo da uxbet" className={styles.logo} />
      <nav>
        <ul className="">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveIndex(index)}
              className={activeIndex === index ? styles.navActive : ""}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.containerButtons}>
        <div className={styles.notification}>
          <img src={bell} alt="Notificação" />
          <div className={styles.couterNotification}>
            <span>1</span>
          </div>
        </div>
        <button className={styles.buttonRegister}>Registre-se</button>
        <button className={styles.buttonLogin}>Entrar</button>
      </div>
    </header>
  );
}
