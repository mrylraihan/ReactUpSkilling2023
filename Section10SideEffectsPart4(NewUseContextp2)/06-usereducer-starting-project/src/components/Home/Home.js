import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
// import TestContext from '../../store/test-context';
const Home = (props) => {
  // const ctx = useContext(TestContext)
  const ctx = useContext(AuthContext)
  // console.log(ctx);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={ctx.onLogout}>LogOut</Button>
    </Card>
  );
};

export default Home;
