import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CounterControl from '../../components/Counter/CounterControl/CounterControl';
import CounterOutput from '../../components/Counter/CounterOutput/CounterOutput';
import * as counterActions from './store/actions/counter';
import * as resultActions from './store/actions/results';

class Counter extends Component {

    getResults = () => {
        return this.props.results.map(r => (
            <li onClick={() => this.props.deleteResult(r.id)} key={r.id}>{r.value}</li>
        ))
    };

    render () {

        return (
            <div>
                <CounterOutput value={this.props.ctr} />
    
                <CounterControl label="Increment" clicked={() => this.props.incremement()} />
                <CounterControl label="Decrement" clicked={() => this.props.decrement()} />
                <CounterControl label="Add 10" clicked={() => this.props.add(10)} />
                <CounterControl label="Subtract 10" clicked={() => this.props.subtract(10)} />
                <br />
                <button onClick={() => this.props.storeResult(this.props.ctr)}>Store result</button>
                <ul>
                    {this.getResults()}
                </ul>
                
                {/* <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 10" clicked={this.props.onSubtractCounter} />
                <br />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
                <ul>
                    {getResults()}
                </ul> */}

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
    return bindActionCreators({
        incremement: counterActions.incremement,
        decrement: counterActions.decrement,
        add: counterActions.add,
        subtract: counterActions.subtract,
        storeResult: resultActions.storeResult,
        deleteResult: resultActions.deleteResult
    }, dispatch);
};

// const mapDispatchToProps = dispatch => {
//     return {
//         onIncrementCounter: () => dispatch(counterActions.incremement()),
//         onDecrementCounter: () => dispatch(counterActions.decrement()),
//         onAddCounter: () => dispatch(counterActions.add(10)),
//         onSubtractCounter: () => dispatch(counterActions.subtract(10)),
//         onStoreResult: (result) => dispatch(resultActions.storeResult(result)),
//         onDeleteResult: (id) => dispatch(resultActions.deleteResult(id))
//     };
// };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);