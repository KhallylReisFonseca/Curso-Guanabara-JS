let num = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10];

for (let index = 0; index < num.length; index++) {
    console.log(`A posição ${index} tem o valor ${num[index]}`);
}

num.push(1);
num.sort();
console.log(num);
console.log(`O vetor tem ${num.length} posiçoes!`);
console.log(`O primeiro valor do vetor é ${num[0]}.`);



let num = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10];

for (const index in num) {
    console.log(num[index])
}

let num = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10];

for (const index of num) {
    console.log(num[index])
}
