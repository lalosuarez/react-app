import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/Counter/CounterControl/CounterControl';
import CounterOutput from '../../components/Counter/CounterOutput/CounterOutput';
import * as counterActions from './store/actions/counter';
import * as resultActions from './store/actions/results';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 10" clicked={this.props.onSubtractCounter} />
                <br />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
                <ul>
                    {
                        this.props.results.map(r => (
                            <li onClick={() => this.props.onDeleteResult(r.id)} key={r.id}>{r.value}</li>
                        ))
                    }
                </ul>
                <hr />
                <br />
                <br />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        results: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: counterActions.INCREMENT}),
        onDecrementCounter: () => dispatch({type: counterActions.DECREMENT}),
        onAddCounter: () => dispatch({type: counterActions.ADD, payload: 10}),
        onSubtractCounter: () => dispatch({type: counterActions.SUBTRACT, payload: 10}),
        onStoreResult: (result) => dispatch({type: resultActions.STORE_RESULT, payload: result}),
        onDeleteResult: (id) => dispatch({type: resultActions.DELETE_RESULT, payload: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);