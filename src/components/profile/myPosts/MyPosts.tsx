import s from './MyPosts.module.css';
import React from 'react';
import {Post} from './post/Post';

export const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <div>
                    <textarea name="" id=""></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </div>
    )
}