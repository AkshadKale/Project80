function para_1(){
    var inputs=[];
    for (var i=1;i<=6;i++){
        inputs.push(document.getElementById("without_comma_input_"+i).value);
    }
    inputs.join(".");
    document.getElementById("showPara1").innerHTML=inputs.join(".");
}
function para_2_with(){
    var inputs=[];
    for (var i=1;i<=6;i++){
        inputs.push(document.getElementById("with_comma_input_"+i).value);
    }
    
    document.getElementById("showPara2").innerHTML=inputs;
}