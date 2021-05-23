import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectAllUsers } from '../reducers/usersSlice'

const SingleQuestion = ({ id }) => {

    const question = useSelector(state => 
        Object.values(state.questions.entities).find(question => question.id === id)
    )
    const users = useSelector(selectAllUsers)
    const authedUser = useSelector(state => state.authedUser)
    const filter = useSelector(state => state.filter)
    
    const answered = Boolean(question.optionOne.votes.find(id => id === authedUser)) 
    || Boolean(question.optionTwo.votes.find(id => id === authedUser))

    let shouldRender 
    
    if(filter === 'unanswered') {
        shouldRender = !answered
    } else if (filter === 'answered') {
        shouldRender = answered
    }
    

    return(
        <React.Fragment>
            {shouldRender &&
            <div className="question-box" key={question.id}>
                <div className="question-author">
                    <img className="question-avatar" src={users[question.author].avatarURL} alt={question.author} />
                    <p className="question-name">{users[question.author].name}</p>
                </div>
                <div className="question-info">
                    <h2>Would You Rather ?</h2>
                    <p>{question.optionOne.text}</p>
                    <Link to={`/question/${question.id}`} className="question-button">
                        View Poll
                    </Link>
                </div>
            </div>}
        </React.Fragment>
        )
}

export default SingleQuestion