import React from 'react'
import './Post.css'
function Post(props) {

    const { linkDirection, imageLink, postTitle, toShopLink } = props

    return (
        <div className='post_main_container'>
            <div className='post_mini_container'>
                <div className='title'>
                    <h4>{postTitle}</h4>
                </div>
                <div className='post_image'>
                    <img src={imageLink} />
                </div>
                <div className='links'>
                    <a href={linkDirection}>{toShopLink}</a>
                </div>
            </div>
        </div>
    )
}

export default Post