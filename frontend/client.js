
var fname="";
while(fname===""){
    fname= prompt("Enter Your Name To Join Chat");
    if(fname!==""){
        break;
    }
}
const socket = io.connect("http://localhost:3000", {
    transports: ["websocket"]
  });

  //socket.emit("user-joined",fname);

     
const ul = document.querySelector(".message-list");
const form = document.querySelector("form");
const messageInput = document.getElementById("msgInput");
const sendBtn = document.querySelector(".send-btn");

function showLastChat() {
    ul.lastElementChild.scrollIntoView({behavior:"smooth"});
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

socket.on("sendthis",(obj)=>{


    console.log(obj);
    var li = document.createElement("li");
    console.log("sab sahi");
    li.innerHTML=`<span>${obj.user}</span>${obj.msg}`;
    ul.appendChild(li);
    let runShowChat = false;
 if (isInViewport(ul.lastElementChild))
 {
    runShowChat = true;
 }
if(runShowChat){
    showLastChat();
}

     });

socket.on("check",(data)=>{
    console.log(data);
});

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    var li = document.createElement("li");
    li.classList.add("right");
    li.innerText = messageInput.value
    ul.appendChild(li);
    socket.emit("message",{msg:messageInput.value,user:fname});
    messageInput.value = ""
    showLastChat();
})


// var nameList = ["Aman", "Riya", "Sooraj", "Pavan"];
// var msgList = ["hi", "hello", "namaste", "what's up", "good bye"];



// setInterval(() => {
//     var runShowLastChat = false;
//     if (isInViewport(ul.lastElementChild)) {
//         runShowLastChat = true;
//     }


//     var li = document.createElement("li");

//     randomName = nameList[Math.random()*nameList.length | 0]
//     randomMsg = msgList[Math.random()*msgList.length | 0]

//     li.innerHTML = `<span>${randomName}</span>${randomMsg}`
//     ul.appendChild(li);

//     if (runShowLastChat) {
//         showLastChat();
//     }

// }, 500);



// const ul = document.querySelector(".message-list");
// const form = document.querySelector("form");
// const messageInput = document.getElementById("msgInput");
// const sendBtn = document.querySelector(".send-btn");

// form.addEventListener("submit",(e)=>{
//   e.preventDefault();
//   var li= document.createElement("li");
//   li.classList.add("right");
//   li.innerText= messageInput.value;
//   ul.appendChild(li);
//   messageInput.value="";
// showlastchat();
// }
// );

// function showlastchat(){
//   ul.lastElementChild.scrollIntoView({behaviour:"smooth"});
// }

// var nameList=["aman","riya","sooraj","pavan"];
// var msgList=["hi","hello","namaste","what's up","good bye"];

// function isInViewport(element){
//   const rect = element.getBoundingClientRect();
//   var t =rect.top;
//   var l =rect.left;
//   var r =rect.right;
//   var b =rect.bottom;
  

//   return {
//     t >= 0 &&
//     l >=0 &&
//     b <=(window.innerHeight || document.documentElement.clientHeight) &&
//     r <=(window.innerHeight || document.documentElement.clientWidth)
//   }
// }

// setInterval(()=>{
// var runShowLastChat =false;
// if(isInViewport(ul.lastElementChild)){
//   runShowLastChat=true;
// }

//   var li=document.createElement("li");
//   randomName = nameList[Math.random()*nameList.length | 0]
//   randomMsg = msgList[Math.random()*msgList.length | 0]
  
//   li.innerHTML=`<span>${randomName}</span>${randomMsg}`
// ul.appendChild(li);

// if(runShowLastChat){
//   showlastchat();
// }
// showlastchat();
// },500);



console.log("cleint started");
// const mame = prompt("enter your name to join ");
//  socket.emit("connection",mame);
//  console.log(mame);
//  const fname = prompt("enter name");

     








 
