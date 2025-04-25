import React from "react";
import { createClient } from "@/utils/supabase/server";
import style from "./create-post.module.css";
import { Avatar } from "@heroui/react";
import { revalidatePath } from "next/cache";
import CreatePostTextArea from "./create-post-textarea";


function CreatePost({ userAvatarUrl }: { userAvatarUrl: string }) {
  const addPost = async (formData: FormData) => {
    "use server";
    // recuperar el contenido del formulario
    const supabase = createClient();
    const content = formData.get("content");

    if (content === null) return;
    const {
      data: { user },
    } = await (await supabase).auth.getUser();

    if (user === null) {
      return;
    }
    // insertar el contenido en la tabla de posts
    await (await supabase).from("posts").insert({ content, user_id: user.id });
    
    revalidatePath("/")

  };

  return (
    <form action={addPost} className={style.FormContainer}>
      <Avatar
        radius="full"
        size="md"
        src={userAvatarUrl}
        className={style.AvatarImg}
      />
      <div className={style.InsertPostContainer}>
        <CreatePostTextArea />
        <button className={style.PostButton} type="submit">
          Post
        </button>
      </div>
    </form>
  );
}

export default CreatePost;
