import React from 'react';
import s from './../Dialogs.module.css';


type MessageTypeProps = {
    message: string
}

export const Message: React.FC<MessageTypeProps> = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}

