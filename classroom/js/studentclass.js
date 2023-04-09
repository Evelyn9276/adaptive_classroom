import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set, get, push, update } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
const firebaseConfig = {
   apiKey: "AIzaSyA-FnOH8iKgHIItU7wVxBmLSh57oifiYYs",
   authDomain: "classroom-fb199.firebaseapp.com",
   projectId: "classroom-fb199",
   storageBucket: "classroom-fb199.appspot.com",
   messagingSenderId: "985713077996",
   appId: "1:985713077996:web:432b188e3f5774e8697fc9"
 };
 
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
let display = localStorage.getItem("display").substring(1, localStorage.getItem("display").length-1);
console.log(display)

get(ref(database, "teachers/" + display + "/classinfo/classname")).then((info) => {
    let assignments = info.val();
    var parent = document.getElementById("assignment-page");
    assignments.forEach(function(new_assignment) {
      var assignment = document.createElement("div");
      assignment.className = "added-class";
      assignment.appendChild(document.createTextNode(new_assignment));
      assignment.className = "start";
      parent.appendChild(assignment);
    });
},
/*function changeWindow()
{
    var op = document.getElementById('operation').textContent;
    //var op = document.parentElement.firstElementChild('operation').textContent;
    //console.log(document.elementFromPoint);
    console.log(op);
    if(op == "Multiplication"){
        localStorage.setItem('operation', '*')
    }
    else if(op == "Division"){
        localStorage.setItem('operation', '/')
    }
    else if(op == "Addition"){
        localStorage.setItem('operation', '+')
    }
    else if(op == 'Subtraction'){
        localStorage.setItem('operation', '-')
    }

    window.location.href = "questions.html";

}*/
//document.querySelector('.start').addEventListener("click", changeWindow);

document.addEventListener('click', function(e) {
        const target = e.target.closest(".start")
        //console.log("worked");
        //var op = target.parentElement.children[2].textContent;
        //var op = document.parentElement.firstElementChild('operation').textContent;
        //console.log(document.elementFromPoint);
        //console.log(item.parentElement.children[2].textContent);

        /*
        if(op == "Multiplication"){
            localStorage.setItem('operation', '*');
        }
        else if(op == "Division"){
            localStorage.setItem('operation', '/');
        }
        else if(op == "Addition"){
            localStorage.setItem('operation', '+');
        }
        else if(op == 'Subtraction'){
            localStorage.setItem('operation', '-');
        }*/

        //localStorage.setItem('Assignment', item.parentElement.children[0].textContent)

        //var fragment = document.createDocumentFragment();

        /*
        var parID =  "" + item.parentElement.children[0].textContent;

        /
        // Append desired element to the fragment:
        fragment.appendChild(document.getElementById(parID));

        // Append fragment to desired element:
        document.getElementById('completed-page').appendChild(fragment);*/

        window.location.href = "questions.html";
      })
 )
