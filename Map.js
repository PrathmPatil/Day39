/*
Write a program in the following steps
a. Roll a die and find the number between 1 to 6
b. Repeat the Die roll and find the result each time
c. Store the result in a dictionary
d. Repeat till any one of the number has reached 10 times
e. Find the number that reached maximum times and the one that was for
minimum times
*/
let myMap = new Map();
let checkLimit = true
let dice1 = 0;
let dice2 = 0;
let dice3 = 0;
let dice4 = 0;
let dice5 = 0;
let dice6 = 0;


function diceCheck() {
    do {
        let dice = Math.floor(1 + Math.random() * 6)
        switch (dice) {
            case 1:
                {
                    dice1++;
                    myMap.set(dice, dice1);
                    if (dice1 >= 10) {
                        checkLimit = false;
                        return myMap;
                    }
                }
                break;
            case 2:
                {
                    dice2++;
                    myMap.set(dice, dice2);
                    if (dice2 >= 10) {
                        checkLimit = false;
                        return myMap;
                    }
                }
                break;
            case 3:
                {
                    dice3++;
                    myMap.set(dice, dice3);
                    if (dice3 >= 10) {
                        checkLimit = false;
                        return myMap;
                    }
                }
                break;
            case 4:
                {
                    dice4++;
                    myMap.set(dice, dice4);
                    if (dice4 >= 10) {
                        checkLimit = false;
                        return myMap;
                    }
                }
                break;
            case 5:
                {
                    dice5++;
                    myMap.set(dice, dice5);
                    if (dice5 >= 10) {
                        checkLimit = false;
                        return myMap;
                    }
                }
                break;
            case 6:
                {
                    dice6++;
                    myMap.set(dice, dice6);
                    if (dice6 >= 10) {
                        checkLimit = false;
                        return myMap;
                    }
                }
                break;
        }

    } while (checkLimit === true)
}
let arr = new Array();

function checkvalue(myMap) {
    const srt = new Map([...myMap].sort())
    console.log(srt);
    for (let i = 1; i < srt.size + 1; i++) {
        arr.push(srt.get(i))
    }
    min = arr[0];
    max = arr[0];
    Index_Min = 0;
    Index_Max = 0;
    for (let j = 1; j <= arr.length; j++) {

        if (max < arr[j]) {
            max = arr[j]
            Index_Max = j
        }

        if (min > arr[j]) {
            min = arr[j]
            Index_Min = j;
        }
    }
    console.log("maximum " + max + " time " + (Index_Max + 1) + " number geten by dise.");
    console.log("minimun " + min + " time " + (Index_Min + 1) + " number geten by dise.");

}
diceCheck();
console.log(myMap)
checkvalue(myMap)