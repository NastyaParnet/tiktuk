import React, { useEffect, useState } from "react";
import PostService from '../API/PostService';
import Post from "../components/Post";
import Loader from "../components/UI/Loader/Loader";

const News = () => {
    const [news, setNews] = useState([
        {authorMeta: 
            {avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/94c0343f131c3c203edae0001698b10a~c5_1080x1080.jpeg?x-expires=1636948800&x-signature=qAukguTMRCNqgfupB93q%2FWrzvOg%3D',
            nickName: 'elaine.victoria'},
        videoUrl: 'https://v39-eu.tiktokcdn.com/691ddb693b18658929381a9a5fc5bccf/6193bb33/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=202111160807380101910650792C0D95BA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr=',
        text: "Das war am selben Tag ALDI ich mach meine Videos mehr an der Kasse 🙃#foryoupage #aldinord #fyfyfyfy #foryoupageofficiall",
        diggCount: 1400000,
        commentCount: 17100,
        shareCount: 27400,
        id:"7003277860790144262"
        },
        {authorMeta: 
            {avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/94c0343f131c3c203edae0001698b10a~c5_1080x1080.jpeg?x-expires=1636948800&x-signature=qAukguTMRCNqgfupB93q%2FWrzvOg%3D',
            nickName: 'elaine.victoria'},
        videoUrl: 'https://v39-eu.tiktokcdn.com/691ddb693b18658929381a9a5fc5bccf/6193bb33/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=202111160807380101910650792C0D95BA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr=',
        text: "Das war am selben Tag ALDI ich mach meine Videos mehr an der Kasse 🙃#foryoupage #aldinord #fyfyfyfy #foryoupageofficiall",
        diggCount: 1400000,
        commentCount: 17100,
        shareCount: 27400,
        id:"7003277860790144263"
        },
        {authorMeta: 
            {avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/94c0343f131c3c203edae0001698b10a~c5_1080x1080.jpeg?x-expires=1636948800&x-signature=qAukguTMRCNqgfupB93q%2FWrzvOg%3D',
            nickName: 'elaine.victoria'},
            videoUrl: 'https://v39-eu.tiktokcdn.com/691ddb693b18658929381a9a5fc5bccf/6193bb33/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=202111160807380101910650792C0D95BA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr=',
        text: "Das war am selben Tag ALDI ich mach meine Videos mehr an der Kasse 🙃#foryoupage #aldinord #fyfyfyfy #foryoupageofficiall",
        diggCount: 1400000,
        commentCount: 17100,
        shareCount: 27400,
        id:"7003277860790144264"
        }
    ])
    const [isLoading, setIsLoading] = useState(false)
    async function getNews () {
        setIsLoading(true)
        const apiNews = await PostService.getNews()
        setNews(apiNews)
        setIsLoading(false)
        console.log(news)
    }

    useEffect(()=>{
        console.log('in useeffect')
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