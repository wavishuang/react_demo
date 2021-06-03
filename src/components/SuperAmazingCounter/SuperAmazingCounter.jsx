import React, { useState, useEffect } from 'react';
import useCounter from "../../hooks/useCounter";
import Button from "@material-ui/core/Button";


const SuperAmazingCounter = () => {
  // const [count, setCount] = useState(100);

  const {count, add} = useCounter(100, () => {
    console.log("超炫砲計數器執行");
  });
  //useEffect(() => {
  //  console.log("超炫砲計數器執行");
    //return () => {
    //  cleanup
    //}
  //}); //, [input])

  return (
    <div>
      <div>目前超炫砲的數字：{count}</div>
      <Button variant="contained" color="secondary" onClick={() => add(10)}>加10</Button>
    </div>
  );
}

export default SuperAmazingCounter;