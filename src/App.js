import React, { Component } from 'react';
import './App.css';
import Counters from "./component/counters"
import Navbar from "./component/navbar"

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  }

  handleIncreament = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter)
    console.log(counter, index)
    counters[index] = { ...counter }
    counters[index].value++;
    this.setState({ counters })
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c
    })

    this.setState({ counters })
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId)
    console.log(counterId)
    this.setState({ counters })
  }
  render() {
    return (
      <div className="">
        <Navbar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={handleReset}
            onIncreament={handleIncreament}
            onDelete={handleDelete}
          />
        </main>
      </div>
    );
  }
}

export default App;