import React, {useState} from 'react';

const Form = props => {
    const [newTeamMember, setNewTeamMember] = useState({
        name: '',
        email: '',
        role: '',
        id: parseInt(Math.random() * 1000000000)
    })

    // We can write event as "e"
    const handleChange = e => {
        setNewTeamMember({...newTeamMember, [e.target.name]: e.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();

        const addNewTeamMember = props.addTeamMember

        addNewTeamMember(newTeamMember)

        setNewTeamMember({
            name: '',
            email: '',
            role: '',
            id: parseInt(Math.random() * 1000000000)
        })
    } 

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name:<input type="text" placeholder="name" value={newTeamMember.name} onChange={handleChange} name="name"/>
            </label>

            <label htmlFor="email">
                Email:<input type="email" placeholder="email" value={newTeamMember.email} onChange={handleChange} name="email"/>
            </label>

            <label htmlFor="role">
                Role:<input type="text" placeholder="role" value={newTeamMember.role} onChange={handleChange} name="role"/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;