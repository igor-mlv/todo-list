import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import filterReducer from './filterSlice';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        filter: filterReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;