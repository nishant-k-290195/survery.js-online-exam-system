import React from 'react'
import * as Survey from "survey-react";
import "survey-react/survey.css";
import questions from '../database/questions'

const CreateQuestionsPage = () => {
const handleComplete = (survey, options) => {
    console.log("Survey results: " + JSON.stringify(survey.data));
}
    return (
        <div>
            <h4>New Question</h4>
            <hr />
            <p>This form helps you to create a question for a question type, including exam mode, difficulty level, question bank and tags. Tags helps you to group the questions and find it easily from a pool.</p>
            <Survey.Survey 
                json={questions} 
                onComplete={handleComplete}
            />
        </div>
    )
}

export default CreateQuestionsPage
