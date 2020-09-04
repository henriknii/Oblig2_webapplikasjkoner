var body = document.getElementById('body');
var main = document.createElement('main');

body.style.width = "100%"


//appending main to body
body.appendChild(main)

main.style = "width: 50%; margin:0 auto; border: solid 1px;"



// creating paragraph
var p = document.createElement('p');
p.innerHTML ="Jeg trener på javascript"
p.className = "Klasse"

main.appendChild(p);

//Creating select box
var select = document.createElement('select')
let obj = [{id:1,data:"text"},{id:2, data:"text2"},{id:3, data:"text3"}]

for(let i  = 0; i < obj.length; i++ ){
    var options = obj[i];
    
    var opt = document.createElement("option")
    opt.textContent = options.data;
    opt.value = options.id;

    select.appendChild(opt);  
}

// styling select
select.style =  "display: block;width:20%; max-width:500px; margin:auto;"
main.appendChild(select);


// creating buttons

var btnTest = document.createElement("button")
btnTest.textContent ="Test"
btnTest.addEventListener("click",reverseAndRemove);

var btnReset = document.createElement("button")
btnReset.textContent ="Reset"

btnReset.addEventListener("click",generateUl)

main.appendChild(btnTest);
main.appendChild(btnReset);



function reverseAndRemove(){
  arr = p.innerHTML.split(" ")
  p.innerHTML =""; 
  x = arr.map(s => s.slice(1)); 
  x.reverse();
    
  x.forEach(element => {
      p.innerHTML += " " + element;
  });
}



function generateUl(){
    if(document.getElementsByTagName("ul").length <= 0){
for(let i = 0; i < 4; i++){
    var ul = document.createElement("ul");
    ul.textContent = "Listitem" + i;

    var deleteBtn = document.createElement("button")
    ul.appendChild(deleteBtn);
    deleteBtn.textContent="delete"
    deleteBtn.addEventListener("click",deleteElement)

    main.append(ul);
}
}


}
generateUl();

function deleteElement(){   
   console.log(this.parentElement);
   this.parentElement.remove();

}

