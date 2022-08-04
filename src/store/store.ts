import { configureStore } from '@reduxjs/toolkit';

import { dataReducer } from './reducers/data-reducer';
import { viewReducer } from './reducers/view-reducer';

const store = configureStore({
  reducer: {data: dataReducer, view: viewReducer},
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;