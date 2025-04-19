import { createClient } from "@/utils/supabase/server";
import LoginButton from "./components/login-button/login-button";
import { redirect } from "next/navigation";
import PostCard from "./components/post-card/post-card";

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
    <main>
      <LoginButton />

      {posts?.map((post) => {
        const { id, user, content } = post;

        const {
          user_name: userName,
          name: userFullName,
          avatar_url: avatarUrl,
        } = user;
        return (
          <PostCard
            key={id}
            content={content}
            userName={userName}
            userFullName={userFullName}
            avatarUrl={avatarUrl}
          />
        );
      })}
    </main>
  );
}
