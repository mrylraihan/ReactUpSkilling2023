import React, { useEffect, useState } from 'react'

function useCounter2() {
    const [count, setCounter] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCounter(count+1)
        },1000)
    })

  return count
}

export default useCounter2