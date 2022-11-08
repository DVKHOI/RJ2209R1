import styles from "../styles/Login.module.css";
import { useRouter } from "next/router";
const Login = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.formContent}>
        <h1 className={styles.title}>Login</h1>
        <form autoComplete="off">
          <div className={styles.formInput}>
            <input className={styles.input} type="text" placeholder=" " />
            <label className={styles.lable} htmlFor="username">
              User name
            </label>
          </div>
          <div className={styles.formInput}>
            <input className={styles.input} type="password" placeholder=" " />
            <label className={styles.lable} htmlFor="password">
              Password
            </label>
          </div>
          <button
            type="button"
            className={styles.button}
            onClick={() => router.push("/")}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
