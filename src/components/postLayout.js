import React from 'react';
import PostData from './postData';

const PostLayout = props => {
    const { match, posts } = props;
    const postId = parseInt(match.params.id)
    
    return posts.default.map(post => 
    post.id === postId ? (<PostData postData={post} key={`post-id-${postId}`}/>) : null);
};


export default PostLayout;