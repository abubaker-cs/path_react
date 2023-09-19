import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <CssBaseline />

      <main>

        <Routes>

          <Route path="/">
            <h1>Home</h1>
          </Route>

        </Routes>

      </main>

    </div>
  );
}

export default App;
