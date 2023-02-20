 /*
      UC1
      Write a program in the following steps
      a. Generates 10 Random 3 Digit number.
      b. Store this random numbers into a array.
      c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
      */
 let arr = new Array();
 for (let i = 0; i < 10; i++) {
     let number = Math.floor(99 + Math.random() * 999)
     arr.push(number)
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