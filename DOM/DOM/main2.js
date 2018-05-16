



// function selectElement (array, nodeDom){
//     var select = document.createElement("select");

//     var option = {};

//     array.forEach(function(element) {
//         option = document.createElement("option");
//         option.textContent = element;

//         select.appendChild(option);
//     })

//     nodeDom.appendChild(select);
// }

// selectElement(["prva", "druga", "treca", "cetvrta"], document.querySelector(".first"));
// selectElement(["1", "2", "3", "4"], document.querySelector(".second"));


// function validationForm () {

//     var inputEl = document.querySelectorAll("input");

//     inputEl.forEach(function(input) {
//         if (input.hasAttribute("required") && input.value === ""){
//             input.classList.add("border");
//         } else {
//             input.classList.remove("border");

//         }
//     });
// }

// var button = document.querySelector("input");

function toggleWhite() {
    var body = document.querySelector("body");
    body.classList.toggle("blue");

    // if (body.classList.contains("blue")) {
    //     body.classList.remove("blue");
    // } else {
    //     body.classList.add("blue");
    // }
}

var interval = setInterval(function () { toggleWhite() }, 1000);

function myStopFunction() {
    clearInterval(toggleWhite);

}
