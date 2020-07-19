import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <button
                        onClick={this.props.onReset}
                        className="btn btn-primary m-2">Reset</button>
                </div>
                {
                    this.props.counters.map(
                        counter => (
                            <Counter
                                key={counter.id}
                                onDelete={this.props.onDelete}
                                onIncreament={this.props.onIncreament}
                                counter={counter} />
                        )
                    )
                }
            </>
        );
    }
}

export default Counters;