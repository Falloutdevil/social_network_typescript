import React from 'react';
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.coverImg}
                     src="https://images.unsplash.com/photo-1446769357257-5aa1b1bfcd65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                     alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}