import React, { Component } from 'react';

class Navvbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="/">Navbar
                        <span className="badge badge-pill badge-secondary ml-2">{this.props.totalNumber}</span>
                    </a>
                </nav>
            </>
        );
    }
}
export default Navvbar;
