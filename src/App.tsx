import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import { ThemeProvider, Grid, Box, Flex } from 'theme-ui';
import theme from './theme';
import ImageFrame from './components/ImageFrame';
import OpenFolderButton from './components/OpenFolderButton';
import ImageController from './components/ImageController';
import { albumContext, useAlbum } from './contexts/AlbumContext';

const Main = () => {
  const ctx = useAlbum();
  return (
    <ThemeProvider theme={theme}>
      <albumContext.Provider value={ctx}>
        <Grid columns={[2, '1fr']}>
          <ImageFrame />
          <Box>
            <ImageController />
            <OpenFolderButton />
          </Box>
        </Grid>
      </albumContext.Provider>
    </ThemeProvider>
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
