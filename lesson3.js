console.log("Ответ на пeрвый вопрос");
let arr1 = [];
let a = 0;

while(a<100){
    a++;
    arr1.push(a);
}
console.log(arr1);


console.log('Ответ на второй вопрос');
let b = 0;

do{


    if(b === 0){
        console.log(b +' - это ноль');

    }
    if(b % 2 === 0){
        console.log(b + ' - это четное');
    }
    else{
        console.log(b + ' - это нечетное');
    }
    b++;
}

while(b <= 10);

console.log('Ответ на третий вопрос');

let i;
for(i = 0; i <= 9; i++){
    console.log(i);
}

var arr3 = [];
var end = 0;
while (end < 20){
    end++;
    arr3.push('x');
    console.log(arr3);
}