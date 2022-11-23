function question_sequencer(step)
{   update_ans();  console.log("before",qi);//console.log("index=",qi,nq);//save previous answer
    qi=qi+(step%nq); console.log("after",qi);//move to further or previous question in circular list, rotate if at endings of list
    if (qi<0){qi=nq+qi;} else {if (qi==nq)qi=qi-nq;}
    console.log("final",qi);
    document.getElementById('summary').innerHTML = ""; //clear previoius contents of this div
    present_question(qi); //load new content in this div
}
function update_ans()
{ // function to scroll save previous answers to qa_list object before changing display to next question
    var l1=qa_list.item[langindex].question[qi].ques.length;
    var l2=qa_list.item[langindex].question[qi].opt.length;var txt="";                
    if(l1>0)
    {   if(l2>0)
        {   for (let i = 0; i < l2; i++) 
            {   var id=qa_list.item[langindex].question[qi].opt[i].root.toString();
                id=id.toLowerCase();
                if( document.getElementById(id).checked){txt="1"; }else{ txt="0";}
                qa_list.item[langindex].question[qi].user_ans[i]=txt;//console.log("check:",qa_list.question[qi].user_ans[i]);
            }
        }
        else
        { qa_list.item[langindex].question[qi].user_ans[0]= document.getElementById('answer').value; }
    }
}
            