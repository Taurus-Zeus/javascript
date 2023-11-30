// 7. Check if a day is weekend day or a working day. Your script will take day as an input.

// ```sh
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
const day = prompt(`what is the day today?`);
dayoftheweek = day.toLowerCase();
result = dayoftheweek;
if (dayoftheweek === `saturday` || dayoftheweek === `sunday`){
    alert (`${result} is a weekend` )
} else if (dayoftheweek === `monday` || dayoftheweek === `tuesday`||dayoftheweek === `wednesday` || dayoftheweek === `thursday`||dayoftheweek === `friday`){
    alert ( `${result} is a working day`)
} else { alert ( `it's not a day of the week`)};