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
let display = localStorage.getItem("studentdisplay").substring(1, localStorage.getItem("studentdisplay").length-1);
console.log(display)
const join = document.getElementById("join")
const name = document.getElementById("name")
join.addEventListener("click", function(){
  get(ref(database, "teachers/")).then((info) => {
    let test = info.val()
    for (let key in test){
      let classes = test[key]["classes"]
      for (let i = 0; i < classes.length; i++){
      if (name.value == classes[i]){
        get(ref(database, "student/" + display + "/classes")).then((info1) => {
          if (info1.exists()) {
            if (info1.val()[0] == "placeholder"){
              let classes1 = info1.val()
              classes1[0] = name.value
              update(ref(database, `student/${display}/`), {
                  classes: classes1,
                  
              })
            }
            else {
              let classes1 = info1.val()
              classes1.push(name.value)
              update(ref(database, `student/${display}/`), {
                classes: classes1,
                
              })
            }
          }
      })
      break
    }
  }
    }
    
  })
})