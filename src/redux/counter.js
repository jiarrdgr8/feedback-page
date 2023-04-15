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
    setRate: (state, action) => {
      state.rate = action.payload
      console.log(state.rate)
      if(state.rate >= 4) {
        state.page =+ 3
      }
      else {
        state.page = 4
      }
    },
    hoverValue: (state, action) => {
      state.hoverValue = action.payload
    },
  },
})


export const { incrementPage, setRate, gotoPage } = counterSlice.actions

export default counterSlice.reducer