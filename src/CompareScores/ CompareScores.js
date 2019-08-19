import React, { Component } from 'react';

class CompareScores extends Component {
    render() {

        let fundamentalsScores = this.props.cohorts.map((fundamentalsScore, index) => {
            return (
                <p key={index}>{fundamentalsScore.cohort}: {fundamentalsScore.fundamentalsAvg}</p>
            )
        })
        console.log(fundamentalsScores)

        let javascriptScores = this.props.cohorts.map((javascriptScore, index) => {
            return (
                <p key={index}>{javascriptScore.cohort}: {javascriptScore.javascriptAvg}</p>
            )
        })
        console.log(javascriptScores)

        return (
            <div className="CompareScores">
                <div>
                    <h2>Fundamentals Scores:</h2>
                    {fundamentalsScores}
                </div>
                <div>
                    <h2>JavaScript Scores:</h2>
                    {javascriptScores}
                </div>
            </div>
        )
    }
}

export default CompareScores