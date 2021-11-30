export var createQuestions = {
    "title": "New Question",
    "description": "This form helps you to create a question for a question type, including exam mode, difficulty level, question bank and tags. Tags helps you to group the questions and find it easily from a pool.",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "language",
                    "title": "Language",
                    "choices": ["English"]
                }, {
                    "type": "dropdown",
                    "name": "exam_mode",
                    "title": "Exam Mode",
                    "choices": ["Exam", "Homework"]
                }, 
                {
                    "type": "dropdown",
                    "name": "difficulty_level",
                    "title": "Difficulty Level",
                    "choices": ["Easy", "Medium", "Hard"]
                }, 
                {
                    "type": "dropdown",
                    "name": "question_type",
                    "title": "Question Type",
                    "choices": [
                        "Multiple Choice", 
                        "Multiple Selection", 
                        "Fill In The Blanks",
                        "Yes/No or True/False",
                        "Descriptive",
                        "Passage Based",
                        "Audio Based",
                        "Video Based",
                        "Short Answer"
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "subject",
                    "title": "Subject",
                    "choices": [
                        "English", 
                        "Maths", 
                        "Reasoning",
                        "GK/GS",
                    ]
                },{
                    "type": "editor",
                    "name": "description",
                    "title": "Description",
                },{
                    "type": "comment",
                    "name": "hint",
                    "title": "Hint",
                },{
                    "type": "matrix",
                    "name": "Answer options",
                    "columns": [
                        "Definitely", "Probably"
                    ],
                    "rows":{

                    }
                },{
                    "type":"number",
                    "name":"mark",
                    "title":"Marks"
                },{
                    "type":"tagbox",
                    "name":"tags",
                    "title":"Tags"
                },{
                    "type":"comment",
                    "name":"question_bank",
                    "title":"Question Bank"
                },{
                    "type":"boolean",
                    "name":"publish",
                    "title":"Publish",
                    "isRequired": true,
                    "description": "( You need to publish this question, if you want to assign it to an exam / homework. )"
                }
            ]
        }
    ],
    "showQuestionNumbers": "off"
};