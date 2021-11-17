import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import LoadVideo from "./UI/LoadVideo/LoadVideo";

const Post = ({post, isPlayNow, setIsPlayNow}) => {
    const router = useHistory()
    const play1 = useRef()
    const play2 = useRef()
    const [loadingVideo, setLoadingVideo] = useState(true)
    const [isPlay, setIsPlay] = useState(false)
    const [intersect1, setIntersect1] = useState(false)
    const [intersect2, setIntersect2] = useState(false)

    useEffect(()=>{
        var callback1 = function(entries, observer) {
            if(entries[0].isIntersecting) setIntersect1(true)
            else setIntersect1(false)
        };
        let observer1 = new IntersectionObserver(callback1);
        observer1.observe(play1.current)

        var callback2 = function(entries, observer) {
            if(entries[0].isIntersecting) setIntersect2(true)
            else setIntersect2(false)
        };
        let observer2 = new IntersectionObserver(callback2);
        observer2.observe(play2.current)
    }, [])

    useEffect(()=>{
        let video = document.getElementById(post.id)
        if(intersect1 && intersect2) {
            if(!isPlayNow) {
                video.play()
                setIsPlay(true)
                setIsPlayNow(true)
            }
        }
        else{
            if(isPlay){
                video.pause()
                setIsPlay(false)
                setIsPlayNow(false)
            }
        }
    }, [intersect1, intersect2, isPlayNow])

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
                        <div className='post__video'>
                            <div ref={play1}></div>
                            <video 
                                controls 
                                loop='loop'
                                id={post.id}
                                onCanPlay={()=>setLoadingVideo(false)}
                                onWaiting={()=>setLoadingVideo(true)}
                                onPlaying={()=>setLoadingVideo(false)}
                                className='post__video__src' 
                                src={post.videoUrl}
                            />
                            {loadingVideo
                                ? <LoadVideo/>
                                : <div></div>
                            }
                            <div ref={play2}></div>
                        </div>
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