 /*
                UC1
                Write a program in the following steps
                a. Generates 10 Random 3 Digit number.
                b. Store this random numbers into a array.
                c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
                */
 let arr = new Array();
 let arrUC2 = new Array();
 for (let i = 0; i < 10; i++) {
     let number = Math.floor(99 + Math.random() * 999)
     arr.push(number)
     arrUC2.push(number)
 }
 console.log(arr)

 for (let i = 0; i < arr.length; i++) {
     for (let j = i; j < arr.length; j++) {
         if (arr[i] > arr[j]) {
             tem = arr[i]
             arr[i] = arr[j]
             arr[j] = tem

         }
     }
 }
 console.log(arr)
 console.log("Second Smallest Number: " + arr[1] + " and " + " Second Largest Number: " + arr[arr.length - 2])

 /*
 UC2
 Extend the above program to sort the array and then find the 2nd largest
and the 2nd smallest element.
 */

 console.log(arr)
 arrUC2.sort();
 console.log(arrUC2)
 console.log("Second Smallest Number: " + arrUC2[1] + " and " + " Second Largest Number: " + arrUC2[arr.length - 2])

 /*
 UC3
 Extend the Prime Factorization Program to store all the Prime Factors of a
number n into an array and finally display the output.
*/
 let primearray = new Array()

 function primeFactor(num) {
     for (let i = 2; i <= num / 2; i++) {
         if (num % i === 0) {
             primearray.push(i)
             num = num / i
         }
     }
 }
 primeFactor(400)
 console.log(primearray)
     /*
     //UC4 
     Write a Program to show Sum of three Integer adds to ZERO
     */
 console.log("Triplate numbers")
 let arrOfNum = new Array(-20, 0, 20, 40, -20, -40, 80)

 function triplateNumber(arrOfNum) {
     for (let i = 0; i < arrOfNum.length; i++) {
         for (let j = i + 1; j < arrOfNum.length; j++) {
             for (let k = j + 1; k < arrOfNum.length; k++) {
                 if (arrOfNum[i] + arrOfNum[j] + arrOfNum[k] == 0) {
                     console.log(arrOfNum[i] + " ," + arrOfNum[j] + " ," + arrOfNum[k])
                 }
             }
         }
     }
 }
 triplateNumber(arrOfNum)

 /*
  */