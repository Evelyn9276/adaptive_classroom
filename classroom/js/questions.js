var num1 = Math.floor(Math.random() * 10) + 1;
var num2 = Math.floor(Math.random() * 10) + 1;
var numQuestions = 1;
var correct = 0;
var range = 6;
var minValue = 1;
document.getElementById('numQuestions').innerHTML = numQuestions +  '/5';

//var operation = localStorage.getItem('operation');
var operation = '*';

//get user input here

function generateProblem() {
    // Generate two random numbers between 1 and 10
    if (operation == "*"){
        num1 = Math.floor(Math.random() * range) + minValue;
        num2 = Math.floor(Math.random() * range) + minValue;
        return `${num1} ` + operation + ` ${num2} = `;
    }
    else if(operation == "/"){
        var temp = Math.floor(Math.random() * range) + minValue;
        var temp2 = Math.floor(Math.random() * range) + minValue;
        num1 = temp2 * temp;
        num2 = temp;
        //while(num1 % num2 != 0){
          //  num1 = Math.floor(Math.random() * range) + minValue;
            //num2 = Math.floor(Math.random() * range) + minValue;
        //}
        return `${num1} ` + operation + ` ${num2} = `;
    }
    else if(operation == "+"){
        num1 = Math.floor(Math.random() * range * 1.5) + minValue;
        num2 = Math.floor(Math.random() * range * 1.5) + minValue;
        return `${num1} ` + operation + ` ${num2} = `;
    } 
    //Subtraction
    else{
        num1 = Math.floor(Math.random() * range * 1.5) + minValue;
        num2 = Math.floor(Math.random() * range) + minValue;
        while(num1 < num2){
            num1 = Math.floor(Math.random() * range * 1.5) + minValue;
            num2 = Math.floor(Math.random() * range * 1.5) + minValue;
        }
        return `${num1} ` + operation + ` ${num2} = `;
    }

    
    // Return a string representing the problem
  }

  //Checks if the answer is correct
function isCorrect(input){
    if(operation == "*"){
        if (num1 * num2 == input){
            document.getElementById("correct").style.color = "green";
            return true;
        }
        else{
            document.getElementById("correct").style.color = "red";
            return false;
        }
    }
    else if(operation == "/"){
        if (num1 / num2 == input){
            document.getElementById("correct").style.color = "green";
            return true;
        }
        else{
            document.getElementById("correct").style.color = "red";
            return false;
        }
    }
    else if(operation == "+"){
        if (num1 + num2 == input){
            document.getElementById("correct").style.color = "green";
            return true;
        }
        else{
            document.getElementById("correct").style.color = "red";
            return false;
        }
    }
    else{
        if (num1 - num2 == input){
            document.getElementById("correct").style.color = "green";
            return true;
        }
        else{
            document.getElementById("correct").style.color = "red";
            return false;
        }
    }
}

function end(){
    console.log(calculateScore() + "%");

    window.location.href = "studentclass.html";
}

function calculateScore(){
    return (correct/5 * 100);
}

//Generates the first question
document.getElementById('questions').innerHTML = generateProblem();

answer.addEventListener("click", function(){
    //Takes in the input 
    var input = document.getElementById("userInput").value;

    if(numQuestions +1 >= 6){
        //end assignment
        end();
    }

    numQuestions++;

    //If correct display they are correct
    if(isCorrect(input)){
        document.getElementById('correct').innerHTML = "Correct";
        range += 3;
        minValue +=3;
        correct++;
    }
    else{
        if(!(range  <= 3)){
            range -= 3;
        }
        if(!(minValue <=3)){
            minValue -=3;
        }
        document.getElementById('correct').innerHTML = "Incorrect";
    }

    //Generate a new problem and update num questions
    document.getElementById('questions').innerHTML = generateProblem();
    document.getElementById("userInput").value = '';
    if(!(numQuestions >=6)){
    document.getElementById('numQuestions').innerHTML = numQuestions +  '/5';
    }


});
    