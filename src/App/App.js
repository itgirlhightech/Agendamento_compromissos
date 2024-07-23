import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListaCompromissos from './components/ListaCompromissos';
import AdicionarCompromisso from './components/AdicionarCompromisso';
import VisualizarCompromisso from './components/VisualizarCompromisso';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={ListaCompromissos} />
          <Route path="/adicionar" component={AdicionarCompromisso} />
          <Route path="/visualizar/:id" component={VisualizarCompromisso} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
