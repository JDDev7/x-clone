"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import SignOutButton from "../sign-out-button/sign-out-button";


function LoginButton() {
  const supabase = createClient();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      console.log(data.session);
    };

    getSession();
  }, []);


  return session === null ? (
    <button>
      <Link href="/login">Log in</Link>
    </button>
  ) : (
    <SignOutButton />
  );
}

export default LoginButton;
