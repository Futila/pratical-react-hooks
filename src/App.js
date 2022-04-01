import React, { useState } from 'react';

function App() {
  const [techs, setTechs] = useState(['Nodejs', 'React']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([...techs, 'NodeJs']);
    setNewTech('');
  }
  return (
    <>
      <ul>
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTech}
        onChange={(e) => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
