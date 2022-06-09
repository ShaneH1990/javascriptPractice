//Adds a eventListener to main document elements,It will listen for the DOM Content to be loaded then it will execute.
// you should wait for the DOM to finish loading elements, otherwise you could be targeting elements that havent yet loaded! 
document.addEventListener("DOMContentLoaded", function(){

    //byTagname is used to get all the buttons created in HTML
    let buttons = document.getElementsByTagName("button");

    // this for loop will go through our buttons array and return each element in the array which will be stored in  that variable button on each iteration. 
    for(let button of buttons){
        //add eventListner for that button to be clicked when it is clicked the code inside the function will then run!
        button.addEventListener("click",function(){
            //if statment that checks the attribute of the data type to see whtas its value is and if its 'submit' it dsiplays an alert!
            //this. refers to the button that was just clicked!
            if(this.getAttribute("data-type") === "submit"){
                alert("you clicked submit");
            }else{
                let normalButton = this.getAttribute("data-type");
            }
        })

    }
})

let submitted = document.getElementById("sub");
submitted.addEventListener('submit',submitAnswer );

function submitAnswer(event){
    console.log("you pressed the submit button!");
}