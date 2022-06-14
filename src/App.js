import React, { useReducer } from 'react';
import './style.css';
import CompA from './CompA';

export const CountContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

export default function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <CountContext.Provider value={{ count, dispatch }}>
      <div>
        <h1>-- {count} --</h1>
        <button
          onClick={() => {
            dispatch({ type: 'INCREMENT' });
          }}
        >
          APP- INC
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'DECREMENT' });
          }}
        >
          APP- DEC
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'RESET' });
          }}
        >
          APP- RESET
        </button>
      </div>

      <CompA />
      {/* <CompB /> */}
      {/* <CompC /> */}
    </CountContext.Provider>
  );
}
