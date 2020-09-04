


//Global variables
var modalBg = document.querySelector('.modal-bg');

//Todo objects 
let id= 0;
let myTodos = []
let completedTodos =[]

// Keeping track of id for the todo

//A test button for now
let button = document.getElementById("createTodoBtn");
let createTodoCardButton = document.getElementById('modalBtn');
let closeModalBtn = document.getElementById('closeModalBtn');

//Function creating object and storing them in the array
function createObject(){
   
    let todoTitle = document.getElementById('inputTitle').value;
    let description = document.getElementById('textArea').value;
    let author = document.getElementById('author').value;

    

    if(todoTitle && description && author){
        let myTodoObj = {id:id,title: todoTitle, description: description, author:author}
        myTodos.unshift(myTodoObj)
        update();
        closeModal();
    }
    else
    {
        alert("please enter your title,description and author")
    }
    id++

 
}
function update(){
    
    document.getElementById("todoArticles").innerHTML = "";

    const todosLen = myTodos.length < 3 ? myTodos.length : 3;

    for(let i = 0; i < todosLen; i++){
        generateTodoArticles(myTodos[i]);
      
    }
}

//Function to generate todo cards
function generateTodoArticles(obj){
    
    
    //Getting the articleWrapper.
    let articleWrapper = document.getElementById("todoArticles");
    // Creating article
    var article = document.createElement('article')
    article.className = "article"
    article.id = obj.id;
    // Creating header
    var header = document.createElement('h1')
    header.textContent = obj.title;
    
    //Desecription
    var descr = document.createElement('p')
    descr.textContent = obj.description

    //Creating delete button
    var buttonDelete = document.createElement('a')
    buttonDelete.textContent = "Delete";
    buttonDelete.className="buttonDelete"
    buttonDelete.addEventListener("click",() =>{
         deleteTodo(obj)
         
    })



    //creating complete button
    var buttonComplete = document.createElement('a')
    buttonComplete.textContent = "Complete";
    buttonComplete.className="buttonComplete"
    buttonComplete.onclick = () =>{
        completedTask(obj);
        getFormattedDate();
        deleteTodo(obj);
    }

  
    //Appending all elements to the article 
    articleWrapper.appendChild(article)
    article.appendChild(header) 
    article.appendChild(descr)
    article.appendChild(buttonDelete)
    article.appendChild(buttonComplete) 
    
}

//Called when a task is completed 

function completedTask(obj){

    let tableContent = document.getElementById("tableContent")
   
    //Title
    var title = document.createElement('h5') 
    title.textContent=obj.title;
    title.className ="h5"

    //Author
    let author = document.createElement('h5')
    author.textContent = obj.author;
    //Description
    let descript = document.createElement('h5')
    descript.textContent = obj.description;
    //Date
    let date = document.createElement('h5');
    date.textContent = getFormattedDate();

  

    tableContent.appendChild(title);
    tableContent.appendChild(author);
    tableContent.appendChild(descript);
    tableContent.appendChild(date);

}

//Called upon clicking the +todo to open modal for the todo creation window.
function openModal(){
    modalBg.classList.add('bg-active')
}

function closeModal(){
    modalBg.classList.remove('bg-active')
}

//called upon clicking delete
function deleteTodo(obj){
   const index = myTodos.indexOf(obj);
   if(index > -1){
       myTodos.splice(index,1);
   }

   update();
    

}





function getFormattedDate(){
    let date = new Date()
    let month = date.getMonth() +1;
    let day = date.getDate();
    let year = date.getFullYear()

    return day + "." + month + "." + year
    
   
}

//Called upon creating the todo task.
createTodoCardButton.addEventListener("click",createObject);

//Opening the modal
button.addEventListener("click", openModal);

//Closing the modal
closeModalBtn.addEventListener("click",closeModal);

document.getElementById("textArea").onkeyup = function(){
    document.getElementById('count').innerHTML = `(${30 - this.value.length})`
}