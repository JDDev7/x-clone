// 'use server'

// import { createClient } from '@/utils/supabase/server';
// import { revalidatePath } from 'next/cache';

// export const signOut = async () => {
//     const supabase = await createClient()
//     await supabase.auth.signOut()
//     revalidatePath('/')
//     return
//   }