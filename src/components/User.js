import React from 'react'
import { useSelector } from 'react-redux'

const User = ({ id }) => {
    const user = useSelector(state =>
        Object.values(state.users.entities).find(user => user.id === id)    
    )
    return(
        <div className="leader-board-box" key={user.id}>
            <div className="leader-board-user">
                <img className="leader-board-avatar" src={user.avatarURL} alt={user.name} />
                <p className="leader-board-name">{user.name}</p>
            </div>
            <div className="leader-board-questions">
                <p className="leader-board-item">
                    Answered questions 
                    <span className="leader-board-questions-number">{Object.keys(user.answers).length}</span>
                </p>
                <p className="leader-board-item">
                    Created questions 
                    <span className="leader-board-questions-number">{user.questions.length}</span>
                </p>
            </div>
            <div className="leader-board-score">
                <h2 className="leader-board-score-header">Score</h2>
                <p className="leader-board-score-number">{Object.keys(user.answers).length + user.questions.length}</p>
            </div>
        </div>
    )
}

export default User