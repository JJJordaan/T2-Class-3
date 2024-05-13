let hour = 16;

if (hour < 12){
    console.log("Good Morning");
} else {
    console.log("Good Afternoon");
}

for (let i = 0; i < 3; i++ ){
    let sent = "My name is Kobus";
    console.log(sent);
}

let numbers = [1,6,4,3,33,55,3,73,83,55,83];
let even = [];
let odd = [];

for (var i=0; i < numbers.length; i++)
    if (numbers[i] %2 !=1) {
        even.push(numbers[i]);
    
    } else {
        odd.push(numbers[i])
    }

    console.log(even);
    console.log(odd);