import React from 'react'
import './PostSlide.css'


function PostSlide(props) {

    const { imgUrl, pageUrl } = props

    return (
        <div className='postslide_main_container'>
            <div className='postslide_mini_container' >
                <img
                    src={imgUrl}
                    alt=''
                />
            </div>
        </div>
    )
}

export default PostSlide