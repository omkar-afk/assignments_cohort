
// for(let i = 0; i < 50; i++){
//     setTimeout((index) => {
//         console.log(index);
//     }, 1000 * i, i);
// }

// let counter = 0;

// function increaseCounter() {
//   counter++;
//   console.log(counter);
// }

// for(let i = 0; i<50;i++){
//     setTimeout(increaseCounter, 1000);
// }


// let counter = 0;

// function increaseCounter() {
//   counter++;
//   console.log(counter);
  
//   // Call increaseCounter again after 1 second
//   setTimeout(increaseCounter, 1000);
// }

// // Start the counter
// increaseCounter();

const fs = require("fs");

fs.readFile('a.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log(data);
    }
});

let a = 0;
for(let i = 0;i<10000000000;i++){
    a+=i;
}








