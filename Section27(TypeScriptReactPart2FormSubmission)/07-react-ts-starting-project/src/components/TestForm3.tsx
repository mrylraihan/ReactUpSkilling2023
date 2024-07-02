import React, { useState } from 'react'

function TestForm3() {
    const [name, setName] = useState<{fname:string}>({fname:''})
    console.log(name)
  return (
		<div>
			<h1>TestForm3</h1>
            <form onSubmit={()=>{}}>
                <div>
                    <label>
                        Name:
                        <input type="text" value={name.fname} onChange={((e:React.ChangeEvent<HTMLInputElement>)=>setName({fname:e.target.value}))}/>
                    </label>
                </div>
                <button type='submit'>submit</button>
            </form>
		</div>
	)
}

export default TestForm3

// function TestForm3() {
//     const [name, setName] = useState({fname:''})
//     console.log(name)
//     const onSubmitHandler = (e:any) =>{
//         e.preventDefault()
//         console.log(e)
//     }
//   return (
// 		<div>
// 			<h1>TestForm3</h1>
// 			<form onSubmit={onSubmitHandler}>
// 				<div>
// 					<label>
// 						Name:
// 						<input
// 							type='text'
// 							value={name.fname}
// 							onChange={(e) => setName({ fname: e.target.value })}
// 						/>
// 					</label>
// 				</div>
// 				<button type='submit'>submit</button>
// 			</form>
// 		</div>
// 	)
// }

// export default TestForm3