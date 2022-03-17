import React from 'react';

import s from './Post.module.css';

export const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://download-cs.org/uploads/posts/2020-06/1593142164_13.jpg" alt="ava"/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}