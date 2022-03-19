import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';
import React from 'react';

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

type MessageTypeProps = {
    message: string
}

const Message: React.FC<MessageTypeProps> = ({message}) => {
  return (
      <div className={s.message}>{message}</div>
  )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               <DialogItem name='Nick' id={1}/>
               <DialogItem name='Pick' id={2}/>
               <DialogItem name='Vica' id={3}/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='123123'/>
                <Message message='sdfsdf'/>
            </div>
        </div>
    )
}