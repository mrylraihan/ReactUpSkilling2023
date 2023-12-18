import React from 'react'

function home(props) {
    console.log(props)
  return (
    <div>home</div>
  )
}

export default home

export async function getStaticProps() {
        // Fetch data from the API route
        const res = await fetch('http://localhost:3000/api/test');
        const data = await res.json();

        return {
            props: {
                data,
            },
        };
}