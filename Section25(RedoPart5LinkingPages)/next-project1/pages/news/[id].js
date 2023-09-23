import { useRouter } from 'next/router'

function somethingImportant() {
  const router = useRouter()
  let id = router.query.id
  
  console.log(id)
  return (
    <div className='app'>
      <h1>something-Important {id}</h1>
    </div>
  )
}

export default somethingImportant