import React, { useState } from 'react'

function useToggle(input=false) {
    const [toggle, setToggle] = useState(input)

    const toggling = ()=>setToggle(!toggle)

  return [toggle, toggling]
}

export default useToggle