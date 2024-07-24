import React from 'react';
import PostItem from "./PostItem/PostItem.jsx";

const PostList = ({posts, title, deletePost}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post, index) =>
                <PostItem post={post}
                          key={post.id}
                          number={index + 1}
                          deletePost={deletePost}/>)}
        </div>
    );
};

export default PostList;