import React from 'react';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
// import TestContext from '../../store/test-context';
const Home = (props) => {
  // const ctx = useContext(TestContext)
  // console.log(ctx);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={props.onLogout}>LogOut</Button>
    </Card>
  );
};

export default Home;
