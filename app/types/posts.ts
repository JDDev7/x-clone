import { type Database } from '@/app/types/database';

type PostType = Database['public']['Tables']['posts']['Row'];
type UserType = Database['public']['Tables']['users']['Row'];

export type Post = PostType & {
    user: UserType
}