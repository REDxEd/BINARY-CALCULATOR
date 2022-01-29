var index = 0;
        
if (index == 0){
        document.getElementById("1").focus();
}

        
function jump(input,index){
    if(input!=''){
        if (index == 1){
            document.getElementById("2").focus();
            pluss(index);
        }
        else if (index == 2){
            document.getElementById("3").focus();
        }
        else if (index == 3){
            document.getElementById("4").focus();
        }
        else if (index == 4){
            document.getElementById("5").focus();
        }
        else if (index == 5){
            document.getElementById("6").focus();
        }
        else if (index == 6){
            document.getElementById("7").focus();
        }
        else if (index == 7){
            document.getElementById("8").focus();
        }
        if (index == ''){
            document.getElementById("1").focus();
        }
    }
}

function dec(){
    var output = (document.getElementById("1").value*1)+(document.getElementById("2").value*2)+(document.getElementById("3").value*4)+(document.getElementById("4").value*8)+(document.getElementById("5").value*16)+(document.getElementById("6").value*32)+(document.getElementById("7").value*64)+(document.getElementById("8").value*128);
    
    document.getElementById("output").innerHTML = output;
    document.getElementById("button").innerHTML = "DEC";
}


function oct(){
    var output = (document.getElementById("1").value*1)+(document.getElementById("2").value*2)+(document.getElementById("3").value*4)+(document.getElementById("4").value*8)+(document.getElementById("5").value*16)+(document.getElementById("6").value*32)+(document.getElementById("7").value*64)+(document.getElementById("8").value*128);

    var output = output.toString(8);

    document.getElementById("output").innerHTML = output;
    document.getElementById("button").innerHTML = "OCT";
}


function hex(){
    var output = (document.getElementById("1").value*1)+(document.getElementById("2").value*2)+(document.getElementById("3").value*4)+(document.getElementById("4").value*8)+(document.getElementById("5").value*16)+(document.getElementById("6").value*32)+(document.getElementById("7").value*64)+(document.getElementById("8").value*128);

    var output = output.toString(16);

    document.getElementById("output").innerHTML = output;
    document.getElementById("button").innerHTML = "OCT";
}