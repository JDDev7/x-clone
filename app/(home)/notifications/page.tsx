import React from "react";

import PostList from "@/app/components/posts-list/posts-list";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import style from "./notifications.module.css";
async function NotificationsPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();
  
  if (!user) {
    redirect("/login");
  }

  const username = user.user_metadata.preferred_username;
  
  const { data: posts } = await (await supabase)
    .from("posts")
    .select("*, user:users(name, avatar_url, user_name)")
    .textSearch("content", `@${username}`)
    .order("created_at", { ascending: false });

    

  return (
    <section>
      <div className="border-b border-white/20"><h1 className="text-2xl font-bold text-center py-4">Notifications</h1></div>
      <PostList posts={posts} />
    </section>
  );
}

export default NotificationsPage;
