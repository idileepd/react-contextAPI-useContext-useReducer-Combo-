import React, { useContext } from 'react';
import { CountContext } from './App';

export default function () {
  const ctx = useContext(CountContext);
  return (
    <div>
      <h1>-- {ctx.count} --</h1>
      <button
        onClick={() => {
          ctx.dispatch({ type: 'INCREMENT' });
        }}
      >
        A- INC
      </button>
      <button
        onClick={() => {
          ctx.dispatch({ type: 'DECREMENT' });
        }}
      >
        A- DEC
      </button>
      <button
        onClick={() => {
          ctx.dispatch({ type: 'RESET' });
        }}
      >
        A- RESET
      </button>
    </div>
  );
}
