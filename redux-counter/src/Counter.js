import React from 'react';
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends React.Component {
    // state = { count: 0 }

    increment = () => {
        //fill in later
        this.props.dispatch({type: 'INCREMENT'});
    }

    decrement = () => {
      //fill in later
       this.props.dispatch({ type: 'DECREMENT'});
    }
    reset = () => {
        this.props.dispatch({ type: "RESET"})
    }
    render() {
        return (
          <div>
            <h2>Counter</h2>
            <div className="bg-info mx-8 p-3">
              <span className="text-white square border mx-3 p-2">{this.props.count}</span>
              <button onClick={this.decrement}>-</button>
              <button onClick={this.increment}>+</button>
              <button onClick={this.reset}>reset</button>
            </div>
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

// export default Counter;
export default connect(mapStateToProps)(Counter);
