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

document.getElementsByClassName("added-class").onclick = function() {
    window.location.href = "teacherclass.html"
   }
   get(ref(database, "teachers/" + display + "/classes")).then((info) => {
     if (!(info.val()[0] == "placeholder")){
     let classes = info.val();
     var parent = document.getElementById("new-class");
     classes.forEach(function(new_class) {
       var newClass = document.createElement("div");
       newClass.className = "added-class";
       newClass.appendChild(document.createTextNode(new_class));
       newClass.addEventListener("click", function() {
        window.location.href = "studentclass.html";
       })
       parent.appendChild(newClass);
     })
     }
});
   