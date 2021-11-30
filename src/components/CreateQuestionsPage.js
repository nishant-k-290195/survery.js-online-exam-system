import React from 'react'
import * as Survey from "survey-react";
// import * as widgets from "surveyjs-widgets";
import "survey-react/survey.css";
import {createQuestions} from '../database/createQuestions'

// widgets.ckeditor(Survey)

const CreateQuestionsPage = () => {
    const handleComplete = (survey, options) => {
        console.log("Survey results: " + JSON.stringify(survey.data));
    }

    const survey = new Survey.Model(createQuestions);

    return (
        <div>
            <Survey.Survey 
                json={JSON.stringify(createQuestions)} 
                onComplete={handleComplete}
                model={survey}
            />
        </div>
    )
}

export default CreateQuestionsPage
