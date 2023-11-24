// // app.selector.ts
// import { createSelector, createFeatureSelector } from '@ngrx/store';
// import { CounterState } from './counter.state';

// export const selectAppState = createFeatureSelector<CounterState>('app');

// export const selectCounter = createSelector(
//   selectAppState,
//   (state) => state.counter
// );

// counter.selector.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCounterState = createFeatureSelector<number>('counter');

export const selectCounter = createSelector(
  selectCounterState,
  (state: number) => state
);
