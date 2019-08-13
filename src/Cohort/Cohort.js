import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Cohort extends Component {
    render() {
        let cohorts = this.props.cohorts.map((cohort, index) => {
            return (
                <Link to={'/cohorts/' + cohort.cohort} key={index}>
                    <li >{cohort.cohort}</li>
                </Link>
            )
        })
        return (
            <div className="Cohort">
                <ul>{cohorts}</ul>
            </div>
        )
    }
}

export default Cohort