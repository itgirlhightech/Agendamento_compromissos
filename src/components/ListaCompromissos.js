import React, { useEffect, useState } from 'react';
import { listarTodos } from '../services/compromissoService';

const ListaCompromissos = () => {
  const [compromissos, setCompromissos] = useState([]);

  useEffect(() => {
    listarTodos().then(response => {
      setCompromissos(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Lista de Compromissos</h2>
      <ul>
        {compromissos.map(compromisso => (
          <li key={compromisso.id}>{compromisso.titulo} - {compromisso.dataHora}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCompromissos;
