// 6. Check if the season is Autumn, Winter, Spring or Summer.
//    If the user input is :

//    - September, October or November, the season is Autumn.
//    - December, January or February, the season is Winter.
//    - March, April or May, the season is Spring
//    - June, July or August, the season is Summer
const season = prompt(`enter Month`);
month = season.toLowerCase();
result = month;

if (month === `september`|| month === `october`|| month === `november`){
   alert (`autumn`)
}else if (month === `december` || month === `january` || month === `february`){
   alert (`winter`)
}  else if (month === `march` ||month === `april` || month === `may`){
   alert (`spring`)
} else if (month === `june` || month === `july` ||  month === `august`){
   alert (`summer`)
} else {
   alert (`not a month`)
};

