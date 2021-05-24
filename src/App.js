import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux';

import './App.css';
import QuestionsList from './components/QuestionsList'
import SignIn from './views/SignIn'
import Navbar from './components/Navbar'
import NewQestion from './views/NewQuestion';
import LeaderBoard from './views/LeaderBoard';
import QuestionView from './components/QuestionView'
import ErrorPage from './views/ErrorPage'

function App() {
  const authedUser = useSelector(state => state.authedUser)

  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/home" render={() => ( authedUser? <QuestionsList />
        : <Redirect to={{
          pathname: '/',
          state: {referrer: '/home'}
        }} />)} />
        
        <Route path="/add" render={() => ( authedUser? <NewQestion />
        : <Redirect to={{
          pathname:'/',
          state: {referrer: '/add'}
        }} />)} />
        
        <Route path="/leaderboard" render={() => ( authedUser? <LeaderBoard />
        : <Redirect to={{
          pathname: '/',
          state: {referrer: '/leaderboard'}
        }}/>)} />
        <Route path="/questions/:questionId" render={({match}) => ( authedUser? <QuestionView match={match} />
        : <Redirect to={{
          pathname:'/',
          state: {referrer: '/questions/:questionId'}
        }} />)} />
        <Route path="/:wrongroute" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
// render={() => (authedUser? <QuestionsList /> : <SignIn />)}

//render={() => ( authedUser? <Question />: <Redirect to="/" />)}