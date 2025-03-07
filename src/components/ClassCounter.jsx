import React from 'react';

class ClassCounter extends React.Component {
    //хуки в классах использовать нельзя
    // const [count, setCount] = React.useState(0);

    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
    }

    increment(){
        this.setState({count: this.state.count +1});
    }

    decrement(){
        this.setState({count: this.state.count -1});
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        )
    }
}

export default ClassCounter