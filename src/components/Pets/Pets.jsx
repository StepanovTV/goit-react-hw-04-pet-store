import React, { Component } from 'react';
import petsAr from '../../pets.json';
import PetCart from '../PetCart/PetCart';
import css from './Pets.module.css';

class Pets extends Component {
  state = {
    pets: null,
  };

  componentDidMount() {
    this.setState({
      pets: petsAr,
    });
  }

  render() {
    const { pets } = this.state;

    return (
      <>
        <h2>Животные: продажа домашних животных, купить питомца</h2>
        {pets && (
          <ul className={css.petsList}>
            {pets.map(pet => (
              <li key={pet.id}>
                <PetCart pet={pet} />
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Pets;
