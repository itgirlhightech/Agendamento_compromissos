import React, { useEffect, useState } from 'react';
import { buscarPorId } from '../services/compromissoService';
import { useParams } from 'react-router-dom';

const VisualizarCompromisso = () => {
  const { id } = useParams();
  const [compromisso, setCompromisso] = useState(null);

  useEffect(() => {
    buscarPorId(id).then(response => {
      setCompromisso(response.data);
    });
  }, [id]);

  return (
    <div>
      <h2>Visualizar Compromisso</h2>
      {compromisso ? (
        <div>
          <h3>{compromisso.titulo}</h3>
          <p>{compromisso.descricao}</p>
          <p>{compromisso.dataHora}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default VisualizarCompromisso;
