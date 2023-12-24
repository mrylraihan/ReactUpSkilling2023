import React, { useEffect, useState } from 'react'

function ShowList(props) {
    // created new state so we can manipulate this one instead of our original 
    const [list, setList] = useState('')
    // this will render the default list of all but if the search input isnt empty then will filter the array by name, we do this by splitting the name property and lower casing it then check in that array includes the word we got from our search criteria. if it returns true then return that element to our new render list 
    useEffect(()=>{
        if (props.searchBy){
            setList(props.list.filter(ele=>{
                const tempCheck = ele.name.toLowerCase()
                // before we appended .split('') which only looked for match words not letter
                return  tempCheck.includes(props.searchBy)
                // return ele.name.toLowerCase().includes(props.searchBy)
            }))
        }else{
            setList(props.list)
        }
    }, [props.searchBy,props.list])
    console.log(list)
  return (
    <div className='app'>
        
          <h2>ShowList</h2>
          <hr />
        {list.length>0 && list.map((ele)=>{
            return<div key={ele.id}>
                <h4>{ele.name}</h4>
                <p>{ele.body}</p>
            </div>
        })}
        {!list.length>0 && <p>Sorry thats missing</p>}
    </div>
  )
}

export default ShowList