import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {PostsType} from '../../index';

type PropsType = {
    posts: PostsType[]
}

export const Profile: React.FC<PropsType> = ({posts}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}