import { useEffect, useState } from 'react';
import { Form , Link, useSearchParams} from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get('mode')==='login';
  console.log(searchParams, " :useSearchParams")
  // Instead of using state we will use a query parameter
  // const [isLogin, setIsLogin] = useState(true);

  // function switchAuthHandler() {
  //   setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  // }
  // useEffect(()=>{
  // setSearchParams({mode:'login'})
  // },[])
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin?'signup':'login'}`} >
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          {/* <button onClick={switchAuthHandler} type="button">
            {isLogin ? 'Create new user' : 'Login'}
          </button> */}
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
