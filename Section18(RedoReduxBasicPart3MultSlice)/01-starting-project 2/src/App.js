import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import {useSelector} from 'react-redux'
function App() {
  const state = useSelector(state=>state)
  const toggle = useSelector(state => state.toggleSlice.toggle)
  console.log(state)
  return (
    <>
    <Header/>
    {!toggle && <Auth/>}
    {toggle && <UserProfile/>}
    <Counter/>
    </>
  );
}

export default App;
