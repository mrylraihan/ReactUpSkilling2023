import React from 'react'

function TestForEach(props) {
    console.log(props.people)
    props.people.forEach(ele=>console.log(ele,'line 5'))
    props.people.forEach(console.log)
    //Meshia 0 (3) ['Meshia', 'Heshow', 'Wallie']
    //Heshow 1 (3) ['Meshia', 'Heshow', 'Wallie']
    //Wallie 2 (3) ['Meshia', 'Heshow', 'Wallie']
    const renderElement = e =>{
        return <p>{e}</p>
    }
  return (
    <div className='app'>
          <h1>Test using ForEach to Render Data</h1>
          <p>testing for each on array but forEach doesnt return anything </p>
          {props.people.forEach(ele=><p>{ele}</p>)}
          <h4>______________________________________</h4>
          {props.people.forEach(ele=>renderElement(ele))}
        <p>Still nothing</p>
    </div>
  )
}

export default TestForEach