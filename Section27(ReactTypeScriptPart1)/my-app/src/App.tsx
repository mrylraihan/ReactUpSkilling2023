import './App.css'
import CheckList from './components/CheckList'
import InterfaceTest from './components/InterfaceTest'
import Todos from './components/Todos'

function App() {
  return (
    <div>
      <Todos items={['React','Typescript']}>test</Todos>
      <CheckList name='wallie' age={32}>CheckList</CheckList>
      <InterfaceTest name='Mike' age={40}/>
    </div>
  )
}

export default App