import { useEffect } from 'react'
import './App.css';
import Card from './components/Card'
import { useDispatch, useSelector } from 'react-redux';
import { dataActions, getDataHandler } from './store/dataSlice';
function App() {
  // const [data, setData] = useState([])
const data = useSelector(state=>state.data)
const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataHandler())

  }, [])
  console.log(data)

  const deleteHandler = id => {
    // setData(prev => {
    //   return prev.filter((item) => item.id !== id)
    // })
    dispatch(dataActions.removeData(id))
  }

  let content = data.map(ele => <Card ele={ele} key={ele.id} removeHandler={deleteHandler}/>)


  return (
    <>
    <div className="app">
      <h1>Hello</h1>
    </div>
    {content}
    </>

  );
}

export default App;
