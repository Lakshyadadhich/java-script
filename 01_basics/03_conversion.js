// when we convert any data type into number then we find

let scroe = 33;
console.log(typeof scroe);

/* 
like this 33 => number 33
        "33" =>NaN
        true=> 1, false =>0
*/

let data = 1
console.log(Boolean(data));

/* 0 => true
    1 => false
    "" =>false
    "lakshya" => ture */

    /* 
    mostly datat types are divided into two types
   Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
        ** when you want to make a number into BigInt just add a "121212n" at the end and that will convert into the BigInt

    */

    const id = Symbol('123')
    console.log(id);
    

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    /* there are two types of memories 
    1. heap => use for Non-Primitive types of datatypes
                here we get the refrence of the defined variabl e
    2. stack => use for primitive types of datatypes
                here we get the copy of the defined variable
                
                
                 */