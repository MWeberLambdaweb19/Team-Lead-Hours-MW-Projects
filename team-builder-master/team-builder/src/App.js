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

  return (
    <div className="App">
    <Form addTeamMember={addTeamMember}/>
    <TeamList teammate={teammate} />
    </div>
  );
}

export default App;
