import React from 'react';
import '../index.scss';

class Pokemon extends React.Component {
  render() {
    const pokemonsTypes = this.props.types.map((type, index) => {
      return (
        <li className="pokemon__types__li" key={index}>
          {type}
        </li>
      );
    });

    return (
      <article className="pokemon">
        <div className="pokemon__img__container">
          <img
            className="pokemon__img"
            src={this.props.url}
            alt={this.props.name}
          ></img>
        </div>
        <div className="pokemon__description">
          <h2 className="pokemon__name"> {this.props.name}</h2>{' '}
          <img
            className="pokeball"
            src="https://i.ebayimg.com/images/g/CLAAAOxyRhBSq3b5/s-l300.jpg"
            alt="Pokeball"
          ></img>
        </div>
        <ul className="pokemon__types">{pokemonsTypes}</ul>
      </article>
    );
  }
}

export default Pokemon;
