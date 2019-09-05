import React from 'react';
import FollowerCard from './FollowerCard.js';

function FollowerList (props) {
    return (
        <div>
            {props.followerProps.map(follower => {
                return (
                <div key={follower.id}>
                <FollowerCard followers={follower} />
                </div>
                )
            })}
        </div>
    )
}

export default FollowerList;