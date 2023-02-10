var qa_list=
{item:   
    [   
        {   language:"english",
            question: 
            [ 
                {   qno:1, 
                    typ:"img", 
                    src:"Picture1.png", 
                    des:"The above image is one of the most widely used picture to demonstrate image compression",
                    ques:"Identify the person in the above image optional answers are",
                    opt: 
                    [   {   root:"madona", alias:["madona","madonna"],iconfile:""},
                        {   root:"lady gaga",alias:["lady gaga"],iconfile:""},
                        {   root:"lena", alias:["lena","leena","leyna"],iconfile:""},
                        {   root:"nico", alias:["nico","neeco"],iconfile:""}
                    ],
                    correct_ans:["0","0","1","0"],
                    user_ans:[""]
                },
                {   qno:2, 
                    typ:"audio", 
                    src:"2studio.mp3", 
                    des:"The above presentation is one of the most widely liked audio clip",
                    ques:"Identify the audio in the above image optional answers are",
                    opt: 
                    [   {   root:"Game of thrones", alias:["game of thrones","game of throwns"],iconfile:""},
                        {   root:"Bethoven",alias:["bethoven","withoven","withoutoven","bethovan"],iconfile:""},
                        {   root:"edge of the world", alias:["edge of the world","hedge of the world"],iconfile:""}
                    ],
                    correct_ans:["1","0","0"],
                    user_ans:["0","0","0"]
                },
                {   qno:3, 
                    typ:"video", 
                    src:"VID-20150213-WA0011.mp4", 
                    des:"The above video shows an hoist equipment",
                    ques:"In the video above what moves the robotic arm?",
                    opt: 
                    [   {   root:"motor", alias:["motor","motar"],iconfile:""},
                        {   root:"gravity", alias:["gravity","gravety", "graavity"],iconfile:""},
                        {   root:"pneumatic pressure", alias:["pneumatic pressure","neumatic pressure"],iconfile:""}
                    ],
                    correct_ans:["0","0","1"],
                    user_ans:["0","0","0"]
                },
                {   qno:4, 
                    typ:"text", 
                    src:"eng_example1.txt", 
                    des:"Study details of document shown",
                    ques:"which fruit name is most repeated in this document?",
                    opt: 
                    [   {   root:"1", alias:["one","1","apple","yapple"],iconfile:"apple.jpg"},
                        {   root:"2",alias:["two","2","orange","arrange"],iconfile:"orange.jpg"},
                        {   root:"3",alias:["three","3","grapes","grape","grep", "grip","grips"], iconfile:"grapes.jpg"},
                        {   root:"3",alias:["three","3","grapes","grape","grep", "grip","grips"], iconfile:"grapes.jpg"},
                        {   root:"4",alias:["four","4","banana","banaana","banaanaa","bonana","bonaana"],iconfile:"banana.jpg"},
                        {   root:"4",alias:["four","4","banana","banaana","banaanaa","bonana","bonaana"],iconfile:"banana.jpg"}
                    ],
                    correct_ans:["0","0","0","1"],
                    user_ans:["0","0","0","0"]
                   
                },
                {   qno:5, 
                    typ:"text", 
                    src:"eng_example2.txt", 
                    des:"Study details of document shown",
                    ques:"repeat the first sentence in the document?",
                    opt:[],
                    correct_ans:[],
                    user_ans:[]
                   
                },
                {   qno:6, 
                    typ:"i360", 
                    src:"", 
                    des:"Aflatoxin",
                    ques:"Identify the crop in the image?",
                    i360:"http://127.0.0.1:5503/img360/R0010024_20221130082052%20(1).html",
                    opt:[],
                    correct_ans:[],
                    user_ans:[]
                   
                }
            
            ]   
        },
        {
            language:"german",
            question: 
            [ 
                {   qno:1, 
                    typ:"img", 
                    src:"Picture1.png", 
                    des:"Das obige Bild ist eines der am häufigsten verwendeten Bilder, um die Bildkomprimierung zu demonstrieren",
                    ques:"\nFrage Identifizieren Sie die Person im obigen Bild optionale Antworten sind",
                    opt: 
                    [   {   root:"madona", alias:["madona,madonna"],iconfile:""},
                        {   root:"lady gaga",alias:["lady gaga"],iconfile:""},
                        {   root:"lena", alias:["lena,leena,leyna"],iconfile:""},
                        {   root:"nico", alias:["nico,neeco"],iconfile:""}
                    ],
                    correct_ans:["0","0","1","0"],
                    user_ans:["0","0","0","0"]
                },
                {   qno:2, 
                    typ:"audio", 
                    src:"2studio.mp3", 
                    des:"Die obige Präsentation ist einer der beliebtesten Audioclips",
                    ques:"Identifizieren Sie das Audio im obigen Bild sind optionale Antworten",
                    opt: 
                    [   {   root:"Game of thrones", alias:["Game of thrones"],iconfile:""},
                        {   root:"Bethoven",alias:["bethoven, withoven,withoutoven,bethovan,"],iconfile:""},
                        {   root:"edge of the world", alias:["edge of the world"]}
                    ],
                    correct_ans:["1","0","0"],
                    user_ans:["0","0","0"]
                },
                {   qno:3, 
                    typ:"video", 
                    src:"VID-20150213-WA0011.mp4", 
                    des:"Die obige Das obige Video zeigt eine Hebevorrichtung",
                    ques:"Im Video oben, was den Roboterarm bewegt",
                    opt: 
                    [   {   root:"motor", alias:["motor,motar"]},
                        {   root:"manual pressure",alias:["manual pressure"]},
                        {   root:"gravity", alias:["gravity,gravety, graavity"]},
                        {   root:"pneumatic pressure", alias:["pneumatic pressure,neumatic pressure"],iconfile:""}
                    ],
                    correct_ans:["0","0","0","1"],
                    user_ans:["0","0","0","0"]
                },
                {   qno:4, 
                    typ:"text", 
                    src:"german_example1.txt", 
                    des:"Studiendetails des angezeigten Dokuments",
                    ques:"Welcher Fruchtname wird in diesem Dokument am häufigsten wiederholt?",
                    opt: 
                    [   {   root:"apfel", alias:["apple,yapple"],iconfile:"apple.jpg"},
                        {   root:"orange",alias:["orange,arrange"],iconfile:"orange.jpg"},
                        {   root:"traube", alias:["grape,grep, grip"],iconfile:"grapes.jpg"},
                        {   root:"banane", alias:["banane,banana,bananey,banaana,banaanaa,bonana,bonaana"],iconfile:"banana.jpg"}
                       
                    ],
                    correct_ans:["0","0","0","1"],
                    user_ans:["0","0","0","0"]
                   
                },
                {   qno:5, 
                    typ:"text", 
                    src:"german_example1.txt", 
                    des:"Studiendetails des angezeigten Dokuments",
                    ques:"Wiederholen Sie den ersten Satz im Dokument?",
                    opt:[],
                    correct_ans:[],
                    user_ans:[]
                   
                }
            
            ]
            
        }
    ]
}

var qa_list2={};
  