import Note from '@/models/note'
import React from 'react'

function NotesDetails(props) {
    console.log(props)
    const data = props.data;
  return (
    <div>
          <h1>NotesDetails</h1>
          <p>{data.title}</p>
          <p>{data.description}</p>
          <p>{data._id}</p>
          {/* <p>{data.owner}</p> */}
    </div>
  )
}

export default NotesDetails

export const getServerSideProps = async(context)=>{
const id = context.params.id
    let res = await Note.findById(id).populate('owner')
    let data = await JSON.stringify(res)
    data = JSON.parse(data)
return {
    props:{
        data:data,
        id
    }
}
}