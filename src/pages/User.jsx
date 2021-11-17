import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PostService from '../API/PostService';
import Loader from "../components/UI/Loader/Loader";
import UserInfo from "../components/UserInfo";
import UserPosts from "../components/UserPosts";

const User = () => {
    const params = useParams()
    const [userInfo, setUserInfo] = useState({
        user: {
            uniqueId: "dave.xp",
            nickname: "Dave XP",
            avatarLarger:"https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1636974000&x-signature=xSlbX%2BxEJZyZit83NHimaKAnKgY%3D",
            signature: `🇨🇷 Animator from Costa Rica 
Get my app Dollify! 
👇`
        },
        stats: {
            followerCount:4800000,
            followingCount:67,
            heartCount:76200000,
        }
    })
    const [userPosts, setUserPosts] = useState([])
    const [isLoadingInfo, setIsLoadingInfo] = useState(false)
    const [isLoadingPosts, setIsLoadingPosts] = useState(false)

    async function getUserInfo () {
        setIsLoadingInfo(true)
        const user = await PostService.getUserInfo(params.name)
        setUserInfo(user)
        setIsLoadingInfo(false)
    }
    
    async function getUserPosts(){
        setIsLoadingPosts(true)
        const posts = await PostService.getUserPosts(params.name)
        setUserPosts(posts)
        setIsLoadingPosts(false)
        
    }

    useEffect(()=>{
        getUserInfo()
        getUserPosts()
    }, [])
    
    return (
        <div className='user'>
            {isLoadingInfo
                ? <div></div>
                : <UserInfo user={userInfo}/>
            }
            {isLoadingPosts
                ? <Loader/>
                : <UserPosts posts={userPosts}/>
            }
        </div>
    )
}

export default User