var myArray = [
    "Apples",
    "Bananas",
    "Pears",
];

console.log('test')

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
document.body.innerHTML = randomItem;