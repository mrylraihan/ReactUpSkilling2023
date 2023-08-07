import React from 'react'

function TestMap(props) {

    const content = props.people.map(ele=><p>{ele}</p>)

  return (
    <div className='app'>
        <h3>Test Mapping data</h3>
        <p>{content}</p>
        <h4>_______________</h4>
        {props.people.map(ele=><p>{ele}</p>)}
          <div style={{ display: 'flex', justifyContent:'space-between'}}>
        {props.people.map(ele=><p>{ele}</p>)}
        </div>
    </div>
  )
}

export default TestMap