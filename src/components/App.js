import React from 'react';
import '../index.scss';
import PokeList from './PokeList';
import pokemonsFromApi from '../data/pokemons.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemonsFromApi,
    };
  }

  render() {
    return (
      <div>
        <PokeList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
