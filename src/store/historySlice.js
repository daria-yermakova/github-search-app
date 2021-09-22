import { createSlice } from '@reduxjs/toolkit'

export const historySlice = createSlice({
    name: 'history',
    initialState: {
        history: [],
    },
    reducers: {
        add: (state, action) => {
          if (state.history.length >= 5) {
              state.history.shift();
          }
          state.history = [...state.history, action.payload];
        },
    },
})

export const { add } = historySlice.actions

export default historySlice.reducer