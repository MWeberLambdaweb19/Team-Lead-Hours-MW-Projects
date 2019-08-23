import React from 'react';
import TeamMember from './TeamMember';

const TeamList = props => {
    return (
        <div>
            {props.teammate.map(member => {
                return (
                    <TeamMember updateTeam={props.updateTeam} key={member.id} member={member} />
                )
            })}
        </div>
    )
}

export default TeamList;