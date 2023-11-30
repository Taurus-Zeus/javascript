let a =`10`;
const b = 10;

if ((typeof a) === (typeof b)) {
    alert(`false` );
}else if(parseInt(typeof a) !== (typeof b)) {
    alert( `true`)
};

// or

const c = a === b;
console.log(c);
a = parseInt(a);
const d = a === b;
console.log(d);



