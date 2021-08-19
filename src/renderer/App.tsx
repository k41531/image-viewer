import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';
import { albumContext, useAlbum } from './contexts/AlbumContext';
import Layout from './components/Layout';
import MainPanel from './components/MainPanel';

const Main = () => {
  const ctx = useAlbum();
  return (
    <ThemeProvider theme={theme}>
      <albumContext.Provider value={ctx}>
        <Layout>
          <MainPanel />
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
