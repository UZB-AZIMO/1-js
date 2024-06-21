// {1-misol

// function son(array) {
//     let musbat = 0;
//      let  manfiy = 0;
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] > 0) {
//         musbat += array[i];
//       } else {
//         manfiy += array[i];
//       }
//     }
//     console.log(`musbat sonlar yig'ingis: ${musbat} `)
//     console.log( ` manfi  sonlar yig'ingis: ${manfiy}`)
//     return `masala yechildi `
//   }
//   console.log(son([1,2,-3,-5,-10]));


// }




// {1-misol while
    
// function son(array) {
//     let musbat = 0,
//       manfiy = 0;
//     let i = 0;
//     while (i < array.length) {
//       if (array[i] > 0) {
//         musbat += array[i];
//       } else {
//         manfiy += array[i];
//       }

//       i++;
//     }
//     console.log(`musbat sonlar yig'ingis: ${musbat} `)
//     console.log( ` manfi  sonlar yig'ingis: ${manfiy}`)
//     return `YECHIM TAYYOR `
// }
// console.log(son([1,2,3,4,5,-3,-5,-10]));

// }

// {1-misol do while da

// function son(array) {
//     let musbat = 0,
//       manfiy = 0;
//     let i = 0;
//     do {
//       if (array[i] > 0) {
//         musbat += array[i];
//       } else {
//         manfiy += array[i];
//       }
//       i++;
//     } while (i < array.length);
//     console.log(`musbat sonlar yig'ingis: ${musbat} `)
//     console.log( ` manfi  sonlar yig'ingis: ${manfiy}`)
//     return `masalaning yechim tayyor `
// }
// console.log(son([1,2,3,4,5,-3,-5,-10]));


// }




// {2-misol

//   

// }

// {2-misol wihie

// function son(array){
//     let juft = 0
//     let i = 0
//     while (i < array.length){
//         if(array[i] % 2 === 0){
//             juft += array[i]
//         } 
//         i++           
//     }
//     return juft
// }
// console.log(son([1,2,4,1,7]));

// }

// {3-misol do while

// function son(array){
//     let juft = 0
//     let i = 0
//     do{
//         if(array[i] % 2 === 0){
//             juft += array[i]
//         } 
//         i++ 
//     }while(i < array.length)
//     return juft
// }
// console.log(son([1,2,4,6,7]));

// }


// {4-misol while

// function son(n){
//     let i = n
//     while(i > 0){
//         i--
//         if (i % 2 !== 0) {
//             console.log(i);
//         }
//     }
//     return `${n} gacha bo'lgan toq sonlar`
// }
// console.log(son(12));

// }


// {4-misol do

function son(n){
    let i = n
    do{
        i--
        if (i % 2 !== 0) {
            console.log(i);
        }
    }while(i > 0)
    return `${n} gacha bo'lgan toq sonlar`
}
console.log(son(21000));
// }