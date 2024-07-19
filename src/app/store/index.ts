import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import filterReducer from './slices/filterSlice';
import notesArrayReducer from './slices/notesArraySlice';

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