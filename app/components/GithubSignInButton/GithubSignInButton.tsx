"use client"

import React from 'react'
import style from './GithubSignInButton.module.css'
import { signIn } from './actions';

function GitHubSignInButton() {
  return (
    <button onClick={() => {signIn()}} className={style.githubButton}>Sign in with Github</button>
  )
}

export default GitHubSignInButton