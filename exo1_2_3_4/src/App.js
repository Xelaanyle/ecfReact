
import { Component } from 'react';
import Greeting from './component/Greeting';
import SimpleComponent from './component/SimpleComponent';
import './App.css';
import NameList from './component/NameList';
import ConditionalRender from './component/ConditionalRender ';

class App extends Component {

  state = {
    name: 'World',
    prenom: ['Alexandre', 'Emma', 'Tony', 'Sebastien', 'Justine'],
    true: 'Vous aimez React !',
    false: 'Vous n\'aimez pas React.',
    condition: '',
  }


  render() {

  console.log(this.state.condition);

    return (
      <div className='App'>
        <SimpleComponent />
        <Greeting name={this.state.name} />
        <input type="text" onChange={e => this.setState({ name: e.target.value })} />
        <NameList list={this.state.prenom} />
        <p>Aimez vous React ?</p>
        <input type="text" onChange={e => this.setState({ condition: e.target.value })} />
        <ConditionalRender condition={this.state.condition}>
          {this.state}
        </ConditionalRender>
      </div>
    )
  }

}export default App;
