import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import Loader from "./UI/Loader/Loader";
import LoadVideo from "./UI/LoadVideo/LoadVideo";

const Post = ({post}) => {
    const router = useHistory()
    const play1 = useRef()
    const play2 = useRef()
    const observer1 = useRef()
    const observer2 = useRef()
    const [loadingVideo, setLoadingVideo] = useState(true)
    const [intersect1, setIntersect1] = useState(false)
    const [intersect2, setIntersect2] = useState(false)

    useEffect(()=>{
        var callback1 = function(entries, observer) {
            console.log(entries)
            if(entries[0].isIntersecting) setIntersect1(true)
            else setIntersect1(false)
        };
        observer1.current = new IntersectionObserver(callback1);
        observer1.current.observe(play1.current)

        var callback2 = function(entries, observer) {
            console.log(entries)
            if(entries[0].isIntersecting) setIntersect2(true)
            else setIntersect2(false)
        };
        observer2.current = new IntersectionObserver(callback2);
        observer2.current.observe(play2.current)
    }, [])

    useEffect(()=>{
        let video = document.getElementById(post.id)
        if(intersect1 && intersect2) video.play()
        else video.pause()
    }, [intersect1, intersect2])

    function getNumberLike(num){             
        if(num>=1000000){
            return (num/1000000).toFixed(1)+'M'
        }
        else if(num>=10000){
            return (num/1000).toFixed(1)+'K'
        }
        return num
    }

    return(
        <div className='post'>
            <div className='post__content'>
                <div>
                    <img 
                        className='post__avatar' 
                        src={post.authorMeta.avatar}
                        onClick={()=>router.push(`/user/${post.authorMeta.name}`)}
                    />
                </div>
                <div>
                    <div className='post__header'>
                        <div>
                            <span 
                                className='post__nickName' 
                                onClick={()=>router.push(`/user/${post.authorMeta.name}`)}
                            >{post.authorMeta.nickName}</span>
                        </div>
                        <div>
                            <span className='post_text'>{post.text}</span>
                        </div>
                    </div>
                    <div className='post__player'>
                        <div ref={play1} className='lert'></div>
                        <div className='post__video'>
                            <video 
                                controls 
                                loop='loop'
                                id={post.id}
                                onCanPlay={()=>setLoadingVideo(false)}
                                className='post__video__src' 
                                src={post.videoUrl}
                            />
                            {loadingVideo
                                ? <LoadVideo/>
                                : <div></div>
                            }
                            
                        </div>
                        <div ref={play2}></div>
                        <div className='post__dopInfo'>
                            <span><i className="fas fa-heart"></i></span>
                            <span>{getNumberLike(post.diggCount)}</span>
                            <span><i className="fas fa-comment-dots"></i></span>
                            <span>{getNumberLike(post.commentCount)}</span>
                            <span><i className="fas fa-share"></i></span>
                            <span>{getNumberLike(post.shareCount)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
        
    )
}

export default Post