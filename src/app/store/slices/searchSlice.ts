import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
    value: string;
}

const initialState: SearchState = {
    value: '',
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        toggleSearch(state, action) {
            state.value = action.payload;
        },
    },
});

export const { toggleSearch } = searchSlice.actions;

export default searchSlice.reducer;