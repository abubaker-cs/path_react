import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <CssBaseline />

      <main>

        <Routes>
          <Route path="/" render={() => 
          <h1>home</h1>)} />
        </Routes>

      </main>

    </div>
  );
}

export default App;
