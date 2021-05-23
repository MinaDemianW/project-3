import React from 'react'
import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

import { selectAllUsers } from '../reducers/usersSlice'
import User from '../components/User'

const LeaderBoard = () => {

    const users = useSelector(selectAllUsers)
    const sortedUsers = Object.keys(users).sort((a,b) => 
        ((Object.keys(users[b].answers).length+ users[b].questions.length)  
        - (Object.keys(users[a].answers).length+ users[a].questions.length))
    )

    // console.log(sortedUsers);
    return(
        <div>
            {sortedUsers.map(id => (
                <User key={id} id={id} />
            ))}
        </div>
    )
}

export default LeaderBoard