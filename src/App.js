import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "./Form";
import Auth from "./Auth";
export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lti/login">About</Link>
          </li>
        </ul>

        <hr />

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route path="/lti/login">
            <Auth />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
