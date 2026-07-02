<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test text</title>
  <link rel="stylesheet" href="style.css">
document.getElementById("maker")
var user="white"
function newer(){
user = prompt("What color would you like the background to be?")
  document.body.style.backgroundColor=user
}
document.getElementById("maker").addEventListener("click",newer)

</head>
<body>
<button id="maker">New Color</button>
</body>
</html>
