import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { saveQuestion } from '../reducers/questionsSlice'

const NewQestion = () => {
    
    const dispatch = useDispatch()
    const authedUser = useSelector(state => state.authedUser)
    
    const [options, setOptions] = useState({
        optionOne: '',
        optionTwo: ''
    })

    const handleChange = (e) => {
        setOptions(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleClick = (e) => {
        e.preventDefault()
        let question = {
            optionOneText: options.optionOne,
            optionTwoText: options.optionTwo,
            author: authedUser
        }
            
        
        dispatch(saveQuestion(question))

        setOptions({
        optionOne: '',
        optionTwo: '',

        })
    }

    return(
         <div>
            <h1 className="new-question-header">Create New Question</h1>
            <form className="new-question-form"> 
                <input 
                    className="new-question-input" 
                    type="text" 
                    placeholder="Enter Option One Text Here" 
                    value={options.optionOne} 
                    name="optionOne"
                    onChange={handleChange} 
                />
                <input 
                    className="new-question-input" 
                    type="text" 
                    placeholder="Enter Option Two Text Here" 
                    value={options.optionTwo} 
                    name="optionTwo"
                    onChange={handleChange}
                />
                <button className="new-question-submit" onClick={handleClick}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default NewQestion