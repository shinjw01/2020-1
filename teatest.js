function showSection(){
    var resultSection = document.getElementById("resultSection");
    resultSection.style.display = "block";

    var result1;
    var firstQ1 = document.getElementById("firstQ_y");
    var firstQ2 = document.getElementById("firstQ_n");
    if (firstQ1.checked){
        result1 = 'y';
    }
    if(firstQ2.checked){
        result1 = 'n';
    }

    var result2;
    var secondQ1 = document.getElementById("secondQ_y");
    var secondQ2 = document.getElementById("secondQ_n");
    if (secondQ1.checked){
        result2 = 'y';
    }
    if(secondQ2.checked){
        result2 = 'n';
    }

    var result3;
    var finalQ1 = document.getElementById("finalQ_y");
    var finalQ2 = document.getElementById("finalQ_n");
    if (finalQ1.checked){
        result3 = 'y';
    }
    if(finalQ2.checked){
        result3 = 'n';
    }


    if(result1=='y'&&result2=='y'&&result3=='y'){
        var result = document.getElementById("result1");
        result.style.display="block";
    }
    else if(result1=='y'&&result2=='y'&&result3=='n'){
        var result = document.getElementById("result2");
       result.style.display="block";
    }
    else if(result1=='y'&&result2=='n'&&result3=='y'){
        var result = document.getElementById("result3");
        result.style.display="block";
    }
    else if(result1=='y'&&result2=='n'&&result3=='n'){
        var result = document.getElementById("result4");
        result.style.display="block";
    }
    else if(result1=='n'&&result2=='y'&&result3=='y'){
        var result = document.getElementById("result5");
        result.style.display="block";
    }
    else if(result1=='n'&&result2=='y'&&result3=='n'){
        var result = document.getElementById("result6");
        result.style.display="block";
    }
    else if(result1=='n'&&result2=='n'&&result3=='y'){
        var result = document.getElementById("result7");
        result.style.display="block";
    }
    else{
        var result = document.getElementById("result8");
        result.style.display="block";
    }
}

var dom = document.getElementById("answer");
dom.onclick = showSection;