import React, { useEffect, useState } from 'react'

function useTimer(initial = 0) {
    const [counter, setCounter] = useState(initial)
    const [isOn, setIsOn] = useState(false)
    useEffect(() => {
        if (isOn) setTimeout(() => {
            setCounter(counter + 1)
        }, 1000)
    })
    const turnTimerOn = () => setIsOn(!isOn)
  return [counter, turnTimerOn]
}


export default useTimer