import { createClient } from "@/utils/supabase/server";
import LoginButton from "./components/LoginButton/LoginButton";




export default async function Home() {
  const supabase = createClient();
  const { data: posts } = await (await supabase).from("posts").select("*");
  



  return (
    <main>
      <LoginButton />

      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </main>
  );
}
