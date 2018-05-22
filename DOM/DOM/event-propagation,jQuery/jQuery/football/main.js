

// function move(event){
//     var player = document.querySelector("img");
//     var x = event.clientX;
//     var y = event.clientY;
//     player.style.position = "absolute";
//     player.style.left = x + 'px';
//     player.style.top = y +'px';
//     console.log(x,y)
// }
// document.addEventListener("click", move);
$(function(){

    var button = $(".button");

    var player = $("img");
  
    $(document).on("click", function(event){
        var x = event.clientX;
        var y = event.clientY;
        
        player.css({"position": "absolute", 
                    "left": x + "px",
                    "top": y + "px"})
    });

    button.on("click", function(){
        $(document).off();
    });

});