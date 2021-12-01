import React from 'react'
import * as Survey from "survey-react";
import * as widgets from "surveyjs-widgets";
// import "survey-react/survey.css";
import "survey-react/modern.css";
import {createQuestions} from '../database/createQuestions'
import { useEffect } from 'react';


const CreateQuestionsPage = () => {
    const handleComplete = (survey, options) => {
        console.log("Survey results: " + JSON.stringify(survey.data));
    }
    
    useEffect(() => {
        (()=>{
            Survey.StylesManager.applyTheme("modern");

            const script = document.createElement("script");
            script.src = "https://cdn.ckeditor.com/4.14.1/standard/ckeditor.js";
            document.head.append(script);

            script.onload = function () {
     
            };
            widgets.ckeditor(Survey);
        })()
    })

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
