import React from 'react'
import PostCard from '../post-card/post-card';
//TODO: fix the types
function PostList({posts}) {
  return (
    <>
    
          {posts?.map((post) => {
            const { id, user, content } = post;
    
            const {
              user_name: userName,
              name: userFullName,
              avatar_url: avatarUrl,
            } = user;
            return (
                //TODO: add some padding between cards
              <PostCard
                key={id}
                content={content}
                userName={userName}
                userFullName={userFullName}
                avatarUrl={avatarUrl}
              />
            );
          })}
    </>
  )
}

export default PostList