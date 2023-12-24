import {useState, useEffect} from 'react'

function ShowAll({search}) {
    const [list, setList] = useState([])
    const filterList = list.filter(ele=>{
      return ele.title.toLowerCase().includes(search.toLowerCase())
    })
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users/1/albums')
      .then(res=>res.json())
      .then(setList)
      .catch(console.error)
    },[])
  return (
    <div>
      <h1>ShowAll</h1>
      <ul>
        {filterList.length > 0 && filterList.map(ele => <li key={ele.id}>{ele.title}</li>)}
        {filterList.length == 0 && list.map(ele => <li key={ele.id}>{ele.title}</li>)}
      </ul>
    </div>
  )
}

export default ShowAll