import React from 'react';

class QuestionThree extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <h4>Your friend betrays you, how likely are you going to get revenge?</h4>
                <input type="radio" name="0-3" />
                <label htmlFor="0-3">0-3</label>
                <input type="radio" name="4-6" />
                <label htmlFor="4-6">4-6</label>
                <input type="radio" name="7-9" />
                <label htmlFor="7-9">7-9</label>
                <input type="radio" name="10+" />
                <label htmlFor="10+">10+</label>
            </div>
        )
    }
}

export default QuestionThree;