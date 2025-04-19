import { createClient } from "@/utils/supabase/server";
import LoginButton from "./components/login-button/login-button";
import { redirect } from "next/navigation";

import style from "./page.module.css";
import PostList from "./components/posts-list/posts-list";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();
  if (!user) {
    redirect("/login");
  }

  const { data: posts } = await (await supabase)
    .from("posts")
    .select("*, user:users(name, avatar_url, user_name)");

  return (
    <main className={style.mainContainer}>
      <LoginButton />
      <section className={style.centralSection}>

        <PostList posts={posts}/>
      </section>
    </main>
  );
}
