"use server"

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const signIn = async () => {
    const supabase = await createClient()
    const {error, data} =await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: process.env.LOCAL_GITHUB_CALLBACK,
      },
    });

    if (error) {
      console.log(error)
    } else {

      return redirect(data.url)
    }
  }