"use client"
import { createClient } from '@/utils/supabase/client'
import style from './sign-out-button.module.css'


import React from 'react'




function SignOutButton() {


  const supabase = createClient()

  const signOut = async () => {
      await supabase.auth.signOut()
      window.location.reload()
    }

  return (

    <button onClick={signOut} className={style.signOutButton}>Sign Out</button>

  )
}

export default SignOutButton