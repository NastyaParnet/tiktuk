import React, { useEffect, useState } from "react";
import PostService from '../API/PostService';
import Post from "../components/Post";
import Loader from "../components/UI/Loader/Loader";

const News = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    async function getNews () {
        setIsLoading(true)
        const apiNews = await PostService.getNews()
        setNews(apiNews)
        setIsLoading(false)
    }

    useEffect(()=>{
        getNews()
    }, [])

    return (
        <div>
            {isLoading
                ? <Loader/>
                : news.map( post => <Post post={post} key={post.id}/>)
            }
        </div>
    )
}

export default News