import React from "react";

const UserVideo = ({post}) => {
    function getPlayCount(){ 
        let num = post.diggCount          
        if(num>=1000000){
            return (num/1000000).toFixed(1)+'M'
        }
        else if(num>=1000){
            return (num/1000).toFixed(1)+'K'
        }
        return num
    }

    return (
        <div className='user__video'>
            <div>
                <video
                    className='user__video__src'
                    id={post.id}
                    src={post.videoUrl}
                />
            </div>
            <div className='user__video__count'>
                <i className="fas fa-play"></i>
                <span> {getPlayCount()}</span>
            </div>
        </div>
    )
}

export default UserVideo