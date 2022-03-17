import s from './MyPosts.module.css';
import React from 'react';
import {Post} from './post/Post';

export const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post message="Hi, how are you?"
                          likesCount={15}
                    />
                    <Post message="My first post"
                          likesCount={20}
                    />
                </div>
            </div>
        </div>
    )
}