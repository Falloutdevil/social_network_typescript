import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';
import React from 'react';

type MessageTypeProps = {
    message: string
}

const Message: React.FC<MessageTypeProps> = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}

type DialogItemProps = {
    name: string
    id: number
}

const DialogItem: React.FC<DialogItemProps> = ({name, id}) => {
    let path = '/dialogs/' + id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Nick'},
        {id: 2, name: 'Pick'},
        {id: 3, name: 'Vica'},
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Go'},
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>

            </div>
        </div>
    )
}