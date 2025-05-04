'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
export async function signup(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  // const data = {
  //   email: formData.get('email') as string,
  //   password: formData.get('password') as string,
  // }

  const { error } = await supabase.auth.signUp(
    {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      options: {
        data: {
          name: formData.get('name') as string,
          user_name: formData.get('username') as string,
          avatar_url: formData.get('avatar_url') as string,
        }
      }
    }
  )

  if (error) {
    console.log(error)
  }

  revalidatePath('/', 'layout')
  redirect('/')
}