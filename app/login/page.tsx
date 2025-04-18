import GitHubSignInButton from '../components/github-sign-in-button/github-sign-in-button'

import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <div>
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
    <GitHubSignInButton />
    </div>
  )
}