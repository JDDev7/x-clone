import Link from "next/link";
import GitHubSignInButton from "../../components/github-sign-in-button/github-sign-in-button";
import style from "./login.module.css";

import { login } from "./actions";

export default function LoginPage() {
  return (
    <div className={style.loginContainer}>
      <form className={style.loginForm}>
        <label htmlFor="email">Email</label>
        <input
          className={style.inputStyle}
          id="email"
          name="email"
          type="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          className={style.inputStyle}
          id="password"
          name="password"
          type="password"
          required
        />
        <button formAction={login} className={style.loginButton}>
          Log in
        </button>
        <div className="flex gap-1 justify-center">
          <p>Don't have an account?</p>
          <Link href="/register">Register</Link>
        </div>
          <p>or</p>
        <GitHubSignInButton />
      </form>
    </div>
  );
}
