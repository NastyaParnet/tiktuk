import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PostService from '../API/PostService';
import Post from "../components/Post";
import Loader from "../components/UI/Loader/Loader";
import { getNews } from "../redux/actions";

const News = () => {
    const dispatch = useDispatch()
    const news = useSelector(state => state.news.news)
    const isLoading = useSelector(state => state.news.loading)
    console.log(news, isLoading)
    
    useEffect(()=>{
        dispatch(getNews())
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