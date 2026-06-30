document.getElementById("maker")
var user="white"
function newer(){
user = prompt("What color would you like the background to be?")
  document.body.style.backgroundColor=user
}
document.getElementById("maker").addEventListener("click",newer)
