import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  useEffect(() => {
    const techs = localStorage.getItem('techs');

    if (techs) {
      setTechs(JSON.parse(techs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, []);

  function handleAdd() {
    setTechs([...techs, 'NodeJs']);
    setNewTech('');
  }

  const techsSize = useMemo(() => techs.length, [techs]);
  return (
    <>
      <ul>
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <strong>você tem {techsSize} tecnologia(as) </strong>
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
