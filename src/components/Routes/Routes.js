import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import css from './Routes.module.css';
import pageTransition from '../../transitions/pegest.module.css';

const AsyncHome = Loadable({
  loader: () => import('../Home/Home' /* webpackChunkName: "home-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncAbout = Loadable({
  loader: () => import('../About/About' /* webpackChunkName: "about-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncPets = Loadable({
  loader: () => import('../Pets/Pets' /* webpackChunkName: "about-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const SinglePagest = Loadable({
  loader: () =>
    import('../SinglePagest/SinglePagest' /* webpackChunkName: "about-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const routes = ({ location }) => {
  return (
    <>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={400}
          classNames={pageTransition}
          unmountOnExit
        >
          <section className={css.container}>
            <Switch>
              <Route path="/" exact component={AsyncHome} />
              <Route path="/about" component={AsyncAbout} />
              <Route path="/pets/:id" component={SinglePagest} />
              <Route path="/pets" component={AsyncPets} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

routes.propTypes = {
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({
    key: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({}).isRequired,
};

export default withRouter(routes);
