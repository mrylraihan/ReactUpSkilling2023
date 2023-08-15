import classes from './Header.module.css';
import {useDispatch, useSelector} from 'react-redux'
import {toggleActions} from '../store/index'
const Header = () => {
  const toggle = useSelector(state=>state.toggleSlice.toggle)
  const dispatch = useDispatch()

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            {toggle && <button onClick={dispatch.bind(this, toggleActions.toggleCounter())}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
