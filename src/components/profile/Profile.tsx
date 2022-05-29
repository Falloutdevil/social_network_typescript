import React from 'react';
// import s from './Profile.module.css'
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';



export const Profile: React.FC<ProfilePageType> = ({posts}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}