var answerlog="";
function get_summary()
        {   question_sequencer(1);

            var txt="";   var nit=0;var dummy="";   var iter=0; 
            for(let i =0;i<qa_list.item[langindex].question.length;i++)
            {   if (qa_list.item[langindex].question[i].opt.length>0)
                {   if(summary_config.log_description==true) {txt=txt+ "description "+qa_list.item[langindex].question[i].des+"\n";}
                    if(summary_config.log_question==true) {txt=txt+ "question "+qa_list.item[langindex].question[i].qno+":"+qa_list.item[langindex].question[i].ques+"\n";}
                    if(summary_config.log_options==true) {txt=txt+"options:";var nit= qa_list.item[langindex].question[i].opt.length;console.log("nit=",nit);
                    for (let iter=0;iter<nit;iter++) {txt=txt+qa_list.item[langindex].question[i].opt[iter].root;if(iter<nit-1) txt=txt+',';}}//;txt=txt+dummy;console.log(dummy);}
                    if(summary_config.log_correct_answers==true) {txt=txt+"\ncorrect answer: " + qa_list.item[langindex].question[i].correct_ans+"\n";}
                    if(summary_config.log_user_answers==true) {txt=txt+"user answer: "+ qa_list.item[langindex].question[i].user_ans + "\n";}
                }
                else 
                { if(summary_config.log_user_answers==true){txt=txt+ "question "+qa_list.item[langindex].question[i].qno+":  "+qa_list.item[langindex].question[i].ques+"\nuser answer: "+ qa_list.item[langindex].question[i].user_ans + "\n";}} 
                   document.getElementById('summary').cols= 50;document.getElementById('summary').rows=20;document.getElementById('summary').value= txt;           
                   document.getElementById('summary').style.visibility="visible";
            }
        }
function download_qa()
{   get_summary();
    console.log()
    txt=document.getElementById('summary').value;
    var blob = new Blob([txt], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "ans.txt");
    document.getElementById('summary').style.visibility="hidden";
}