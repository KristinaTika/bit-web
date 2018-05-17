
var input = document.querySelector(".input-text");
var chatWindow = document.querySelector(".container");

function addComment() {

    var message = input.value;
    var paragraph = document.createElement("p");
    paragraph.textContent = message;
    chatWindow.appendChild(paragraph);
    input.value = "";
}

var button = document.querySelector(".send");

button.onclick = addComment;




