import React from 'react';
import { CssBaseline } from '@mui/material';
import { Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <CssBaseline />

      <main>

        <Router>
          <Routes>

            <Route path="/">
              <h1>Home</h1>
            </Route>

            <Route path="/">
              <h1>Home</h1>
            </Route>

          </Routes>
        </Router>

      </main>

    </div>
  );
}

export default App;
