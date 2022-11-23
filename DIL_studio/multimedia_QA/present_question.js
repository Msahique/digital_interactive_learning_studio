var qi=0;var nq= qa_list.item[langindex].question.length;
function present_question(qi) 
{   present.innerHTML="";describe.innerHTML="";question.innerHTML="";ans_options.innerHTML="";
    var source=presentation_config.content_filepath+qa_list.item[langindex].question[qi].src;//console.log(source);
    var desc=qa_list.item[langindex].question[qi].des;var ques=qa_list.item[langindex].question[qi].ques;
    switch (qa_list.item[langindex].question[qi].typ)// based on type of media content instantiate appropriate element and load content
    {   case 'img': {   var p= document.createElement('img');p.class="img-fluid";p.Id='image_view';p.name='image_view'; ; p.src= source;present.appendChild(p); break;}
        case 'video':{  var p= document.createElement('video');p.Id='video_view';p.name='video_view'; p.controls='controls';p.src=source; present.appendChild(p); break;}
        case 'audio':{  var p= document.createElement('AUDIO');p.Id='audio_view';p.name='audio_view'; p.controls = 'controls'; p.src=source; present.appendChild(p); break;}
        case 'text':{   var cols=40;var p = document.createElement('textarea');p.id="text_view";p.cols=cols;p.name="text_view";present.appendChild(p);
                        fetch(source).then(response => response.text()).then(data => {document.getElementById('text_view').value=data;var rs=(data.length/cols)+2;console.log(cols, data.length,rs);document.getElementById('text_view').rows=rs;});break;}
//      case 'doc':{var ifrm = document.createElement('iframe');ifrm.setAttribute('id', 'ifrm');ifrm.setAttribute('src','demo.html');document.body.appendChild(ifrm);break;}
    }   
    var br = document.createElement('br'); present.appendChild(br);
    if(qa_list.item[langindex].question[qi].des.length>0) // if there is associated textual description instantiate seperate element and display it
    {   var t = document.createElement('textarea');t.id = 'description';t.cols=40; t.rows=(desc.length/t.cols).toFixed+1;t.value=desc;describe.appendChild(t); 
        var br = document.createElement('br'); describe.appendChild(br);
    } 
    if(qa_list.item[langindex].question[qi].ques.length>0) // if there is associated textual question instantiate seperate element and display it
    {   var q = document.createElement('textarea');q.id="question";q.cols=40;q.rows=(ques.length/q.cols).toFixed+1;
        q.value=ques;question.appendChild(q);//console.log("qrows=",q.rows);
        var br = document.createElement('br'); question.appendChild(br);  
        var anslen = qa_list.item[langindex].question[qi].opt.length;
        var usans = qa_list.item[langindex].question[qi].user_ans;
        if(anslen>0) 
        {   for (let i = 0; i < anslen; i++) // show  any multichoice answer options
            {   var id=qa_list.item[langindex].question[qi].opt[i].root.toString();id=id.toLowerCase();//console.log("id:",id);
                var iconsource= qa_list.item[langindex].question[qi].opt[i].iconfile;//console.log("this is iconsource =",iconsource);
                var checkbox = document.createElement('input');checkbox.type = 'checkbox'; checkbox.id = id; // display checkbox against each objective answer
                if(usans[i] == "1") checkbox.checked=true;else checkbox.checked=false;// selectt/clear checkbox based on previously stored status if any                
                if(iconsource.length>0)  checkbox.style.visibility = "hidden";
                if(iconsource.length>0) 
                {iconsource= presentation_config.content_filepath + iconsource;
                    var p= document.createElement('img');p.class="img-fluid";p.Id="icon"+id;p.name='icon_view';p.innerText = "this is a test";
                    p.onclick = icon_click(id); p.src= iconsource; ans_options.appendChild(p);
                }
                var label = document.createElement('label');label.appendChild(document.createTextNode(id));//instantiate seperate label for each answer (assumed id is the text of the answer),
                
                ans_options.appendChild(checkbox); ans_options.appendChild(label); //append all instances to the div
              
                var br = document.createElement('br');
            }  
        }
        else
        {   var ans = document.createElement('textarea');ans.id="answer";ans.cols=40;ans.rows=2;
            if(usans.length>0) ans.value=usans; else ans.value=""; ans_options.appendChild(ans);
            var br = document.createElement('br'); ans_options.appendChild(br); 
        }

    }
    
   
    
}
function icon_click(id)
{//console.log("iconid",id);
}
 


