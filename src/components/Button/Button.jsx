import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Button.module.scss";
import { ThemeContext } from "../../contexts/ThemeContext";

const Button = ({ children, className, onClick }) => {
  const { theme } = useContext(ThemeContext);

  const buttonClass = classNames(
    styles.button,
    {
      [styles.light]: theme === "light",
      [styles.dark]: theme === "dark",
    },
    className
  );

  return (
    <button type="button" className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
