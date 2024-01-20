import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ColorfulMessage } from './components/ColorfulMessage';

export const App = () => {

  console.log("Appだよ");

  const [num,setNum] = useState(0);
  const onClick = () => {
    setNum((prev) => prev + 1);
  };

  
  const [isShowFace,setIsShowFace] = useState(true);
  const onclickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    if(num % 3 === 0) {
      isShowFace || setIsShowFace(true);
    }else{
     isShowFace && setIsShowFace(false);
    }
  },[num]);  

  return (
    <>
      <h1 style={{ color: 'red'}}>関数だよ</h1>
      {/* App内でColorfulMessage*/}
      <ColorfulMessage color="blue">ヒンナ</ColorfulMessage>
      <ColorfulMessage color="green">オソマ</ColorfulMessage>
      <button onClick={onClick}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onclickToggle}>on/off</button>
      {isShowFace && <p>꒰ᐢ⸝⸝· ᴥ ·⸝⸝ᐢ꒱</p>}
    </>
  )
};