import Chore from '@/models/chore'
import connectMongo from '@/utils/connect'
import React from 'react'

function AllChores(props) {
    console.log(props)
  return (
    <>
    <div className='app'>
        <h1>All Chores</h1>
    </div>
    {props.chores.map(chore=>{
        return <div key={chore._id} className='app'>
            <h2>{chore.title}</h2>
            <p>{chore.description}</p>
            <p>owner: {chore.owner.username}</p>
        </div>
    })}
    </>

  )
}

export default AllChores


export const getServerSideProps = async () => {
    const data = await fetch('http://localhost:3000/api/chore')
    const chores = await data.json()
    return {
        props: { chores }, // will be passed to the page component as props
    }
}

// export const getServerSideProps = async () => {
//     await connectMongo()
//     let chores = await Chore.find().populate('owner')
//     chores = JSON.stringify(chores)
//     chores = JSON.parse(chores)
//     return {
//         props: { chores }, // will be passed to the page component as props
//     }
// }