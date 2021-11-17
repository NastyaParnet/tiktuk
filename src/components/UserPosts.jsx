import React from "react";
import UserVideo from "./UserVideo";

const UserPosts = ({posts}) => {
    return (
        <div className='user__posts'>
            {posts.map(post => {
                return <UserVideo post={post} key={post.id}/>
            })}
        </div>
    )
}

export default UserPosts