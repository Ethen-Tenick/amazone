import React from 'react'
import './Home.css'
import Post from '../Components/Post'
import SignIn from '../Functions/SignIn'
import PostSlide from '../Components/PostSlide'

function Home() {

    // post component rectangle
    // props : link to go when clicked ,img of cover ,title of post,see more or shop now {at the bottom}

    // the horizontal slidebar post
    // take in props for image,title of slide pannel
    return (
        <div className='home_main_container'>
            <div className='home_items_container'>
                <div className='post_container'>
                    <Post
                        linkDirection={<SignIn />}
                        imageLink='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                        postTitle='Shop by Category'
                        toShopLink='See more'
                    />
                    <Post
                        linkDirection={<SignIn />}
                        imageLink='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                        postTitle='Shop by Category'
                        toShopLink='See more'
                    />
                    <Post
                        linkDirection={<SignIn />}
                        imageLink='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                        postTitle='Shop by Category'
                        toShopLink='See more'
                    />
                    <Post
                        linkDirection={<SignIn />}
                        imageLink='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                        postTitle='Shop by Category'
                        toShopLink='See more'
                    />
                    <Post
                        linkDirection={<SignIn />}
                        imageLink='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                        postTitle='Shop by Category'
                        toShopLink='See more'
                    />
                    <Post
                        linkDirection={<SignIn />}
                        imageLink='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                        postTitle='Shop by Category'
                        toShopLink='See more'
                    />
                    <Post
                        linkDirection={<SignIn />}
                        imageLink='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                        postTitle='Shop by Category'
                        toShopLink='See more'
                    />
                    <Post
                        linkDirection={<SignIn />}
                        imageLink='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                        postTitle='Shop by Category'
                        toShopLink='See more'
                    />
                </div>

                <div className='postslide_container'>
                    <h3>Most Wished for in Movies & Tv</h3>
                    <div className='bulk_postslide'>
                        <PostSlide
                            imgUrl='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                            pageUrl='https://www.typing.com/student/tests'
                        />
                        <PostSlide
                            imgUrl='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                            pageUrl='https://www.typing.com/student/tests'
                        />
                        <PostSlide
                            imgUrl='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                            pageUrl='https://www.typing.com/student/tests'
                        />
                        <PostSlide
                            imgUrl='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                            pageUrl='https://www.typing.com/student/tests'
                        />
                        <PostSlide
                            imgUrl='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                            pageUrl='https://www.typing.com/student/tests'
                        />
                        <PostSlide
                            imgUrl='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                            pageUrl='https://www.typing.com/student/tests'
                        />
                        <PostSlide
                            imgUrl='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                            pageUrl='https://www.typing.com/student/tests'
                        />
                        <PostSlide
                            imgUrl='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                            pageUrl='https://www.typing.com/student/tests'
                        />
                        <PostSlide
                            imgUrl='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                            pageUrl='https://www.typing.com/student/tests'
                        />
                        <PostSlide
                            imgUrl='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                            pageUrl='https://www.typing.com/student/tests'
                        />
                    </div>
                </div>
                <div className='post_container'>
                    <Post
                        linkDirection={<SignIn />}
                        imageLink='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                        postTitle='Shop by Category'
                        toShopLink='See more'
                    />
                    <Post
                        linkDirection={<SignIn />}
                        imageLink='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                        postTitle='Shop by Category'
                        toShopLink='See more'
                    />
                    <Post
                        linkDirection={<SignIn />}
                        imageLink='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                        postTitle='Shop by Category'
                        toShopLink='See more'
                    />
                    <Post
                        linkDirection={<SignIn />}
                        imageLink='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                        postTitle='Shop by Category'
                        toShopLink='See more'
                    />
                    <Post
                        linkDirection={<SignIn />}
                        imageLink='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                        postTitle='Shop by Category'
                        toShopLink='See more'
                    />
                    <Post
                        linkDirection={<SignIn />}
                        imageLink='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                        postTitle='Shop by Category'
                        toShopLink='See more'
                    />
                    <Post
                        linkDirection={<SignIn />}
                        imageLink='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                        postTitle='Shop by Category'
                        toShopLink='See more'
                    />
                    <Post
                        linkDirection={<SignIn />}
                        imageLink='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                        postTitle='Shop by Category'
                        toShopLink='See more'
                    />
                </div>

                <div className='postslide_container'>
                    <h3>Most Wished for in Movies & Tv</h3>
                    <div className='bulk_postslide'>
                        <PostSlide
                            imgUrl='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                            pageUrl='https://www.typing.com/student/tests'
                        />
                        <PostSlide
                            imgUrl='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                            pageUrl='https://www.typing.com/student/tests'
                        />
                        <PostSlide
                            imgUrl='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                            pageUrl='https://www.typing.com/student/tests'
                        />
                        <PostSlide
                            imgUrl='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                            pageUrl='https://www.typing.com/student/tests'
                        />
                        <PostSlide
                            imgUrl='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                            pageUrl='https://www.typing.com/student/tests'
                        />
                        <PostSlide
                            imgUrl='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                            pageUrl='https://www.typing.com/student/tests'
                        />
                        <PostSlide
                            imgUrl='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                            pageUrl='https://www.typing.com/student/tests'
                        />
                        <PostSlide
                            imgUrl='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                            pageUrl='https://www.typing.com/student/tests'
                        />
                        <PostSlide
                            imgUrl='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                            pageUrl='https://www.typing.com/student/tests'
                        />
                        <PostSlide
                            imgUrl='https://starwarsblog.starwars.com/wp-content/uploads/2021/08/the-bad-batch-season-2-tall-A-36322.jpg'
                            pageUrl='https://www.typing.com/student/tests'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home