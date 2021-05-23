import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchQuestions, selectAllQuestions } from '../reducers/questionsSlice'
import { answered, unanswered } from '../reducers/filterSlice'
import SingleQuestion from './SingleQuestion'

const QuestionsList = () => {
    const dispatch = useDispatch()

    const questions = useSelector(selectAllQuestions)
    const status = useSelector(state => state.questions.status)
    const error = useSelector(state => state.questions.error)
    const filter = useSelector(state => state.filter)

    const handleAnsweredClick = (e) => {
        dispatch(answered())
    }

    const handleUnansweredClick = (e) => {
        dispatch(unanswered())
    }

    useEffect(() => {
        if(status === 'idle') {
            dispatch(fetchQuestions())
        }
    }, [status, dispatch])

    
    let content 

    if(status === 'loading') {
        content = <div>Loading...</div>
    } else if (status === 'failed') {
        content = <div>{error}</div>
    } else if (status === 'succeeded') { 
        const sortedQuestions = Object.keys(questions).sort((a,b) =>(
            questions[b].timestamp - questions[a].timestamp            
        ))
        
        content = sortedQuestions
                .map(id => {
                return(
                    <SingleQuestion key={id} id={id} />
                )
            })
    }

    return(
        <div>
            <div className="questions-filter">
                <button
                    className="question-button" 
                    onClick={handleAnsweredClick} 
                    disabled={filter === 'answered'}
                 >Answered</button>
                <button 
                    className="question-button" 
                    onClick={handleUnansweredClick}
                    disabled={filter === 'unanswered'}                
                >Unanswered</button>
            </div>
            {content}        
        </div>
    )
}

export default QuestionsList