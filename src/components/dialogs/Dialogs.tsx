import React from 'react';
import s from './Dialogs.module.css';
import {Message} from './message.tsx/Message';
import {DialogItem} from './dialogItem/DialogItem';


export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Nick'},
        {id: 2, name: 'Pick'},
        {id: 3, name: 'Vica'},
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Go'},
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}