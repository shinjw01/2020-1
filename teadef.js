function EventHandler(){
    var answersection = document.getElementById("answer");
    answersection.style.display="block";
}

var dom = document.getElementById("checkTheAnswer");
dom.onclick = EventHandler;