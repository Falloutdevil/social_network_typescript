import s from './MyPosts.module.css';
import React from 'react';
import {Post} from './post/Post';
import {ProfilePageType} from '../../../redux/state';





export const MyPosts: React.FC<ProfilePageType> = ({posts}) => {

    let postsElements = posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <div>
                        <textarea>1</textarea>
                    </div>

                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}