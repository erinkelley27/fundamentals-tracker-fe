import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import logo from './ga_logo.jpg'

import Home from '../Home/Home'
import CohortList from '../CohortList/CohortList'
import CompareScores from '../CompareScores/ CompareScores'
import Cohort from '../Cohort/Cohort'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cohorts: [],
      loaded: false
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/api/cohorts')
      .then(res => {
        console.log(res.data)
        this.setState({ cohorts: res.data, loaded: true })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <Link to='/'>
            <h1>StoodTrax</h1>
          </Link>
        </div>
        <nav>
          {/* <img src={logo} alt="ga-logo"></img> */}
          <Link to='/compare'>
            <h3>Checkpoint Comparison</h3>
          </Link>
          <Link to='/cohorts'>
            <h3>Cohorts</h3>
          </Link>
        </nav>
        <div className="routes">
          <Route
            path='/'
            exact component={Home}
          />
          <Route
            path='/compare'
            exact render={routeProps => (<CompareScores {...routeProps} {...this.state} />)}
          />
          <Route
            path='/cohorts'
            render={routeProps => (<CohortList {...routeProps} {...this.state} />)}
          />
          <Route
            path='/cohorts/:cohort'
            render={routeProps => (<Cohort {...routeProps} cohorts={this.state.cohorts} />)}
          />
        </div>
      </div>
    );
  }
}

export default App;
