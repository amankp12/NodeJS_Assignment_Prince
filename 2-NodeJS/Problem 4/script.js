const fs = require('fs');

fs.readFile('notes.txt', 'utf-8', (err, data) => {
    if(err){
        return console.log("Error reading file:", err);
    }
    console.log(data);
});