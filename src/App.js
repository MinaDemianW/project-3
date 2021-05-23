import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux';

import './App.css';
import QuestionsList from './components/QuestionsList'
import SignIn from './views/SignIn'
import Navbar from './components/Navbar'
import NewQestion from './views/NewQuestion';
import LeaderBoard from './views/LeaderBoard';
import QestionView from './components/QuestionView'
import ErrorPage from './views/ErrorPage'

function App() {
  const authedUser = useSelector(state => state.authedUser)

  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/home" render={() => ( authedUser? <QuestionsList />: <Redirect to="/" />)} />
        <Route path="/add" render={() => ( authedUser? <NewQestion />: <Redirect to="/" />)} />
        <Route path="/leaderboard" render={() => ( authedUser? <LeaderBoard />: <Redirect to="/" />)} />
        <Route path="/question/:questionId" render={({match}) => ( authedUser? <QestionView match={match} />: <Redirect to="/" />)} />
        <Route path="/:wrongroute" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
// render={() => (authedUser? <QuestionsList /> : <SignIn />)}

//render={() => ( authedUser? <Question />: <Redirect to="/" />)}