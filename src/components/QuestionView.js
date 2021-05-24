import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { saveQuestionAnswer } from '../reducers/questionsSlice'
import ErrorPage from '../views/ErrorPage'

const QestionView = ({ match }) => {
    const { questionId } = match.params

    const dispatch = useDispatch()

    const authedUser = useSelector(state => state.authedUser)
    const users = useSelector(state => state.users.entities)

    const question = useSelector(state => Object.values(state.questions.entities).find((question) => (
        question.id === questionId
    )))

    const [questionAnswer, setquestionAnswer] = useState('')

    const handleChange = (e) => {
        setquestionAnswer(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        const question = {
            authedUser, 
            qid: questionId, 
            answer: questionAnswer
        }
        dispatch(saveQuestionAnswer(question))
    }

    let isAnswered, optionOneVotes, optionTwoVotes, allVotes, authedUserVoteOptionOne, authedUserVoteOptionTwo

    if(question){
        isAnswered = Boolean(question.optionOne.votes.find(vote => vote === authedUser))
        ||  Boolean(question.optionTwo.votes.find(vote => vote === authedUser))
        
        optionOneVotes = question.optionOne.votes.length
        optionTwoVotes = question.optionTwo.votes.length
        allVotes = optionOneVotes + optionTwoVotes

        authedUserVoteOptionOne = question.optionOne.votes.find(vote => vote === authedUser)
        authedUserVoteOptionTwo = question.optionTwo.votes.find(vote => vote === authedUser)
    }
    
    return(
         <div className="container">
         {question? <React.Fragment>
            <h1 className="new-question-header">Would You Rather ...</h1>
            <div className="question-author-single">
                <img className="question-avatar-single" src={users[question.author].avatarURL} alt={question.author} />
            </div>
                {!isAnswered ?
                    <div>
                        <form className="new-question-form"> 
                            <div className="question-option">
                                <input 
                                type="radio" 
                                value="optionOne" 
                                name="question"
                                id="questionOne"
                                onChange={handleChange} 
                                />
                                <label htmlFor="optionOne">
                                    {question.optionOne.text}
                                </label>
                            </div>
                            <div className="question-option">
                                <input 
                                type="radio" 
                                value="optionTwo" 
                                name="question"
                                id="optionTwo"
                                onChange={handleChange}
                                />
                                <label htmlFor="optionTwo">
                                    {question.optionTwo.text}
                                </label>
                            </div>
                            <button className="new-question-submit" onClick={handleClick}>Submit</button>
                        </form>
                    </div>
                : 
                    <div>
                        <div className="new-question-form"> 
                            <div className={authedUserVoteOptionOne? "question-option-answered" : "question-option-not-answered"} >
                            <div>
                                <p className="option">
                                    {question.optionOne.text}
                                    <br />
                                    <span>
                                        {optionOneVotes} out of {allVotes} votes
                                    </span>
                                    <br />
                                    <span>
                                        {((optionOneVotes/allVotes) * 100).toFixed(2)}%
                                    </span>
                                </p>
                            </div>
                            {authedUserVoteOptionOne && 
                            <div className="your-vote">
                                <p>Your vote</p>
                            </div>}
                                
                            </div>
                            <div className={authedUserVoteOptionTwo? "question-option-answered" : "question-option-not-answered"}>
                                <div>
                                    <p className="option">
                                        {question.optionTwo.text}
                                        <br />
                                        <span>
                                            {optionTwoVotes} out of {allVotes} votes
                                        </span>
                                        <br />
                                        <span>
                                            {((optionTwoVotes/allVotes) * 100).toFixed(2)}%
                                        </span>
                                    </p>
                                </div>
                                {authedUserVoteOptionTwo && 
                                <div className="your-vote">
                                    <p>Your vote</p>
                                </div>}
                                
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment> 
            : <ErrorPage />
        }
        </div>
    )
}

export default QestionView