import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './myPosts/MyPosts';


export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.coverImg}
                     src="https://images.unsplash.com/photo-1446769357257-5aa1b1bfcd65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                     alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}