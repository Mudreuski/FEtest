console.log('Test 2:');
for(let i = 0; i < 99;)console.log((++i%3?'':'Open')+(i%7?'':'Source')||i);

console.log('Test 3:');
const container = document.querySelector('.container2');
console.log(container.children);

console.log('Test 4:');
function sum(list) {
    return list.reduce(function(sum, current) {
        if (+current % 1 === 0) {
            return sum + +current;
        }
        return sum
    }, 0);
}
console.log(sum( ['1', 'a', '25', '13.1']));

console.log('Test 6:');
const string = 'text #rules text text Softeq';
const regexp = /Softeq.*#rules|#rules.*Softeq/;
console.log(string);
console.log(regexp.test(string));

console.log('Test 7:');
getArray = () => {
    const result = [];
    for (let i = 65; i <= 90 ; i++){
        result.push(String.fromCharCode(i))
    }
    return result
};
console.log(getArray());

console.log('Test 8:');
function GuessANumber() {
    const answer = Math.ceil(Math.random() * 1000000);
    let min = 0;
    let max = 1000000;
    let count = 0;

    while (true){
        if(count > 50) return console.log('Lose! Answer is ', answer);
        let middle = Math.ceil((min + max) / 2);

        const result = verify(middle);
        if(result === 0) {
            return console.log(`Winner! answer: ${answer}, count: ${count}`);
        } else if (result === -1) {
            max = middle;
        } else if (result === 1) {
            min = middle;
        }

        count++;
    }

    function verify(middle) {
        if(answer === middle) return 0;
        if(answer < middle) return -1;
        if(answer > middle) return 1;
    }
}
GuessANumber();

console.log('Test 5:');
fetch('https://jsonplaceholder.typicode.com/posts/5')
    .then(response => response.json())
    .then(json => console.log(json));