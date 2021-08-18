import React, {Component} from 'react';
import LottoBall from './LottoBall';

class Lottery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nums: Array.from({length: this.props.numOfBalls+1})
        }
    }
    getNums = () => {
        const {numOfBalls,max} = this.props
        let i = 0;
        const arr = [];
        while(i <= numOfBalls) {
            let ball = Math.floor(Math.random() * max);
            arr.push(ball)
            i++;
        }
        this.setState({nums: arr})
    }
    
    handleClick = () => {
        this.getNums()
    }


    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <ul>
                    {this.state.nums.map(n => <li><LottoBall n={n}/></li>)}
                </ul>
                <button onClick={this.handleClick}>Generate a lottery</button>
            </div>
        )
    }
}

export default Lottery;
