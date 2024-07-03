import React from 'react'
import ShowOne from './ShowOne'

const ShowAll:React.FC<{list:string[]}>=(props)=>{
    console.log(props)
  return (
		<div className='App'>
			<header className='App-header'>
				<h2>
					Show All
				</h2>
                <ul>
                    {props.list.map((ele:string, idx)=>{
                        return <ShowOne key={idx} text={ele}/>
                    })}
                </ul>
			</header>
		</div>
	)
}

export default ShowAll