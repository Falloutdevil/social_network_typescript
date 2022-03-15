import React from 'react';
import s from './Profile.module.css'


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
            <div>
                my posts
                <div>
                    <div>
                        new post
                    </div>
                    <div className={s.posts}>
                        <div className={s.item}>
                            post 1
                        </div>
                        <div className={s.item}>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}