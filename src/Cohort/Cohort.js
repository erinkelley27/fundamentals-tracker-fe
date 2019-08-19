import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

class Cohort extends Component {

    render() {

        let selectedCohort = this.props.cohorts.find(cohort => {
            if (cohort.cohort === parseInt(this.props.match.params.cohort)) {
                return cohort
            }
        })

        return (
            <div className="Cohort">
                <h2>SEI {selectedCohort.cohort}</h2>
                <p>Fundamentals Average: {selectedCohort.fundamentalsAvg}</p>
                <p>JavaScript Average: {selectedCohort.javascriptAvg}</p>
                <p>Withdrawal Rate: {selectedCohort.withdrawalRate}%</p>
                <p>Graduation Rate: {selectedCohort.graduationRate}%</p>
            </div>
        )
    }
}

export default Cohort