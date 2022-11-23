            function loadquestion(qa) 
            {   
                switch (qa.typ)
                {   case 'img':{var p= document.createElement('img');p.Id='v1';p.name='v1'; p.src=qa.src; d.appendChild(p); break;}
                    case 'video':{var p= document.createElement('video');p.Id='v1';p.name='v1'; p.controls='controls';p.src=qa.src; d.appendChild(p); break;}
                    case 'audio':{var p= document.createElement('AUDIO');p.Id='v1';p.name='v1'; p.controls = 'controls'; p.src=qa.src; d.appendChild(p); break;}
                }
                var br = document.createElement('br'); d.appendChild(br);
                if(qa.des.length>0) 
                {   var t = document.createElement('textarea');t.id = 'description';t.cols=40; t.rows=3; t.value=qa.des;d.appendChild(t); 
                    var br = document.createElement('br'); d.appendChild(br);
                } 
                if(qa.ques.length>0) 
                {   var q = document.createElement('textarea');q.id="question";q.cols=40;q.rows=2;q.value=qa.ques;d.appendChild(q);
                    var br = document.createElement('br'); d.appendChild(br);  
                }
                if(qa.opt.length>0) 
                {   for (let i = 0; i < qa.opt.length; i++) 
                    {   var checkbox = document.createElement('input');checkbox.type = 'checkbox';  checkbox.id = qa.opt[i].toString();
                        var label = document.createElement('label');label.appendChild(document.createTextNode(qa.opt[i].toString()));
                        var br = document.createElement('br');d.appendChild(checkbox); d.appendChild(label); d.appendChild(br);
                    }  
                }
            }
            function tts(txt)
            {   u.text = txt;u.lang = 'en-US';u.rate = 1;voices = window.speechSynthesis.getVoices();u.voice = voices[0];
                speechSynthesis.speak(u);
                return 's'
            } 
            function rootword(aliases,given)
            {   var chk="";var rt="null";var cands="";var match=0;var txt="";m= aliases.length-1;
                givenstripped = given.replace(/\s+/g, '');//console.log("given",givenstripped);
                while ((m>=0)&&(match==0))
                {   rawtxt=aliases[m];cands= rawtxt.split(',');var i=cands.length-1;
                    while((i>=0) && (match==0)) 
                    { chk=cands[i].replace(/\s+/g, '');console.log("chk",chk);
                    if (chk==givenstripped)  {match=1;rt=cands[0];} else{i=i-1;} }
                    if (match==0) {m=m-1;} else {break;}
                } return rt;
            }
            function plrpt() { tts("please repeat)");}
            function startDictation()
            {   var flg=0;
                if (window.hasOwnProperty('webkitSpeechRecognition')) 
                {   var recognition = new webkitSpeechRecognition();recognition.continuous = false;recognition.interimResults = false;recognition.lang = 'en-US';recognition.start();
                    recognition.onresult = function (e) 
                    {   var txt = e.results[0][0].transcript.toLowerCase(); 
                        const myArray = txt.split(" "); recognition.stop(); 
                        var firstwrd = rootword(command_alias ,myArray[0]);
                        var secondwrd="";
                        for (let indx=1;indx<myArray.length;indx++) 
                        {secondwrd=secondwrd+myArray[indx];}
                        console.log(secondwrd,myArray[1]);
                        switch(firstwrd) 
                        {   case "select":
                            {  
                                var  wrd= rootword(parm.optalias,myArray[1]); if (wrd!='null') {if(document.getElementById(wrd).checked==false) {document.getElementById(wrd).click();} tts(wrd+"is selected");flg=1; }break;
                            }
                            case"clear": 
                            {   var  wrd= rootword(parm.optalias,myArray[1]);if (wrd =='null'){plrpt();}else{ if(document.getElementById(wrd).checked==true){document.getElementById(wrd).click();} tts(wrd.toString() +"is not selected now");flg=1;}break;
                            }   
                            case "read": 
                            {   var x = document.getElementById('description');tts(x.value);flg=1;break; 
                            }
                            case"question":
                            {   var x = document.getElementById('question')
                                var txt=x.value;
                                var nopt =parm.opt.length; console.log(txt); 
                                for (let j = 0; j < nopt; j++)
                                 {  txt=txt + '\n'+ parm.opt[j].toString();}
                                
                                 tts(txt); flg=1;break;
                            }
                            
                        }
                        if (flg==0) plrpt();
                        recognition.onerror = function (e) {recognition.stop();}
                    }
                    
                }
                
            }
        