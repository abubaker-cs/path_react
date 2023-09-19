import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

function App() {
  return (
    <div>
      <CssBaseline />
      <NavBar />

      <main>

        <Routes>
          <Route
            path="/"
            element={<MovieInformation />}
          />
          <Route
            path="/movies"
            element={<Movies />}
          />
          <Route
            path="/movie/:id"
            element={<MovieInformation />}
          />
          <Route
            path="/actors/:id"
            element={<Actors />}
          />
          <Route
            path="/profile/:id"
            element={<Profile />}
          />
        </Routes>

      </main>

    </div>
  );
}

export default App;
