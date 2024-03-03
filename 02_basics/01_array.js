/* js me array baki languages se alg hote hain 
isme hum ek hi variable me different types ke data ko store kr skte hain */

let arr = [1, 2, 3, 'lakshya'];

console.log(arr[3]);

/* when we use copy operation in js it create the copies in shallow copies 

==> shallow copy me jo copy hoti hain uska reference same hota hain origianl data se*/

// slice, splice
const myArr = [0, 1, 2, 3, 4, 5]

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // output will be 1,2

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // output will be 0,4,5 
console.log("C ", myArr);
console.log(myn2);

/* splice => isme to jo bhi main array hain uski jo bhi length denge wo ht jaygi or rest array as a output dega 
    slice => isme jo bhi length denge sirf whi array return hoga baki ka nhi hoga 
    */


/* yha pe array me two or methods hain or unme ek hain pop and ek hain push 
pop => array ke end me se kuch bhi delete krne ke liye
push => array ke end me ek element add krne ke liye   */


let dog = ['kiki', 'lili', 'mili'];
let cat = ['dodo', 'modo', 'rodo'];

let all = dog.concat(cat);  // this is one of the method jo hum two arrays ko ek array me add krne ke liye use krte hian 

console.log(all);

//we can use spread operator insted of concat method becuase concat me hum sirf two arrays ko add kr skte hain pr spread operator ka use krke hum more than two arrays ko add kr skte hain ya sath me show kr skte hain 



const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);


onsole.log(Array.isArray("Hitesh")) // ye method hume btata hain ki jo humne value di hain wo array hain ya nhi and answer will come in boolean
console.log(Array.from("Hitesh")) // this method will convert this string into the array like it will break the string into the array 
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // this method give us the value of already defined variables 
