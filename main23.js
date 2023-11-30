// 10. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const r = parseInt(prompt(`Enter radius`));
const pi = 3.14;
area = pi * r * r;
circumference = 2 * pi * r;
alert (`area of circle is ${area} and circumference of circle ${circumference}`);