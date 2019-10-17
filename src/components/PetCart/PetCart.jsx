import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './PetCart.module.css';

const PetCart = ({ pet }) => {
  return (
    <div>
      <img src={pet.image} alt={pet.name} className={css.imgcart} />
      <div className={css.opisanie}>
        <h3>{pet.name}</h3>
        <ul className={css.listOption}>
          <li>
            <span className={css.optionTitle}>age:</span>
            <span>
              <b>{pet.age}</b>
            </span>
          </li>
          <li>
            <span className={css.optionTitle}>gender:</span>
            <span>
              <b>{pet.gender}</b>
            </span>
          </li>
          <li>
            <span className={css.optionTitle}>color:</span>
            <span>
              <b>{pet.color}</b>
            </span>
          </li>
        </ul>
      </div>
      <Link to={`/pets/${pet.id}`} className={css.btnMore}>
        &gt;
      </Link>
    </div>
  );
};

PetCart.propTypes = {
  pet: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    breed: PropTypes.number.isRequired,
    gender: PropTypes.number.isRequired,
    color: PropTypes.number.isRequired,
    image: PropTypes.number.isRequired,
    description: PropTypes.number.isRequired,
  }).isRequired,
};

export default PetCart;
