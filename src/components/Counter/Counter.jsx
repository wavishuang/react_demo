import React, { useState, useEffect, useMemo } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import useCounter from "../../hooks/useCounter";

const Title = React.memo(() => <h2>計數器</h2>);

const Counter = () => {
  // const [count, setCount] = useState(0);
  const {count, add} = useCounter(0);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    console.log('Counter 第一次和因為state改變而重新渲染');
    console.log(`Count 的新值為 ${count}`);
    return () => {
      console.log(`Count 的舊值為 ${count}`)
    }
  }, [count]);

  const decorateName = useMemo(() => {
    console.log('decorate name');
    return `超級 ${userName}`;
  }, [userName]);

  return (
    <div>
      <div>使用者：{decorateName}</div>
      <TextField 
        size="small"
        variant="outlined" 
        id="outlined-name"
        label="姓名"
        placeholder="請輸入姓名"
        value={userName} 
        onChange={(e)=>setUserName(e.target.value)} />
      <Title />
      <p>目前數字: {count}</p>
      <Button variant="contained" color="primary" onClick={() => add(1)}>+1</Button>
    </div>
  );
}

export default Counter;