


//Global variables
var modalBg = document.querySelector('.modal-bg');

//Todo objects 

let myTodos = []
// Keeping track of id for the todo
let id = 0;
//A test button for now
let button = document.getElementById("createTodoBtn");
let createTodoCardButton = document.getElementById('modalBtn');
let closeModalBtn = document.getElementById('closeModalBtn');

//Function creating object and storing them in the array
function createObject(){
    id++
    let todo = [];
    let todoTitle = document.getElementById('inputTitle').value;
    let description = document.getElementById('textArea').value;
    let author = document.getElementById('author').value;
    
    if(todoTitle && description && author){
        let myTodoObj = {id:id,title: todoTitle, description: description, author:author}
        todo.unshift(myTodoObj)
    
        closeModal()
    }
    else
    {
        alert("please enter your title,description and author")
    }
}  



function update(obj){


    
}
//Function to generate todo cards
function generateTodoArticles(obj){
    
    
    //Getting the articleWrapper.
    let articleWrapper = document.getElementById("todoArticles");
    // Creating article
    var article = document.createElement('article')
    article.className = "article"
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
    buttonDelete.addEventListener("click",(e) =>{
    deleteTodo(e,obj)
    })



    //creating complete button
    var buttonComplete = document.createElement('a')
    buttonComplete.textContent = "Complete";
    buttonComplete.className="buttonComplete"
    buttonComplete.onclick = () =>{
        completedTask(obj)
    }

  

   

    //Appending all elements to the article 
    articleWrapper.appendChild(article)
    article.appendChild(header) 
    article.appendChild(descr)
    article.appendChild(buttonComplete) 
    article.appendChild(buttonDelete)
}

//Called when a task is completed 

function completedTask(obj){
 let tableContent = document.getElementById('tableContent')
 let author = obj.author
 
 tableContent.appendChild
    
}

//Called upon clicking the +todo to open modal for the todo creation window.
function openModal(){
    modalBg.classList.add('bg-active')
}

function closeModal(){
    modalBg.classList.remove('bg-active')
}

//called upon clicking delete
function deleteTodo(e,obj){
    
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
