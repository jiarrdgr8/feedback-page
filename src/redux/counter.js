import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 1,
  rate: 0,
  // hoverValue: undefined
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1
    },
    decrementPage: (state) => {
      state.page -= 1
    },
    setRate: (state, action) => {
      state.rate = action.payload
      // console.log(state.rate)      
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
  },
})


export const { incrementPage, setRate, setPage, decrementPage } = counterSlice.actions

export default counterSlice.reducer