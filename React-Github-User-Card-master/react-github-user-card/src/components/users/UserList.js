import React from 'react';
import UserCard from './UserCard.js';

function UserList (props) {
    return (
        <div>
            <UserCard user={props.userProps} />
        </div>
    )
}

export default UserList;