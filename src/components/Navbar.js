import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signOut } from '../reducers/authedUserSlice'
import { selectAllUsers } from '../reducers/usersSlice'

const Navbar = () => {

    const authedUser = useSelector(state => state.authedUser)
    const users = useSelector(selectAllUsers)
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(signOut(''))
    }

    return(
        <nav>
            <div className="nav-links">
                <Link className="nav-link" to="/home">
                    Home
                </Link>
                <Link className="nav-link" to="/add">
                    New Question
                </Link>
                <Link className="nav-link" to="/leaderboard">
                    Leader Board
                </Link>
            </div>
            <div>
                {authedUser
                ?  <div className="nav-user">
                    <p>{Object.entries(users).find(([id, user]) => ( id === authedUser ))[1].name}</p>
                    <form>
                        <button onClick={handleClick}>SignOut</button>
                    </form>
                </div> 
                : null}
            </div>
        </nav>
    )
}

export default Navbar