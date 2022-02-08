import './App.css';
import Navbar from "./Navbar";
import AddSpell from "./AddSpell";
import ViewSpell from "./ViewSpell";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
function App() {
  return (
    <div>

      <Router>
        <Navbar />
        <Switch>
          <Route path="/addSpell" component={AddSpell} />
          <Route path="/viewSpell" component={ViewSpell} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
