import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import pets from '../../pets.json';
import css from './SinglePagest.module.css';

class SinglePagest extends Component {
  state = {
    pet: null,
  };

  componentDidMount() {
    const { match } = this.props;
    const prtId = match.params.id;
    const obgPet = pets.find(elem => elem.id === prtId);
    this.setState({ pet: obgPet });
  }

  render() {
    const { pet } = this.state;
    return (
      <>
        {pet && (
          <div>
            <img src={pet.image} className={css.petImg} alt={pet.image} />
            <h1>{pet.name}</h1>
            <p>{pet.description}</p>
            <p>
              age:
              <span>
                <b> {pet.age}</b>
              </span>
            </p>
            <p>
              breed:
              <span>
                <b> {pet.breed}</b>
              </span>
            </p>
            <p>
              gender:
              <span>
                <b> {pet.gender}</b>
              </span>
            </p>
            <p>
              color:
              <span>
                <b> {pet.color}</b>
              </span>
            </p>
            <Link to="/pets/" className={css.btnBefore}>
              &#8592; BACK
            </Link>
          </div>
        )}
      </>
    );
  }
}
SinglePagest.propTypes = {
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({
    key: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default SinglePagest;
