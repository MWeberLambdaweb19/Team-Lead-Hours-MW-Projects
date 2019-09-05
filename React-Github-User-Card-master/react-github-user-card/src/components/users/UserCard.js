import React from 'react';

function UserCard (props) {
    return (
        <div>
            <img src={props.user.avatar_url} alt="My user avatar"></img>
            <h2>{props.user.name}</h2>
            <h3>{props.user.login}</h3>
            <p>{props.user.bio}</p>
            <p># of Followers: {props.user.followers} </p>
            <p># of Following: {props.user.following}</p>
            <a href={props.user.html_url}>My Repo</a>
        </div>
    )
}

export default UserCard;