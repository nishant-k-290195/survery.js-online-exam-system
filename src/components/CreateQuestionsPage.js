import React from 'react'
import * as Survey from "survey-react";
import "survey-react/survey.css";
import {createQuestions} from '../database/createQuestions'

const CreateQuestionsPage = () => {
    const handleComplete = (survey, options) => {
        console.log("Survey results: " + JSON.stringify(survey.data));
    }
    
    return (
        <div>
            <Survey.Survey 
                json={JSON.stringify(createQuestions)} 
                onComplete={handleComplete}
            />
        </div>
    )
}

export default CreateQuestionsPage
