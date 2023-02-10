/* 
  function to get list of question papers from the back end server and display the list on the left side of the 
  "Question Paper Generator" tab, within the "List of Questions" collapsable tab.
*/  
function get_question_paper_list(){
    var div_name=document.getElementById("qp_list_div");
    // Create an unordered list
    var list = document.createElement('ul');

    var end_point = "http://127.0.0.1:5000/listfiles";
    const getData = async(url=end_point,api_method="POST") => {     
      var response;
      response = await fetch(url,{
          method: api_method,
          headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Access-Control-Allow-Origin': 'http://127.0.0.1:5000/',
              'Access-Control-Allow-Methods': 'GET, POST, PUT',
              'Access-Control-Allow-Headers': 'Content-Type'
          }
      });
        
      if (response.ok) {
          const raps = await response.json(); myresult = raps;
      }
      return (myresult);
    }
    getData().then(data_list => { 
      console.log(data_list);
      var wizards = data_list.data.split(',')//['Hermione', 'Neville', 'Gandalf', 'Radagast'];
      console.log(wizards)
      wizards.forEach(function (wizard) {
      var li = document.createElement('li');
      li.textContent = wizard;
      // Calling the function to fetch file contents on click of the button. (button value is name of te file)
      li.setAttribute("onclick","get_article(this.innerHTML)");
      list.appendChild(li);
    });
    div_name.appendChild(list);
    
      
     //alert(data.ack) 
     /* var strs = data.data.split(',')
      console.log(strs);
      list_d= document.getElementById('list_div');
      list_d.innerText=""
      var list = document.createElement("ul");
      for (var i in strs) {
        //list.innerHTML ="<button  onclick='get_article("+strs[i]+")'>open</button>"
        
        btn=document.createElement("button");
        btn.setAttribute('id','btn_id'+i);
        console.log(strs[i]);
        btn.setAttribute("onclick","get_article('"+strs[i]+"')");
        
        btn.innerHTML='open';
        
        var anchor = document.createElement("lable");
        anchor.innerText = "  "+strs[i];

        var elem = document.createElement("li");
        //elem.appendChild(btn);
        //elem.appendChild(anchor);

        list.appendChild(btn);
        list.appendChild(anchor);
        list.appendChild(document.createElement('br'))
        //list.appendChild(elem);
        list_d.append(list);
      }*/
    
    });
    

    // Create a list item for each wizard
    // and append it to the list
    /*var wizards = ['Hermione', 'Neville', 'Gandalf', 'Radagast'];
    wizards.forEach(function (wizard) {
      var li = document.createElement('li');
      li.textContent = wizard;
      list.appendChild(li);
    });
    div_name.appendChild(list);*/
  }

  