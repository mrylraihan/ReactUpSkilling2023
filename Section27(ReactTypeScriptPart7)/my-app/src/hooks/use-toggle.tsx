import React, { useState } from 'react'

function useToggle(input:boolean) {
    const [toggle, setToggle] = useState(input)

    function toggleHandler(){ 
      setToggle(!toggle)
    }
  return [toggle, toggleHandler]
}

export default useToggle