import React from 'react';
import { render, screen } from '@testing-library/react';
import ListaCompromissos from './ListaCompromissos';
import { listarTodos } from '../services/compromissoService';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../services/compromissoService');

test('renders lista de compromissos', async () => {
  listarTodos.mockResolvedValue({ data: [{ id: 1, titulo: 'Girls Night', dataHora: '2024-07-23w18:00' }] });

  render(<ListaCompromissos />);
  const compromissoElement = await screen.findByText(/Girls Night- 2024-07-23w18:00/i);
  expect(compromissoElement).toBeInTheDocument();
});
