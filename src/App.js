import logo from './logo.svg';
import './App.css';
import { Container } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import FullPost from './Components/FullPost/FullPost';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Container maxWidth="lg"><Home></Home></Container>
        </Route>
        <Route path="/fullPost/:postID">
          <FullPost></FullPost>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
