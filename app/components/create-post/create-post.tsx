import React from "react";
import { createClient } from "@/utils/supabase/server";
import style from "./create-post.module.css";
import { Avatar } from "@heroui/react";
function CreatePost({
  userAvatarUrl,
}: {
  userAvatarUrl: string;
}) {
  return (
    <form>
      <div className={style.FormContainer}>
      <Avatar
            radius="full"
            size="md"
            src={userAvatarUrl}
          />
        <textarea
          name="post"
          rows={4}
          placeholder="¿Que dice creatura?"
          className={style.MessageArea}
        />
        <button className={style.PostButton}>Post</button>
      </div>
    </form>
  );
}

export default CreatePost;
