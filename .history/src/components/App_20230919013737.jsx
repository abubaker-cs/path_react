import React from 'react';
import { CssBaseline, Switch } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <CssBaseline />
      <main>
        <Switch>
          <Route path='/'>
            <h1>Home</h1>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
