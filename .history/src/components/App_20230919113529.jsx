import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <CssBaseline />

      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="/team" element={<Team />} />
            <Route path="/history" element={<History />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </main>

    </div>
  );
}

export default App;
