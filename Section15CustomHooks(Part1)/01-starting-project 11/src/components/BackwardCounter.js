import React from 'react';
import useCounter from '../hooks/use-counter';

import Card from './Card';

const BackwardCounter = () => {
  // const [counter, setCounter] = useState(0);
  const counter = useCounter('backward')
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
