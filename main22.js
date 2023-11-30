// 9. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
const l = parseInt(prompt(`Enter length`));
const w = parseInt(prompt(`Enter width`));
area = l * w ;
parameter = 2 *(l + w);

alert (`area of rectangle is ${area} and perimeter of rectangle is ${parameter}`);