import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostByID } from './postsSlice'

import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'



const SinglePostPage = () => {
    const post = useSelector(state => selectPostByID(state, postID))

    if (!post) {
        return (
            <section>
                <h2>No post found</h2>
            </section>
        )
    }

    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article> 
    )
}

export default SinglePostPage