import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'

import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

import { fetchUsers } from './reducers/usersSlice'
import { fetchQuestions } from './reducers/questionsSlice';

store.dispatch(fetchUsers())
store.dispatch(fetchQuestions())

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
