import React from 'react';
import styles from './style.module.css';
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import CreateButton from '../CreateButton';
import { Switch, Route } from "react-router-dom";
import List from '../List';

function Container(props) {
  return (
    <div className={styles['container']}>
      <div className={styles['logo']}>
        <LogoIcon />
      </div>
      <div className="metadata">
        <p className={styles['project-name']}>Newtech Demo</p>
        <p className={styles['project-author']}>By Daniel Méndez @ emrdan.com</p>
      </div>
      <Switch>
        <Route path="/departments">
          <CreateButton to="/departments/create" />
        </Route>
        <Route path="/departments/:id/members" exact>
          <CreateButton to="/departments/:id/members/create" />
        </Route>
      </Switch>
      <List />
    </div>
  );
}

export default Container;
