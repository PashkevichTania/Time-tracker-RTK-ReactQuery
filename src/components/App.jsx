import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/home';
import Details from 'pages/details';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}
