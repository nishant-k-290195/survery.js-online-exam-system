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
           {
            "value": "item1",
            "text": "Exam"
           },
           {
            "value": "item2",
            "text": "Home work"
           }
          ]
         },
         {
          "type": "dropdown",
          "name": "question3",
          "startWithNewLine": false,
          "title": "Difficulty Level",
          "hideNumber": true,
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
          "name": "question_type",
          "title": "Question Type",
          "hideNumber": true,
          "choices": [
           {
            "value": "item1",
            "text": "MCQ"
           },
           {
            "value": "item2",
            "text": "Fill in the blanks"
           },
           {
            "value": "item3",
            "text": "Descriptive"
           },
           {
            "value": "item4",
            "text": "Yes/No or True/False"
           },
           {
            "value": "item5",
            "text": "Audio"
           },
           {
            "value": "item6",
            "text": "Video"
           },
           {
            "value": "item7",
            "text": "Short Answer"
           }
          ],
          "otherText": "Video"
         },
         {
          "type": "dropdown",
          "name": "question5",
          "startWithNewLine": false,
          "title": "Subject",
          "hideNumber": true,
          "choices": [
           {
            "value": "item1",
            "text": "Physics"
           },
           {
            "value": "item2",
            "text": "Chemistry"
           },
           {
            "value": "item3",
            "text": "Maths"
           }
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
          "elements": [
           {
            "type": "paneldynamic",
            "name": "question4",
            "visibleIf": "{question_type} = 'item1'",
            "title": "MCQ",
            "titleLocation": "hidden",
            "templateElements": [
             {
              "type": "checkbox",
              "name": "question9",
              "titleLocation": "hidden",
              "choices": [
               {
                "value": "item1",
                "text": "Option"
               }
              ],
              "choicesFromQuestionMode": "unselected"
             },
             {
              "type": "comment",
              "name": "question12",
              "visible": false,
              "visibleIf": "{question_type} = 'item1'",
              "startWithNewLine": false,
              "titleLocation": "hidden"
             }
            ],
            "panelCount": 2,
            "minPanelCount": 2,
            "maxPanelCount": 4,
            "panelsState": "expanded"
           },
           {
            "type": "comment",
            "name": "question13",
            "visible": false,
            "visibleIf": "{question_type} = 'item3'",
            "title": "Descriptive",
            "titleLocation": "left"
           },
           {
            "type": "comment",
            "name": "question21",
            "visible": false,
            "visibleIf": "{question_type} = 'item7'",
            "title": "Short Answer",
            "titleLocation": "left"
           },
           {
            "type": "text",
            "name": "question14",
            "visible": false,
            "visibleIf": "{question_type} = 'item2'",
            "title": "Fill in the blanks"
           },
           {
            "type": "file",
            "name": "question17",
            "visible": false,
            "visibleIf": "{question_type} = 'item5'",
            "title": "Audio"
           },
           {
            "type": "file",
            "name": "question18",
            "visible": false,
            "visibleIf": "{question_type} = 'item6'",
            "title": "Video"
           },
           {
            "type": "boolean",
            "name": "question20",
            "visible": false,
            "visibleIf": "{question_type} = 'item4'",
            "titleLocation": "hidden"
           }
          ],
          "visible": false,
          "visibleIf": "{question_type} notempty",
          "questionTitleLocation": "left",
          "title": "Answer options",
          "innerIndent": 10
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