import React from 'react'
import * as Survey from "survey-react";
import "survey-react/survey.css";
import {questions} from '../database/questions'


const QuestionsPage = () => {
    const handleComplete = (survey, options) => {
        console.log("Survey results: " + JSON.stringify(survey.data));
    }
    return (
        <div>
            <Survey.Survey 
                json={JSON.stringify(questions)} 
                onComplete={handleComplete}
            />
        </div>
    )
}

export default QuestionsPage
