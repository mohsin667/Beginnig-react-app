import React, { Component } from 'react';

class Counter extends Component {

    styles = {
        fontSize: 10,
        fontWeight: '800'
    }

    render() {
        return (
            <div className="container  mt-3">
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatFuntion()}</span>
                <button onClick={() => this.props.onIncreament(this.props.counter)} className="btn btn-secondary">Increament</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatFuntion() {
        const { value } = this.props.counter;
        return value === 0 ? "zero" : value
    }
}
export default Counter;