import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const DUMMY_Data = [
    {title:"plan1"},
    {title:"plan2"},
    {title:"plan3"},
]
function Plans() {
    const nav = useNavigate()

  return (
    <>
    <div className='app'>
        <h1>Plans</h1>
        <button onClick={()=>nav(-1)}>Go back</button>
        {DUMMY_Data.map(ele=>{
            return (<p><Link to={`/${ele.title}`}>{ele.title}</Link></p>)
            // return (<p><Link to={`${ele.title}`}>{ele.title}</Link></p>) Only if it was nested in the route
        })}
    </div>
    {/* <Outlet/> Only is it was nested in the route */}
    </>
  )
}

export default Plans