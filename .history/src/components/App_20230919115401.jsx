import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <CssBaseline />

      <main>

        <Routes>
          <Route
            path="/"
            element={<h1>Hello</h1>}
          />
          <Route
            path="/about"
            element={<h1>About</h1>}
          />
        </Routes>

      </main>

    </div>
  );
}

export default App;
