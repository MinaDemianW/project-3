import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filter',
    initialState: 'unanswered',
    reducers:{
        answered: (state) => {
            return state = 'answered'
        },
        unanswered: (state) => {
            return state = 'unanswered'
        }
    }
})


export default filterSlice.reducer

export const { answered, unanswered } = filterSlice.actions