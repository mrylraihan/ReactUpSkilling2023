import React from 'react'
import { useState } from 'react'

function useToggle(start = false) {
    const [toggle, setToggle] = useState(start)

    const toggleHandler = () => setToggle(!toggle)
    
  return [toggle, toggleHandler]
}

export default useToggle