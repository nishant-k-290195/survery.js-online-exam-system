export var createQuestions ={
    "title": "New Question",
    "description": "This form helps you to create a question for a question type, including exam mode, difficulty level, question bank and tags. Tags helps you to group the questions and find it easily from a pool.",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question2",
        "title": "Language",
        "titleLocation": "left",
        "choices": [
         {
          "value": "item1",
          "text": "English"
         }
        ]
       },
       {
        "type": "panel",
        "name": "panel2",
        "elements": [
         {
          "type": "dropdown",
          "name": "question3",
          "title": "Exam Mode",
          "titleLocation": "left",
          "choices": [
           {
            "value": "item1",
            "text": "Exam"
           },
           {
            "value": "item2",
            "text": "Home Work"
           }
          ]
         },
         {
          "type": "dropdown",
          "name": "question1",
          "title": "Question Type",
          "choices": [
           {
            "value": "item1",
            "text": "Multiple Choice"
           },
           {
            "value": "item2",
            "text": "Multiple Selection"
           },
           {
            "value": "item3",
            "text": "Fill in the blanks"
           }
          ]
         }
        ],
        "questionTitleLocation": "left"
       },
       {
        "type": "panel",
        "name": "panel1",
        "elements": [
         {
          "type": "dropdown",
          "name": "question4",
          "title": "Difficulty Level",
          "choices": [
           {
            "value": "item1",
            "text": "Easy"
           },
           {
            "value": "item2",
            "text": "Medium"
           },
           {
            "value": "item3",
            "text": "Hard"
           }
          ]
         },
         {
          "type": "dropdown",
          "name": "question5",
          "title": "Subject",
          "choices": [
           {
            "value": "item1",
            "text": "Maths"
           },
           {
            "value": "item2",
            "text": "Physics"
           },
           "item3"
          ]
         }
        ],
        "questionTitleLocation": "left",
        "startWithNewLine": false
       },
       {
        "type": "panel",
        "name": "panel3",
        "elements": [
         {
          "type": "comment",
          "name": "question6",
          "title": "Description"
         },
         {
          "type": "comment",
          "name": "question7",
          "title": "Hint"
         }
        ]
       },
       {
        "type": "panel",
        "name": "panel4",
        "elements": [
         {
          "type": "paneldynamic",
          "name": "question8",
          "title": "MCQ"
         }
        ],
        "title": "Answer options"
       },
       {
        "type": "panel",
        "name": "panel5"
       },
       {
        "type": "text",
        "name": "question9",
        "title": "Mark",
        "titleLocation": "left",
        "inputType": "number",
        "min": "0"
       },
       {
        "type": "comment",
        "name": "question10",
        "title": "Question Bank"
       },
       {
        "type": "boolean",
        "name": "question11",
        "title": "Publish"
       }
      ],
      "questionTitleLocation": "left"
     }
    ],
    "widthMode": "responsive"
   }