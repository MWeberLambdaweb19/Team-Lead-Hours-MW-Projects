import React from 'react';
import QuestionOne from './questions/QuestionOne.js';
import QuestionTwo from './questions/QuestionTwo.js';
import QuestionThree from './questions/QuestionThree.js';

class QuestionList extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <QuestionOne points={this.props.pointsProps} />
                <QuestionTwo />
                <QuestionThree />
            </div>
        )
    }
}

export default QuestionList;