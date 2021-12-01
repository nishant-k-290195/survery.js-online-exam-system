export var createQuestions = {
    "title": "New Question",
    "description": "This form helps you to create a question for a question type, including exam mode, difficulty level, question bank and tags. Tags helps you to group the questions and find it easily from a pool.",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "panel",
        "name": "panel1",
        "elements": [
         {
          "type": "radiogroup",
          "name": "question1",
          "title": "Language",
          "hideNumber": true,
          "choices": [
           {
            "value": "item1",
            "text": "English"
           }
          ]
         },
         {
          "type": "dropdown",
          "name": "question2",
          "title": "Exam Mode",
          "hideNumber": true,
          "choices": [
           "item1",
           "item2",
           "item3"
          ]
         },
         {
          "type": "dropdown",
          "name": "question3",
          "startWithNewLine": false,
          "title": "Difficulty Level",
          "hideNumber": true,
          "choices": [
           "item1",
           "item2",
           "item3"
          ]
         },
         {
          "type": "dropdown",
          "name": "question4",
          "title": "Question Type",
          "hideNumber": true,
          "choices": [
           "item1",
           "item2",
           "item3"
          ]
         },
         {
          "type": "dropdown",
          "name": "question5",
          "startWithNewLine": false,
          "title": "Subject",
          "hideNumber": true,
          "choices": [
           "item1",
           "item2",
           "item3"
          ]
         },
         {
          "type": "comment",
          "name": "question7",
          "title": "Description"
         },
         {
          "type": "comment",
          "name": "question6",
          "title": "Hint",
          "hideNumber": true
         },
         {
          "type": "panel",
          "name": "panel2",
          "title": "Answer Options"
         },
         {
          "type": "text",
          "name": "question8",
          "title": "Mark",
          "inputType": "number"
         },
         {
          "type": "comment",
          "name": "question10",
          "title": "Question Bank",
          "hideNumber": true
         },
         {
          "type": "boolean",
          "name": "question11",
          "title": "Publish",
          "hideNumber": true
         }
        ],
        "questionTitleLocation": "left"
       }
      ]
     }
    ],
    "showQuestionNumbers": "off",
    "completeText": "Create",
    "widthMode": "responsive"
   }