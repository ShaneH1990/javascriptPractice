//Adds a eventListener to main document elements,It will listen for the DOM Content to be loaded then it will execute.
// you should wait for the DOM to finish loading elements, otherwise you could be targeting elements that havent yet loaded! 
document.addEventListener("DOMContentLoaded", function(){
    
    //byTagname is used to get all the buttons created in HTML
    let buttons = document.getElementsByTagName("button");

    // this for loop will go through our buttons array and return each element in the array which will be stored in  that variable button on each iteration. 
    for(let button of buttons){
        //add eventListner for that button to be clicked when it is clicked the code inside the function will then run!
        button.addEventListener("click",function(){
            //if statment that checks the attribute of the data type to see what its value is and if its 'submit' it displays an alert!
            //this. refers to the button that was just clicked!
            if(this.getAttribute("data-type")=== "submit"){
                createNew(); 
            }else if(this.getAttribute("data-type")=== "button"){
               helloThere();
                //alert("You pressed the 'Next' Button!");
           }
            else{
                let normalButton = this.getAttribute("data-type");
            }
        })
        //This function will display the image that is previously blocked by css rules when the submit button is pressed.
        function createNew(){
            document.getElementById('imgsetting')
            .style.display = "block";
           
        }

        function helloThere(){
            alert("hello there!");
        }
       // let playerArray = ["rock.jpg", "scissor.jpg","paper.jpg", "spock.jpg","lizard.jpg"];
       // let playerLength = imageArray.length;

        //let computerArray =["rock.jpg", "scissor.jpg", "paper.jpg", "spock.jpg", "lizard.jpg"];
        //let computerLength = computerArray.length;

        //function randomiseImg(){
        //    let randompic = Math.floor(Math.random() *imageLength);
        //}
        
    }
})


