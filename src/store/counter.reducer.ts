// // counter.reducer.ts
// import { createReducer, on } from '@ngrx/store';
// import { CounterState } from './counter.state';
// import { decrement, increment, set } from './counter.actions';


// export const initialState: CounterState = {
//   counter: 0,
// };

// export const CounterReducer = createReducer(
//   initialState,
//   on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
//   on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
//   on(set, () => initialState)
// );


import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, state => state + 1),
  on(CounterActions.decrement, state => state - 1),
  on(CounterActions.reset, ()  => initialState)
);



