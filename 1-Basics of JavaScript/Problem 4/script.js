const prompt = require("prompt-sync")();

guestList = ["Aman", "Kumar", "is", "my", "name"];
guestName = prompt("Enter your name: ")
let found = false;
for(let i = 0; i < guestList.length; i++){
    if(guestName ==  guestList[i]){
        console.log("Hello, "+guestName);
        found = true;
        break;
    }
}
if(!found){
    console.log("You are not in the list");
}