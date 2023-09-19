import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import useStyles from './styles';

import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />

      <main className={classes.content}>

        <div className={classes.toolbar} />

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
