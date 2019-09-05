import React from 'react';

class QuestionOne extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newPoints: this.props.points
        }
    }

    componentDidMount = () => {
        console.log("Points", this.props.points)
        console.log("State", this.state.newPoints)
    }

    addPoints = (event) => {
        const addedPoints = {[event.target.name]: 5}
        this.setState({
            newPoints: [prevState + addedPoints]
        })
        console.log("Updated", this.state.newPoints)
    }
    
    render () {
        return (
            <div>
                <h4>Your friend betrays you, how likely are you going to get revenge?</h4>
                <input onClick={this.addPoints} type="radio" name="0-3" />
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

export default QuestionOne;