import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <CssBaseline />

      <main>

        <Routes>
          <Route path="/" />
          <Route path="/about">
            <Route path="/team" />
            <Route path="/history" />
          </Route>
          <Route path="/contact" />
        </Routes>

      </main>

    </div>
  );
}

export default App;
