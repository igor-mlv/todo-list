import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import filterReducer from './filterSlice';
import notesArrayReducer from './notesArraySlice';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        filter: filterReducer,
        notesArray: notesArrayReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;