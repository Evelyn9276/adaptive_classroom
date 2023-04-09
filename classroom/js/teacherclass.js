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
console.log(display);

var modal = document.getElementById("myModal");

var button = document.getElementById("myButton");
var span = document.getElementsByClassName("close")[0];

button.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const make = document.getElementById("addTask");

//Dropdown Menu
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () =>{
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });

            option.classList.add('active');

        });
    });
    
}); //End of d

const name = document.getElementById("task-name");

get(ref(database, "teachers/" + display + "/classinfo/classname")).then((info) => {
    if (!(info.val()[0] == "placeholder")){
        let assignments = info.val();
        var parent = document.getElementById("assignment-page");
        assignments.forEach(function(new_assignment) {
        var assignment = document.createElement("div");
        assignment.className = "added-class";
        assignment.appendChild(document.createTextNode(new_assignment));
        parent.appendChild(assignment);
        });
    }
},
  
  make.addEventListener("click", function(){
    get(ref(database, "teachers/" + display + "/classinfo/classname")).then((info) => {
        if ((info.exists())){
            if (info.val()[0] == "placeholder"){
              let assignments = info.val()
              assignments[0] = name.value
              set(ref(database, "teachers/" + display + "/classinfo"), {
                    classname: assignments,
                })
            }
            else {
                let assignments = info.val()
                assignments.push(name.value);
                set(ref(database, "teachers/" + display + "/classinfo"), {
                    classname: assignments,
                })
            }
        }
    
    })
          modal.style.display = "none";
          var task = document.createElement("div");
          task.className = "task";
          var taskName = document.createTextNode(name.value);
          task.appendChild(taskName);
          var parent = document.getElementById("assignment-page")
          parent.appendChild(task);
}));

/*
make.addEventListener("click", function(){
 get(ref(database, "teachers/" + display + "/classes")).then((info) => {
       if ((info.exists())){
         if (info.val()[0] == "placeholder"){
           let classes = info.val()
           classes[0] = name.value
           set(ref(database, `teachers/${display}/`), {
               classes: classes, 
         })
         let classname = name.value
         set(ref(database, `teachers/${display}/classinfo`), {
           classname: ["placeholder"],
         })   
        }
      else {
            let classname = name.value
            set(ref(database, `teachers/${display}/classinfo`), {
              classname: ["placeholder"],
            })   
         }
    
         console.log(info.val()[0])
       }
       console.log("worked")
       var parent = document.getElementById("new-class")
       var newClass = document.createElement("div");
       newClass.className = "added-class";
       newClass.appendChild(document.createTextNode(name.value));
       newClass.addEventListener("click", function() {
         window.location.href = "teacherclass.html";
       })
       parent.appendChild(newClass);
       });
     })
 )*/
 