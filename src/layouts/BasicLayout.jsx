import PropTypes from "prop-types";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import styles from "./BasicLayout.module.scss";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import classNames from "classnames";
const BasicLayout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <NavigationBar />
      <div
        className={classNames(
          styles.container,
          theme === "light" ? styles.dark : styles.light
        )}
      >
        {children}
      </div>
    </>
  );
};

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
