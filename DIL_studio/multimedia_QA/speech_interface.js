var langindex = command_list.languages.indexOf(speech_config.language);var langcode = command_list.code[langindex];
if (speech_config.tts_engine == "SpeechSynthesisUtterance")
{   var u = new SpeechSynthesisUtterance(); u.lang = langcode;u.rate = 1;voices = window.speechSynthesis.getVoices();u.voice = voices[0];}
var voskdata="";var missed_words=[];var missed_optalias=[];var flg=0;var ind=0;var parm="";var wrdlen=0;var myArray=[];
function tts(txt)
{   if(speech_config.tts=="on"){u.text = txt;speechSynthesis.speak(u); return 's'} }

function findcommandindex(given)
{   console.log("command=",given, langindex);
    var chk="";var rt="null";var match=0;givenstripped = given.replace(/\s+/g, '');m= command_list.command.length-1; //console.log("commands=",command_list);
    while ((m>=0)&&(match==0))// for each command word
    {   n= command_list.command[m].word[langindex].aliases.length-1;//find number of aliases
        while ((n>=0)&&(match==0)) // match given word with aliases of command word
        {   chk=command_list.command[m].word[langindex].aliases[n];chk=chk.replace(/\s+/g, ''); 
            if (chk==givenstripped) {match=1;rt=m;} else{n=n-1;} // if match found, note its index   
        }if (match==0) {m=m-1;} else {break;}//until found match or all words checked
    } //until found match or all commands checked
    if(speech_config.learn_command="on") {if ((rt=="null")&&(given.length>0)) {if(missed_words.indexOf(given) == -1){missed_words.push(given); }}} //if new alias found and if not already in list then add new word to list
    return rt;  //return index of command word
}
function findparamid(given)
{   var chk="";var rt="null";var cands="";var match=0;var txt="";givenstripped = given.replace(/\s+/g, ''); //console.log("option=",given);   
    var m =  qa_list.item[langindex].question[qi].opt.length-1; //console.log("m=",m);
    while ((m>=0)&&(match==0))
    {   var n = (qa_list.item[langindex].question[qi].opt[m].alias.length)-1;
        while ((n>=0)&&(match==0))
        {   chk=qa_list.item[langindex].question[qi].opt[m].alias[n]; chk=chk.replace(/\s+/g, ''); //console.log(chk,given);
            if (chk==givenstripped) {match=1;rt=qa_list.item[langindex].question[qi].opt[m].root;} else{n=n-1;} 
        }
        if (match==0) {m=m-1;} else {break;}
    } 
    if(speech_config.learn_option_alias="on") {if ((rt=="null")&&(given.length>0)) {if(missed_optalias.indexOf(given) == -1){missed_optalias.push(given);}}} // console.log("missed optalias=",missed_optalias);  //if new alias found and if not already in list then add new word to list
    return [m,rt];  
}
async function  vosk_recognition() // -----------vosk speech recognition function-------------------
{   var end_point = speech_config.voskpython_endpoint;
    return fetch(end_point,{method: "POST",body: speech_config.model_path})//-- this is the name of the folder which contains specific language model file of speech vectors for vosk
    .then((response) => response.text()).then((result) => { return result;}).catch((error) => console.log("error", error))         
}
function plrpt() { var txt = response_list.plrpt[langindex].response;console.log(txt);tts(txt);} // default reply if any speech input is not understood    
function startDictation() // capture speech till recognitioin of sentence ending and stop, return converted text in lower case letters 
{   var txt="";var data="";var result="";     
    if(speech_config.stt=="on")
    {   switch(speech_config.sttengine)
        {   case "webkit":
            {   if (window.hasOwnProperty('webkitSpeechRecognition')) 
                {   var recognition = new webkitSpeechRecognition();recognition.continuous = false;recognition.interimResults = false;recognition.lang = langcode; recognition.start();
                    recognition.onresult = async function getstt(e){txt = e.results[0][0].transcript.toLowerCase();action(txt); recognition.stop(); }
                    recognition.onerror = function (e) {recognition.stop();}
                }break;
            }
            case  "vosk" :
            {   if (window.hasOwnProperty('vosk_recognition'))
                {   const results =   vosk_recognition().then((value) => value).then ((result) =>{ data = result;txt = data.toLowerCase();action(txt); })
                }break;
            }                 
        }
    }
}
function action(txt) // decipher commands and call appropriate functions to handle the commands with relevant parameters.
{   flg=0; myArray = txt.split(" ");var command="";var secondwrd="";wrdlen=myArray.length;
    ind = findcommandindex(myArray[0]);//console.log("ind=",ind);
    if(ind!="null")
    {   var indx = parseInt(ind);command=command_list.command[indx].root;
        console.log("command=",command);                    
        for (let j=1;j<wrdlen;j++){secondwrd=secondwrd+myArray[j]; }
        switch(command) 
        {   case "select":  {   select_answer(secondwrd); break;}
            case"clear":    {   clear_selection(secondwrd);break;}   
            case "describe":{   describe();break; }
            case "play":    {   play_topic();break; }
            case"question": {   utter_question();break;}
            case "answer":  {   capture_spoken_answer(secondwrd);break;}
            case "previous":{   prevq();break;}
            case "next":    {   nextq();break;}
        }
        if(missed_words.length>0) // Auto Learning: if a valid command is selected then if there is any previous unclear commands in log add to dictionary and clear log
        {   command_list.command[indx].word[langindex].aliases=command_list.command[indx].word[langindex].aliases.concat(missed_words);missed_words=[];
        }
    }
    if ((flg==0)||(ind=="null")) {plrpt();}//if commands or parameters are unclear ask to repeat command    
}
function select_answer(gotword) 
{   var  vals= findparamid(gotword); var wrd=vals[1];var m=vals[0];//console.log("vals=",vals);
    if (wrd!='null')
    {   if(document.getElementById(wrd).checked==false){document.getElementById(wrd).click();} 
        tts(wrd+response_list.obj_ans_selected[langindex].response);flg=1; 
        if(missed_optalias.length>0) update_optaliases(m);
    }
    
}
function clear_selection(gotword)
{   var  vals= findparamid(gotword); var wrd=vals[1];var m=vals[0];//console.log("vals=",vals);
   if (wrd !='null') 
    {   if(document.getElementById(wrd).checked==true){document.getElementById(wrd).click();}
    tts(wrd+response_list.obj_ans_unselected[langindex].response);flg=1; 
    if(missed_optalias.length>0) update_optaliases(m);
    }
}
function describe(){   var x = document.getElementById('description');tts(x.value);flg=1; }
function play() {   var x = document.getElementById('description').click();}
function utter_question()
{   parm = qa_list.item[langindex].question[qi]; var x = document.getElementById('question');var txt=x.value;var nopt =parm.opt.length;// console.log(txt); 
    for (let j = 0; j < nopt; j++) {  txt=txt + '\n'+ qa_list.item[langindex].question[qi].opt[j].root.toString();} tts(txt); flg=1;
}
function capture_spoken_answer(ans)
{   if(qa_list.item[langindex].question[qi].opt.length>0)
    {   tts(response_list.no_freetext_ans[langindex].response);flg=1;}
    else
    {   var y = document.getElementById('answer');txt="";for (let j=1;j<wrdlen;j++){txt=txt+" "+myArray[j];}//console.log(myArray);
        y.value= txt;tts( response_list.obj_ans_selected[langindex].response+ txt);flg=1;
    } 
}
function prevq(){question_sequencer(-1);flg=1;tts(response_list.prev_ques[langindex].response);}
function nextq(){question_sequencer(1);flg=1;tts(response_list.next_ques[langindex].response);}
function update_optaliases(m)
{ // Auto Learning: if a valid name is selected then if there is any previous unclear terms in log add to dictionary and clear log
   qa_list.item[langindex].question[qi].opt[m].alias=qa_list.item[langindex].question[qi].opt[m].alias.concat(missed_optalias);missed_opalias=[]; 
  // console.log(qa_list.item[langindex].question[qi].opt[m].alias);
  console.log("option",qa_list.item[langindex].question[qi].opt[m].root); 
}
