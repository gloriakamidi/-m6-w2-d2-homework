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
    render() {
        return (
          <div>
            <h2>Counter</h2>
            <div className="bg-info mx-8">
              <span>{this.props.count}</span>
              <button onClick={this.decrement}>-</button>
              <button onClick={this.increment}>+</button>
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
