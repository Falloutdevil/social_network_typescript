import s from './MyPosts.module.css';
import React from 'react';
import {Post} from './post/Post';

export const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'My first post', likesCount: 20},

    ];

    return (
        <div className={s.postBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>

                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    <Post message={postsData[0].message}
                          likesCount={postsData[0].likesCount}
                    />
                    <Post message={postsData[1].message}
                          likesCount={postsData[1].likesCount}
                    />

                </div>
            </div>
        </div>
    )
}