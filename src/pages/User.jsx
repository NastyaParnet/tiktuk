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
    const [userPosts, setUserPosts] = useState([
        {
            id: "6949187520152358149",
            video: {
                playAddr: 'https://v39-eu.tiktokcdn.com/691ddb693b18658929381a9a5fc5bccf/6193bb33/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=202111160807380101910650792C0D95BA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr='
            },
            stats: {
                playCount:1300000
            }
        },
        {
            id: "6948001993092910341",
            video: {
                playAddr: 'https://v39-eu.tiktokcdn.com/691ddb693b18658929381a9a5fc5bccf/6193bb33/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=202111160807380101910650792C0D95BA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr='
            },
            stats: {
                playCount: 3000000
            }
        },
        {
            id: "6919527366356225285",
            video: {
                playAddr:'https://v39-eu.tiktokcdn.com/691ddb693b18658929381a9a5fc5bccf/6193bb33/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=202111160807380101910650792C0D95BA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr='
            },
            stats: {
                playCount: 1800000
            }
        },
        {
            id: "6919527366356225287",
            video: {
                playAddr:'https://v39-eu.tiktokcdn.com/691ddb693b18658929381a9a5fc5bccf/6193bb33/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=202111160807380101910650792C0D95BA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr='
            },
            stats: {
                playCount: 18000000
            }
        }
    ])
    const [isLoadingInfo, setIsLoadingInfo] = useState(false)
    const [isLoadingPosts, setIsLoadingPosts] = useState(false)

    async function getUserInfo () {
        setIsLoadingInfo(true)
        const user = await PostService.getUserInfo(params.name)
        setUserInfo(user)
        setIsLoadingInfo(false)
        console.log(user)
    }
    
    async function getUserPosts(){
        setIsLoadingPosts(true)
        const posts = await PostService.getUserPosts(params.name)
        setUserPosts(posts)
        console.log(posts)
        setIsLoadingPosts(false)
        
    }

    useEffect(()=>{
        //getUserInfo()
        //getUserPosts()
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