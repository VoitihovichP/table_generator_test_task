import {
  combineReducers,
  configureStore,
  EnhancedStore,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import tables from './reducers/tablesSlice.ts';

const tablesPersistConfig = {
  key: 'tables',
  storage,
  version: 1,
};

const persistedTables = persistReducer(tablesPersistConfig, tables);

const rootReducer = combineReducers({
  tables: persistedTables,
});

export const setupStore = (): EnhancedStore => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

export const store = setupStore();
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
