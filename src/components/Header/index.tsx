import styles from "./header.module.css";
import bell from "../../assets/bell.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

export function Header() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [user, setUser] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("account");
    if (!stored) return;

    const user = JSON.parse(stored);
    setUser(user.name);
  }, []);

  function logout() {
    setUser(null);
    navigate("/login");
  }

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
        {user ? (
          <div className={styles.userDropdown}>
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className={styles.userButton}
            >
              {user}
            </button>

            {showDropdown && (
              <div className={styles.dropdown}>
                <p onClick={logout} className={styles.logout}>
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to={"/register"}>
              <button className={styles.buttonRegister}>Registre-se</button>
            </Link>
            <Link to={"/login"}>
              <button className={styles.buttonLogin}>Entrar</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
