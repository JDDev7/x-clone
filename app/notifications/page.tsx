import React from 'react'
import CreatePost from '../components/create-post/create-post'
import PostList from '../components/posts-list/posts-list'
import { createClient } from "@/utils/supabase/server";
import { redirect } from 'next/navigation';
import style from './notifications.module.css'
async function NotificationsPage() {
      const supabase = createClient();
    
      const {
        data: { user },
      } = await (await supabase).auth.getUser();
    
      if (!user) {
        redirect("/login");
      }
    
      const { data: posts } = await (await supabase)
        .from("posts")
        .select("*, user:users(name, avatar_url, user_name)")
        
        .order("created_at", { ascending: false });
    
  return (
    <section className={style.centralSection}>
    <PostList posts={posts}/>
  </section>
  )
}

export default NotificationsPage