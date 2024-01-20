//厳密にReactの構文に沿っているかチェクする
import React, { StrictMode } from 'react';

//Reactを使う時のお決まり
import { createRoot } from 'react-dom/client';
//Appコンポーネントを参照する
import { App } from './App';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App></App>
  </StrictMode>
);