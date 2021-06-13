
// prime numbers from 0 to 100 (including)

// let step = 100;

// for (let i = 0; i <= step; i++) {
//     console.log(`${i}`);
//  }


// numbers from 21 to 57 (including)

// let b = 21;
// let c = 57;

// while(b <= c){
    
// console.log(`${b}`);

// b++;
// }


// even numbers from 0 to 100 (including)

// let step = 100;

// for(let i = 2; i <= step; i++) {

//     if( i % 2 == 0) {
//         console.log(i);
//     }     
// }


// sum of numbers from 1 to 100 including

// let step = 100;
// let sum = 0;

// for(let i = 1; i <= step; i++) {

//     sum = sum + i;

// }
// console.log(sum);


// Prime numbers from 3 to 1000

// let n = 100;

// let n = 7;


for(let i = 3; i <= 1000; i++){

  let prime  = true;

    for(let j = 2; j < i; j++) {

      if (i % j == 0)  {
        prime = false; 
      }  

    }
    if(prime) {
      console.log(`The number ${i} is prime`);  
    } 
  }              



