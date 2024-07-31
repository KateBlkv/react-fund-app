import React from 'react';
import PostItem from "./PostItem/PostItem.jsx";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const PostList = ({posts, title, deletePost}) => {
    if (posts.length === 0) {
        return (
            <h1 style={{textAlign: 'center'}}>No posts!</h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem post={post}
                                  number={index + 1}
                                  deletePost={deletePost}/>
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    );
};

export default PostList;