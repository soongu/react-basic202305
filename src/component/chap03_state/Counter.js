import React, { useState, useEffect } from 'react'

const Counter = () => {

  const [number, setNumber] = useState(0);
  const [nick, setNick] = useState('익명');

  const increase = () => { setNumber(number + 1); };
  const decrease = () => { setNumber(number - 1); };

  const changeNick = () => { setNick('김철수'); };

  /*
    useEffect: 
    - 화면이 처음 렌더링(마운트) 될 때 자동 호출되는 함수
    - 상태값이 변경될 때마다 다시 호출
    - 만약에 첫 렌더링 시에만 useEffect를 호출하고 싶다면
      두번째 파라미터로 빈 배열(의존성 배열)을 넣으면 된다.
    - 의존성 배열에 상태변수를 넣으면 해당 상태변수가 업데이트 될 때
      마다 useEffect가 재 호출됨.
  */
  useEffect(() => {
    // 화면이 처음 렌더링 될 때 서버 api호출하는 경우
    // 처음 1회 호출후에 또 할 필요가 있을까??
    console.log('3. useEffect Call!!');
    console.log(`4. nick: ${nick}, number: ${number}`);
  }, [nick, number]);

  console.log('1. component function execute!');

  return (
    <>
        { console.log('2. redered html!!') }
        <h1>닉네임: {nick}</h1>
        <h2>{number}</h2>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
        <button onClick={changeNick}>닉네임 변경</button>
    </>
  )
}

export default Counter;