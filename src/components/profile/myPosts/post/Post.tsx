import React from 'react';

import s from './Post.module.css';

type MessageType = {
    message: string
    likesCount: number
}


export const Post: React.FC<MessageType> = (props) => {



    return (
        <div className={s.item}>
            <img src="https://download-cs.org/uploads/posts/2020-06/1593142164_13.jpg" alt="ava"/>
            {props.message}
            <div>
                <span> like {props.likesCount}</span>
            </div>
        </div>
    )
}