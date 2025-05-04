import GitHubSignInButton from '../../components/github-sign-in-button/github-sign-in-button'
import style from './register.module.css'
import { signup } from './actions'

export default function RegisterPage() {
  return (
    <div className={style.registerContainer}>
    <form className={style.registerForm}>
      <label htmlFor="email">Email</label>
      <input className={style.inputStyle} id="email" name="email" type="email" required />
      <label htmlFor="username">Username</label>
      <input className={style.inputStyle} id="username" name="username" type="text" required />
      <label htmlFor="name">Name</label>
      <input className={style.inputStyle} id="name" name="name" type="text" required />
      <label htmlFor="avatar_url">Avatar URL</label>
      <input className={style.inputStyle}id="avatar_url" name="avatar_url" type="text" required />
      <label htmlFor="password">Password</label>
      <input className={style.inputStyle} id="password" name="password" type="password" required />
      <button className={style.registerButton} formAction={signup}>Sign up</button>
      <p>or</p>
    <GitHubSignInButton />
      <p>All fields are required</p>
    </form>
    </div>
  )
}