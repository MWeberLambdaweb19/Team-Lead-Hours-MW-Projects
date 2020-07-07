import React from 'react';
import './styles.css';
import data from './assets/dummyData';
import DataList from './components/DataList';

function App() {
  return (
    <div>
      <DataList ourdata={data} />
    </div>
  );
}

export default App;
