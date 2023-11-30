const score = prompt("enter Student Score"); 

 if (score < 50) {
    alert (`F`)
 } else if (score < 60) {
    alert (`D`)
 } else if (score < 70) {
    alert (`C`)
 } else if(score < 80) {
    alert (`B`)
 } else if(score <= 100) {
    alert (`A`)
 } else {
    alert( `Not a score`)
 };