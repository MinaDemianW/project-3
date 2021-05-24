import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../reducers/authedUserSlice'

import { selectAllUsers } from '../reducers/usersSlice'
import { useHistory } from 'react-router-dom'

const SignIn = ({ location }) => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [userName, setUserName] = useState("")
    const users = useSelector(selectAllUsers)

    const handleChange = e => { 
        setUserName(e.target.value) 
    }
    const handleClick = e => {
        e.preventDefault()
        dispatch(signIn(userName))
        setUserName("")
        history.push(location.state === undefined? '/home' : location.state.referrer)

    }

    return(
        <div>
            <h1 className="sign-in-header">Sign In</h1>
            <form className="sign-in-form"> 
                <select className="sign-in-input" value={userName} onChange={handleChange}>
                    <option value=""></option>
                    {Object.entries(users).map(([id, user]) => (
                        <option key={id} value={id}>{user.name}</option>
                    ))}
                </select>
                <button className="sign-in-submit" onClick={handleClick}>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn