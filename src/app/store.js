import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from '../reducers/questionsSlice'
import usersReducer from '../reducers/usersSlice'
import authedUserReducer from '../reducers/authedUserSlice'
import filterReducer from '../reducers/filterSlice'

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    users: usersReducer,
    authedUser: authedUserReducer,
    filter: filterReducer,
  },
});
