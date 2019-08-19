import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CohortList extends Component {
    constructor() {
        super()
        this.highlightCohort = this.highlightCohort.bind(this)
    }
    highlightCohort(e) {
        let cohortButtons = document.querySelectorAll('li')
        cohortButtons.forEach(cohort => cohort.style.border = '')
        e.target.style.border = 'solid black 5px'
    }
    render() {
        console.log(this.props)
        let cohorts = this.props.cohorts.map((cohort, index) => {
            if (this.props.loaded === true) {
                return (
                    <Link onClick={this.highlightCohort} to={'/cohorts/' + cohort.cohort} key={index}>
                        <li >{cohort.cohort}</li>
                    </Link>
                )
            }
        })
        return (
            <div className="CohortList">
                <ul>{cohorts}</ul>
            </div>
        )
    }
}

export default CohortList