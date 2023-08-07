import React, { useEffect, useState } from 'react'

function useCounter(direction = 'forward') {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if(direction == 'forward'){
            const interval = setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
            }, 1000);
            return () => clearInterval(interval);
        }else if(direction == 'backward'){
            const interval = setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1);
            }, 1000);
            return () => clearInterval(interval);
        }

    }, []);

  return counter
}

export default useCounter