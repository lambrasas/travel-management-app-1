import { Link } from "react-router-dom";
import Button from "../Button/Button"; // Make sure this path is correct
import Logo from "../../assets/logo.png";
import styles from "./NavigationBar.module.scss";
import { navigationBarLinks } from "../../routes/consts";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const NavigationBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="Logo" />
      </div>
      <nav className={styles.nav}>
        {navigationBarLinks.map((link) => (
          <Link key={link.path} to={link.path} className={styles.navLink}>
            {link.title}
          </Link>
        ))}
      </nav>
      <Button onClick={toggleTheme}>
        {theme === "light" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </Button>
      <Button theme={theme}>Log out</Button>
    </header>
  );
};

export default NavigationBar;
