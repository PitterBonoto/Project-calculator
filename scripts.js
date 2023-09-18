




function insert(value) {

    let number = document.querySelector(".display").innerHTML;
    document.querySelector(".display").innerHTML = number + value


}



function clickedClean() {

    let number = document.querySelector(".display").innerHTML = ""

}

function clickedResult() {

    let number = document.querySelector(".display").innerHTML; 

    if (number) {
        document.querySelector(".display").innerHTML = eval(number);
        
    }
   
}





