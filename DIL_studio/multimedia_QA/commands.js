var command_list =
{               
    languages:["english","german"],
    code:["en_us","de-DE"],
    command:
        [   
            {   root:"select",
                word:
                [   
                    {   lang :"english",
                        aliases :["select","selekt","choose","tick","tik","pick","pic"]
                    },
                    {   lang :"german",
                        aliases :["auswählen","ausvelen","auswaylen","ausveylen"]
                    }
                ]
            },
            {   root:"clear",
                word:
                [   
                    {    lang :"english",
                         aliases :["clear","klier","antick","antic","antik","untick","unselect"]
                    },
                    {   lang :"german",
                        aliases :["klar","zum","some","abwählen","afwaylen","abveylen"]  
                    }
                ]
            },
            {   root:"question", 
                word:
                [   
                    {   lang :"english",
                        aliases :["question","kosten","ask"]
                    },
                    {   lang :"german",
                        aliases :["frage","haga","nagel"]
                    }  
                ]
            },
            {   root:"describe",
                word:
                [   
                    {   lang :"english",
                        aliases : ["describe","read","reed","description","explain","explanation"]
                    },
                    {   lang :"german",
                        aliases :["read","lesen","lesson","lessen","leven","beschreiben","beschreibe"]  
                    }
                ]
            },
            {   root:"answer",
                word:
                [   
                    {   lang :"english",
                        aliases : ["answer","reply","response"] 
                    },
                    {   lang :"german",
                        aliases :["answer","antworten"]
                    }
                ]
            },
            {   root:"previous",
            word:
                [   
                    {   lang :"english",
                        aliases : ["previous","goback","back"] 
                    },
                    {   lang :"german",
                        aliases :["früher"] 
                    }
                ]
            },
            {   root:"next",
            word:
                [   
                    {   lang :"english",
                        aliases : ["next","goforward","forward"]
                    },
                    {   lang :"german",
                        aliases :["nächste","nach vorne"] 
                    }
                ]
            },
        ]
    } 
var response_list =
{    
    no_freetext_ans:
    [   
        {   lang :"english",
            response:"this is an objective question - select an optional answer"
        },
        {   lang :"german",
            response :"Dies ist eine objektive Frage - wählen Sie eine optionale Antwort aus"
        }
    ],
    
    obj_ans_selected:
    [   
        {   lang :"english",
            response :"is selected"
        },
        {   lang :"german",
            response :"ist ausgewählt"
        }
    ],
    obj_ans_unselected:
    [   
        {   lang :"english",
            response :"is not selected now"
        },
        {   lang :"german",
            response :"ist jetzt nicht ausgewählt"
        }
    ],
    prev_ques:
    [   
        {   lang :"english",
            response :"previous question posted"
        },
        {   lang :"german",
            response :"vorherige Frage gepostet"
        }
    ],
    next_ques:
    [   
        {   lang :"english",
            response :"next question posted"
        },
        {   lang :"german",
            response :"nächste Fragen gepostet"
        }
    ],
    plrpt:
    [
        {   lang :"english",
            response :"please repeat"
        },
        {   lang :"german",
            response :"wiederholen Sie bitte"
        }
    ]
    
} 
