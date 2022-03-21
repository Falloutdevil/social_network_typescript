import React from 'react';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import {DialogsType, MessagesType, PostsType} from './index';

type PropsType = {
    posts: PostsType[]
    dialogs: DialogsType[]
    messages: MessagesType[]
}

const App: React.FC<PropsType> = ({posts, dialogs, messages}) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={ () => <Profile posts={posts}/>}/>
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={dialogs} messages={messages}/>}/>
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
