import React, {useState} from 'react';

const TeamMember = props => {

    const [updatedMember, setUpdatedMember] = useState({...props.member})

    const [editing, setEditing] = useState(false)

    const handleChanges = e => {
        setUpdatedMember({...updatedMember, [e.target.name]:e.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        const updateTeamMember = props.updateTeam
        updateTeamMember(updatedMember)
        setUpdatedMember({...updatedMember})
        setEditing(false)
    }

    if (editing) {
        return (
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name:<input type="text" placeholder="name" value={updatedMember.name} onChange={handleChanges} name="name"/>
            </label>

            <label htmlFor="email">
                Email:<input type="email" placeholder="email" value={updatedMember.email} onChange={handleChanges} name="email"/>
            </label>

            <label htmlFor="role">
                Role:<input type="text" placeholder="role" value={updatedMember.role} onChange={handleChanges} name="role"/>
            </label>
            <button type="submit">Submit</button>
        </form>
        )
    } else {

    return (
        <div>
            <h3>{props.member.name}</h3>
            <p>{props.member.email}</p>
            <p>{props.member.role}</p>
            <button onClick={() => setEditing(true)}>Edit Member</button>
        </div>
    )
    }
}

export default TeamMember;