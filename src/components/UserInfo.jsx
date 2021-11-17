import React from "react";

const UserInfo = ({user}) => {
    function getNumberFollow(num){             
        if(num>=1000000){
            return (num/1000000).toFixed(1)+'M'
        }
        else if(num>=1000){
            return (num/1000).toFixed(1)+'K'
        }
        return num
    }
    return (
        <div className='info'>
            <div className='info__header'>
                <div>
                    <img className='info__avatar' src={user.user.avatarLarger} />
                </div>
                <div className='info__name'>
                    <span className='info__uniqueId'>{user.user.uniqueId}</span>
                    <br/>
                    <span className='info__nickname'>{user.user.nickname}</span>
                </div>
            </div>
            <div className='info__follow'>
                <div>
                    <strong>{getNumberFollow(user.stats.followingCount)}</strong>
                    <span> Слідкування</span>
                </div>
                <div>
                    <strong>{getNumberFollow(user.stats.followerCount)}</strong>
                    <span> Слідкувачі</span>
                </div>
                <div>
                    <strong>{getNumberFollow(user.stats.heartCount)}</strong>
                    <span> Уподобання</span>
                </div>
            </div>
            <div>
                <pre className='info__signature'>{user.user.signature}</pre>
            </div>
        </div>
    )
}

export default UserInfo