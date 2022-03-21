import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

let posts: PostsType[] = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'My first post', likesCount: 20},

];

let dialogs: DialogsType[] = [
    {id: 1, name: 'Nick'},
    {id: 2, name: 'Pick'},
    {id: 3, name: 'Vica'},
];

let messages: MessagesType[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'Go'},
];


ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);