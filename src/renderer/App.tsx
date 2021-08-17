import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';
import ImageFrame from './components/ImageFrame';
import ImageController from './components/ImageController';
import { albumContext, useAlbum } from './contexts/AlbumContext';
import Layout from './components/Layout';

const Main = () => {
  const ctx = useAlbum();
  return (
    <ThemeProvider theme={theme}>
      <albumContext.Provider value={ctx}>
        <Layout>
          <ImageFrame />
          <ImageController />
        </Layout>
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
