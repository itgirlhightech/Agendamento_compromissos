import React, { useState } from 'react';
import { salvar } from '../services/compromissoService';

const AdicionarCompromisso = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataHora, setDataHora] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const compromisso = { titulo, descricao, dataHora };
    salvar(compromisso).then(response => {
      console.log(response.data);
    });
  };

  return (
    <div>
      <h2>Adicionar Compromisso</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div>
          <label>Descrição:</label>
          <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </div>
        <div>
          <label>Data e Hora:</label>
          <input type="datetime-local" value={dataHora} onChange={(e) => setDataHora(e.target.value)} />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default AdicionarCompromisso;
