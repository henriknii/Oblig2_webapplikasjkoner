//Global variables
var modalBg = document.querySelector('.modal-bg');

//Todo objects 
let myObjTodo;
//A test button for now
let button = document.getElementById("createTodoBtn");
let createTodoCardButton = document.getElementById('modalBtn');
let closeModalBtn = document.getElementById('closeModalBtn');

//Function to generate todocard based on Objects
function generateTodoList(){
    myObjTodo = {title: "test"}
    
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
    descr.textContent = "Descr goes here"


    //creating complete button
    var buttonComplete = document.createElement('a')
    buttonComplete.textContent = "Complete";
    buttonComplete.className="buttonComplete"
    buttonComplete.addEventListener("click",alert("test"))

    //Creating delete button
    var buttonDelete = document.createElement('a')
    buttonDelete.textContent = "Delete";
    buttonDelete.className="buttonDelete"
    buttonDelete.addEventListener("click",deleteTodo)

   

    //Appending all elements to the article 
    articleWrapper.appendChild(article)
    article.appendChild(header) 
    article.appendChild(descr)
    article.appendChild(buttonComplete) 
    article.appendChild(buttonDelete)
    
    
    closeModal();
}

//Called upon clicking the +todo to open modal for the todo creation window.
function openModal(){
    modalBg.classList.add('bg-active')
}

function closeModal(){
    modalBg.classList.remove('bg-active')
}

//called upon clicking delete
function deleteTodo(){
    element = this.parentElement
    element.remove()
}

//Called upon creating the todo task.
createTodoCardButton.addEventListener("click",generateTodoList);

//Opening the modal
button.addEventListener("click", openModal);

//Closing the modal
closeModalBtn.addEventListener("click",closeModal);

