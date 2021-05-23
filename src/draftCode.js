
    // const arr = Object.values(questions).filter((question) =>
    // Boolean(Boolean(question.optionOne.votes.find(vote => vote === authedUser))
    // ||  Boolean(question.optionTwo.votes.find(vote => vote === authedUser)))
    // )

    // let obj = {}

    // for (let i = 0; i < arr.length; i++ ){
    //     obj[arr[i].id] = arr[i]
    // } 

    // console.log(arr);
    // console.log(obj);
    
    // let isAnswered = false

    // const AnsweredQuestions = () =>(
    //     Object.entries(questions)
    //     .filter(([, question]) =>
    //     Boolean(Boolean(question.optionOne.votes.find(vote => vote === authedUser))
    //     ||  Boolean(question.optionTwo.votes.find(vote => vote === authedUser)))
    //     )
    //     .map(([id, question]) => {
    //             return(
    //                 <div className="question-box" key={question.id}>
    //                     <div className="question-author">
    //                         <img className="question-avatar" src={users[question.author].avatarURL} alt={question.author} />
    //                         <p className="question-name">{users[question.author].name}</p>
    //                         {/* <p>{isAnswered}</p> */}
    //                     </div>
    //                     <div className="question-info">
    //                         <h2>Would You Rather ?</h2>
    //                         <p>{question.optionOne.text}</p>
    //                         <Link to={`/question/${question.id}`} className="question-button">
    //                             View Poll
    //                         </Link>
    //                     </div>
    //                 </div>
    //             )
    //         })
    // )
    
    // const UnansweredQuestions = () =>(
    //     Object.entries(questions)
    //     .filter(([, question]) =>
    //     !Boolean(Boolean(question.optionOne.votes.find(vote => vote === authedUser))
    //     ||  Boolean(question.optionTwo.votes.find(vote => vote === authedUser)))
    //     )
    //     .map(([id, question]) => {
    //             return(
    //                 <div className="question-box" key={question.id}>
    //                     <div className="question-author">
    //                         <img className="question-avatar" src={users[question.author].avatarURL} alt={question.author} />
    //                         <p className="question-name">{users[question.author].name}</p>
    //                         {/* <p>{isAnswered}</p> */}
    //                     </div>
    //                     <div className="question-info">
    //                         <h2>Would You Rather ?</h2>
    //                         <p>{question.optionOne.text}</p>
    //                         <Link to={`/question/${question.id}`} className="question-button">
    //                             View Poll
    //                         </Link>
    //                     </div>
    //                 </div>
    //             )
    //         })
    // )


        // answered:{
        //     reducer: (state, action) => {
        //         const arr = Object.values(state.entities).filter((question) =>{
        //         Boolean(Boolean(question.optionOne.votes.find(vote => vote === action.payload.authedUser))
        //         ||  Boolean(question.optionTwo.votes.find(vote => vote === action.payload.authedUser)))
        //         })

        //         let answeredObj = {}

        //         for (let i = 0; i < arr.length; i++ ){
        //             answeredObj[arr[i].id] = arr[i]
        //         } 
                
        //         state.entities = answeredObj 
        //     },
        //     prepare: (authedUser) => {
        //        return {
        //            payload: {
        //                authedUser
        //            }
        //        } 
        //     }
        // },
        // unanswered:{
        //     reducer: (state, action) => {
        //         const arr = Object.values(state.entities).filter((question) =>
        //         !Boolean(Boolean(question.optionOne.votes.find(vote => vote === action.payload.authedUser))
        //         ||  Boolean(question.optionTwo.votes.find(vote => vote === action.payload.authedUser)))
        //         )

        //         let obj = {}

        //         for (let i = 0; i < arr.length; i++ ){
        //             obj[arr[i].id] = arr[i]
        //         } 
                
        //         state.entities = obj 
        //     },
        //     prepare: (authedUser) => {
        //        return {
        //            payload: {
        //                authedUser
        //            }
        //        } 
        //     }
        // }