import React from 'react';

function FollowerCard (props) {
    return (
        <div>
            <img src={props.followers.avatar_url} alt="Their user avatar"></img>
            <h2>{props.followers.login}</h2>
            <a href={props.followers.html_url}>Their Repo</a>
        </div>
    )
}

export default FollowerCard;