import { useState, useEffect } from 'react';
import useCounter from '../hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  // const [counter, setCounter] = useCounter(0);
  const counter = useCounter();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
