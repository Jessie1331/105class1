// //event lisiner: button click event

// //vinilla salotion-- this is pure java script

// // document.getElementById('btn').addEventListener("click", function(){
// //     document.getElementById("content").textContent = ("heellow from vanilla 35!");

// // });

// // //jquary salotion 
// // $("#btn").click(function(){
// //    $("#content").text('hellow from jquary');
// // });

// //vinilla 
// // click button hide content
// document.getElementById("content").style.display = "none";

// document.getElementById("btn").addEventListener("click", function(){
//     document.getElementById("content").style.display = "block";
// });



// $("#content").hide();

// $("#btn").click(function(){
//     $("#content").show()
// });


// document.getElementById("colorBtn").addEventListener("click", function(){
//     const contentDiv = document.getElementById("content");
//     const currentColor = getComputedStyle(contentDiv).background;
//     if(currentColor === "rgb(255,0,0)"){
//         contentDiv.style.background = "blue"; 
//     } else {
//         contentDiv.style.background = "red";
//     }
// });

// $("#colorBtn").click(function(){
//     const currentColor = $("content").css("background-color");
//     if (currentColor === "rgb(255,0,0)"){
//         $("#content").css("background-color", blue);
//         }else{
//             $("#content").css(background-color, "red");
//         }
// })



function student(email,password,firstName,lastName,age,g1,g2,g3){
    this.email = e;
    this.password = p;
    this.firstName = f;
    this.lastName = l;
    this.age = a;
    this.g1 = g1;
    this.g2 = g2;
    this.g3 = g3;
    
}
let inputEmail = document.$("#txtEmail").val();
let inputPassword = document.$("#txtPassword").val();
let inputFirstName = document.$("#txtFirstName").val();
let inputLastName = document.$("#txtLastName").val();
let inputAge = document.$("#txtAge").val();
let inputGradeOne = document.$("#txt101").val();
let inputGradetwo = document.$("#txt102").val();
let inputGradethree = document.$("#txt103").val();

function register(){
    console.log("registering...");
    let user = new user(inputEmail,inputPassword,inputFirstName,inputLastName,inputG1,inputG2,inputG3);
  
      console.log(user);
      displayTable();
      updateInfo();  
    }


function init(){
    $("#registerBtn").click(register)
}
Window.onload=init

if$("#txtEmail" === '') {
    valid = false;
    inputEmail.classlist.add("alert-error")
}
if$("#txtpassword" === '') {
    valid = false;
    inputpassword.classlist.add("alert-error")
}
if$("#txtfirstName" === '') {
    valid = false;
    inputFirstName.classlist.add("alert-error")
}
if$("#txtG1" === '') {
    valid = false;
    inputG1.classlist.add("alert-error")
}
if$("#txtG2" === '') {
    valid = false;
    inputg2.classlist.add("alert-error")
}
if$("#txtG3" === '') {
    valid = false;
    inputG3.classlist.add("alert-error")
}
