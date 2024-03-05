import React from 'react'
import { useEffect } from 'react'

function MainLayer() {
  
  useEffect(() => {
		 if (!localStorage.getItem('mainValue')) {
				fetch('https://jsonplaceholder.typicode.com/posts/1')
					.then((response) => response.json())
					.then((json) => {
						console.log('from MainLayer')
						localStorage.setItem('mainValue', 'Main Layer from LocalStorage')
					})
			} else {
				console.log(localStorage.getItem('mainValue'))
			}
	}, [])
  
  return (
    <div className='app'>
      <h1>Main Layer</h1>
    </div>
  )
}

export default MainLayer
