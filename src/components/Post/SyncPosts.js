import React from 'react';
import Post from "./Post";
import {connect} from "react-redux";

// export default function SyncPosts({posts}) {
//     if (!posts.length) {
//         return <p className={'text-center'}>Posts is empty!</p>
//     }
//     return posts.map(post => <Post key={post.id} post={post}/>)
// }

const SyncPosts = ({posts}) => {
    if (!posts.length) {
        return <p className={'text-center'}>Posts is empty!</p>
    }
    return posts.map(post => <Post key={post.id} post={post}/>)
}

const mapStateToProps = state => {
    // console.log(state);
    // return state;

    return {
        posts: state.posts.syncPosts
    }
};


// export default connect(null, null)(SyncPosts);
export default connect(mapStateToProps, null)(SyncPosts);