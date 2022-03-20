import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';
import React from 'react';

type DialogItemProps = {
    name: string
    id: number
}

export const DialogItem: React.FC<DialogItemProps> = ({name, id}) => {
    let path = '/dialogs/' + id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}
