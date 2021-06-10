let input = document.getElementById("userInput");
let status = document.getElementById("status");
let enter = document.getElementById("enter");
let original_num = Math.floor(Math.random()*100);

input.addEventListener("change",function(){
    let input_num = input.value;
    if(input_num == original_num){
        status.innerHTML = `Congratulations!!! You Guessed the number correct.<br>${input_num} was the number.`;
    }
    else if(input_num > original_num){
        status.innerHTML = `OOPS! ${input_num} was too high guess.`;
    }
    else{
        status.innerHTML = `OOPS! ${input_num} was too low guess.`;
    }
})
enter.addEventListener("click",function(){
    let input_num = input.value;
    if(input_num == original_num){
        status.innerHTML = `Congratulations!!! You Guessed the number correct.<br>${input_num} was the number.`;
    }
    else if(input_num > original_num){
        status.innerHTML = `OOPS! ${input_num} was too high guess.`;
    }
    else{
        status.innerHTML = `OOPS! ${input_num} was too low guess.`;
    }
})