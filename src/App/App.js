import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

import Home from '../Home/Home'
import Cohort from '../Cohort/Cohort'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cohorts: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/api/cohorts')
      .then(res => {
        console.log(res.data)
        this.setState({ cohorts: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link to='/'>
            <h1>Fundamentals Tracker</h1>
          </Link>
          <Link to='/cohorts'>
            <h1>Cohorts</h1>
          </Link>
        </nav>
        <div className="routes">
          <Route
            path='/'
            exact component={Home}
          />
          <Route
            path='/cohorts'
            render={routeProps => (<Cohort {...routeProps} {...this.state} />)}
          />
        </div>
      </div>
    );
  }
}

export default App;
