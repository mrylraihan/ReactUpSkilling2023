import React, { useEffect, useState } from 'react'

function useCounter(forwards = true) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
       const interval = setInterval(()=>{
        if(forwards){
            setCounter(prev=>prev+1)
        }else{
            setCounter(prev=>prev-1)
        }
       },1000)
       return ()=>clearInterval(interval)
    },[forwards]);

  return counter
}

export default useCounter