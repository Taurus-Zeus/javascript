const userage = Number(prompt("Enter your age:"));

const validAge = 18;

if ( userage >= validAge ) {
    alert (`you're eligible to drive`)
} else {
    const yearsleft = validAge - userage;
    alert ( `you have ${yearsleft} year${ yearsleft > 1 ?`s`:` `} left to drive `)
} 