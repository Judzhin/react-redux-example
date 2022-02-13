import React from 'react';
import Post from "./Post";
import Button from "@mui/material/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {loadPosts} from "./actions";

/**
 *
 * @returns {*}
 * @constructor
 */
export default function AsyncPosts() {

    const dispatch = useDispatch();
    // const posts = useSelector(state => {
    //     return state.posts.asyncPosts;
    // });
    const posts = useSelector(state => state.posts.asyncPosts);

    if (!posts.length) {
        return (
            <div className={'text-center'}>
                <Button onClick={(e) => dispatch(loadPosts())}>Load Posts</Button>
            </div>
        )
    }

    return posts.map(post => <Post key={post.id} post={post}/>)
}