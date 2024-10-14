// "Write a JavaScript program that assigns and prints grades for a list of students based on their scores."

let names = ['you', 'Tom', 'Jenny', 'Peter', 'John'];
let scores = [85, 66, 95, 56,40]

let grade;

for(let i=0; i<scores.length; i++){
    
if(scores[i]>80){
    grade =  'A';
}

else if(scores[i]>70){
    grade =  'B';
}

else if(scores[i]>60){
    grade =  'C';
}
else if(scores[i]>50){
    grade =  'D';
}

else {
 grade = "Fail";
}

console.log(`${names[i]}'s grade is ${grade}`);

}


// shomodi-bahu triangle
const side1 = 9;
const side2 = 8;
const side3 = 9;

if( side1 === side2 || side2 === side3 || side1 === side3){
    console.log("The triangle is isosceles");
}

else{
    console.log("Not");
}