import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

export default class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <p> this is Hieu</p>
          </Route>
        </Switch>
      </Router>
    )
  }
}
