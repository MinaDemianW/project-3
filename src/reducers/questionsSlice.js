import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../_DATA'

export const fetchQuestions = createAsyncThunk('questions/fetchQuestions', async () => {
    const response = await _getQuestions()
    return response
})

export const saveQuestion = createAsyncThunk('questions/saveQuestion', async (question) => {
    const response = await _saveQuestion(question)
    return response
})

export const saveQuestionAnswer = createAsyncThunk('questions/saveQuestionAnswer', async (question) => {
    await _saveQuestionAnswer(question)
    return question
})

const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        status: 'idle',
        entities: {},
        error: null
    },
    reducers: {
        addQuestion: (state, action) => {
            state.entities[action.payload.id] = action.payload
        }
    },
    extraReducers: {
        [fetchQuestions.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchQuestions.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.entities = action.payload
        },
        [fetchQuestions.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        },
        [saveQuestion.fulfilled]: (state, action) => {
            const question = action.payload 
            state.entities[question.id] = question
        },
        [saveQuestionAnswer.fulfilled]: (state, action) => {
            const question = action.payload
            state.entities[question.qid][question.answer].votes.push(question.authedUser)
        }
    }
})


export default questionsSlice.reducer

export const { addQuestion } = questionsSlice.actions

export const selectAllQuestions = state => state.questions.entities
