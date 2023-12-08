import React from 'react'

function About() {
    const fetchData = () => {
        
        fetch('./api/aboutData/123')
            .then(res => res.json())
            .then(console.log)
            .catch(console.error)
    }
  return (
    <div className='app'>
          <h1>About</h1>
          <button onClick={fetchData}>Get about Data</button>
    </div>
  )
}

export default About