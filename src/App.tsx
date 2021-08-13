import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import ImageFrame from './components/ImageFrame';
import OpenFolderButton from './components/OpenFolderButton';
import ImageController from './components/ImageController';
import { albumContext, useAlbum } from './contexts/AlbumContext';

const Main = () => {
  const ctx = useAlbum();
  return (
    <albumContext.Provider value={ctx}>
      <ImageFrame />
      <OpenFolderButton />
      <ImageController />
    </albumContext.Provider>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}
