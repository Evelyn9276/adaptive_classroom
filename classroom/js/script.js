// Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"; 
import { getDatabase, ref, set, get, push } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries


 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyA-FnOH8iKgHIItU7wVxBmLSh57oifiYYs",
   authDomain: "classroom-fb199.firebaseapp.com",
   projectId: "classroom-fb199",
   storageBucket: "classroom-fb199.appspot.com",
   messagingSenderId: "985713077996",
   appId: "1:985713077996:web:432b188e3f5774e8697fc9"
 };


 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const provider = new GoogleAuthProvider();
  const auth = getAuth();
 const database = getDatabase(app);


const teacher = document.getElementById("teacher")
teacher.addEventListener("click", function(){
 signInWithPopup(auth, provider)
   .then(async function (result) {
     // This gives you a Google Access Token. You can use it to access the Google API.
     const credential = GoogleAuthProvider.credentialFromResult(result);
     //console.log(credential)
     const token = credential.accessToken;
     let display = result.user["displayName"]
     localStorage.setItem("display", JSON.stringify(display))
     get(ref(database, "teachers/" + display)).then((info) => {
       if (!(info.exists())){
         set(ref(database, `teachers/${display}/`), {
               display: display,
               classes: ["placeholder"],
               classinfo: ["placeholder"],
              
         }).then(() => {
           window.location.href = "teacherhome.html"


         });
       }
       else {
         window.location.href = "teacherhome.html"


       }
     })
     // The signed-in user info.
    
   })
})
const student = document.getElementById("student")
student.addEventListener("click", function(){
 signInWithPopup(auth, provider)
   .then(async function (result) {
     // This gives you a Google Access Token. You can use it to access the Google API.
     const credential = GoogleAuthProvider.credentialFromResult(result);
     //console.log(credential)
     const token = credential.accessToken;
let display = result.user["displayName"]
    
     localStorage.setItem("studentdisplay", JSON.stringify(display))
     get(ref(database, "student/" + display)).then((info) => {
       console.log(display)
       if (!(info.exists())){
         set(ref(database, `student/${display}/`), {
               display: display,
               classes: ["placeholder"],
               classinfo: ["placeholder"],
              
         }).then(() => {
           window.location.href = "studenthome.html"
         });
       }
       else {
         window.location.href = "studenthome.html"
       }
   // The signed-in user info.
    
   })
})
})


// Define a function to generate a random multiplication problem
function generateMultiplicationProblem() {
   // Generate two random numbers between 1 and 10
   const num1 = Math.floor(Math.random() * 10) + 1;
   const num2 = Math.floor(Math.random() * 10) + 1;
  
   // Calculate the product
   const product = num1 * num2;
  
   // Return a string representing the problem
   return `${num1} x ${num2} = `;
 }
