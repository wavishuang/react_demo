import { useState, useEffect } from 'react';

const useCounter = (initialCount, callbackFunction=null) => {
  const [count, setCount] = useState(initialCount);

  if(callbackFunction !== null) {
    useEffect(callbackFunction, [count]);
  }

  const add = (added) => {
    setCount(count + added);
  };

  return {count, add};
}

export default useCounter;