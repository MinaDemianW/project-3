import { createSlice } from '@reduxjs/toolkit'

const authedUserslice = createSlice({
    name: 'authedUser',
    initialState: '',
    reducers:{
        signIn: (state, action) => {
            return state = action.payload
        },
        signOut: (state, action) => {
            return state = action.payload
        }
    }
})

export const { signIn , signOut } = authedUserslice.actions

export default authedUserslice.reducer 