const myAge = parseInt(prompt(`enter My Age`))
const yourAge = parseInt(prompt(`enter Friends age`))
 
if (myAge >= yourAge ) { 
    alert( `i'm Older Than You`)
} else {
    const years = yourAge - myAge ;
    alert(`you're ${years} Years Older Than Me.` )
}