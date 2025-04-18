import { createClient } from "@/utils/supabase/server";
import LoginButton from "./components/LoginButton/LoginButton";
import { redirect } from "next/navigation";

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
  .select("*, users(name, avatar_url, user_name)");

  return (
    <main>
      <LoginButton />

      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </main>
  );
}
