import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { ROUTES } from "../../routes/consts";
import styles from "./Login.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import classNames from "classnames";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login Attempt:", email, password);
    navigate(ROUTES.ORDERS);
  };

  return (
    <div>
      <div className={styles.formContainer}>
        <div className={styles.formTitle}>Login</div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.fullWidth}
            required
          />
          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.fullWidth}
            required
          />
          <Button
            type="submit"
            theme={theme}
            className={classNames(styles.loginButton, styles.dark)}
            onClick={handleSubmit}
          >
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
