import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { _getUsers } from '../_DATA'

import { saveQuestion, saveQuestionAnswer } from './questionsSlice'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await _getUsers()
    return response
})

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        status: 'idle',
        entities: {}
    },
    reducers: {
        addQuestion:{
            reducer: (state, action) => {
                state[action.authedUser].questions.push(action.id)
            },
            prepare: (authedUser, id) => {
                return {
                    payload: {
                        id,
                        authedUser
                    }
                }
            }
        }
    },
    extraReducers:{
        [fetchUsers.fulfilled]: (state, action) => {
            state.status = 'secceeded'
            state.entities = action.payload
        },
        [saveQuestion.fulfilled]: (state, action) => {
            const question = action.payload
            state.entities[question.author].questions.push(question.id)
        },
        [saveQuestionAnswer.fulfilled]: (state, action) => {
            const question = action.payload
            state.entities[question.authedUser].answers[question.qid] = question.id
        }
    }
})

export default usersSlice.reducer

export const { addQuestion } = usersSlice.actions

export const selectAllUsers = state => state.users.entities
