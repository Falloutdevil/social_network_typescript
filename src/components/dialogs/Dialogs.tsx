import React from 'react';
import s from './Dialogs.module.css';
import {Message} from './message.tsx/Message';
import {DialogItem} from './dialogItem/DialogItem';
import {DialogsType, MessagesType} from '../../index';

type PropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export const Dialogs: React.FC<PropsType> = ({dialogs, messages}) => {

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