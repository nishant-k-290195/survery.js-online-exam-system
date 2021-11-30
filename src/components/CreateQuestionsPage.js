import React from 'react'
import * as Survey from "survey-react";
import "survey-react/survey.css";
import questions from '../database/questions.json'


const CreateQuestionsPage = () => {
const handleComplete = (survey, options) => {
    console.log("Survey results: " + JSON.stringify(survey.data));
}
    return (
        <div>
            <h1>CreateQuestionsPage</h1>
            <Survey.Survey 
                json={questions} 
                onComplete={handleComplete}
            />
        </div>
    )
}

export default CreateQuestionsPage
