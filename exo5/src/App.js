import './App.css';
import { Component } from 'react';
import Section from './component/Section';
import Counter from './component/Counter';


class App extends Component {

  state = {
    count: 0,
  }

  increment = () => {
    this.setState({ prevCount: this.state.prevCount + 1 })
  }

  render() {
    return (
      <div className="App">
        <h1>Compteur</h1>
        <Counter count={this.state.count} />
        <Section increment={this.increment} />
        <Section increment={this.increment} />
        <Section increment={this.increment} />
      </div>
    );
  }
}

export default App;
