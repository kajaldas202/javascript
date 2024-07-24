
function calc(num){
    var val=document.querySelector("#Main")
    val.value += num
    console.log(val)
}

function output(){
    var inputvalue=document.querySelector("#Main").value;
    document.querySelector("#Main").value=eval(inputvalue)
    console.log(inputvalue)
}

function clearall(){
    var inputvalue=document.querySelector("#Main")
    inputvalue.value=""
    console.log(inputvalue)
}