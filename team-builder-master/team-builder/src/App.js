import React, {useState} from 'react';
import './App.css';
import data from './dummyData.js';
import TeamList from './components/TeamList';
import Form from './components/Form';

function App() {
  const [teammate, setTeammate] = useState(data);

  const addTeamMember = member => {
    setTeammate([...teammate, member])
  }

  // Do this!
  const updateTeam = person => {
    setTeammate([...teammate.map(member => person.id === member.id ? person : member)])
  }

  // Don't do this!
  // const updateTeam = person => {
  //   setTeammate([...teammate, person])
  // }

  return (
    <div className="App">
    <Form addTeamMember={addTeamMember}/>
    <TeamList updateTeam={updateTeam} teammate={teammate} />
    </div>
  );
}

export default App;
