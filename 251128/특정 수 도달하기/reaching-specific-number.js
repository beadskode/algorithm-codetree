const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function getValue() {
    let sum = 0;
    let aver = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= 250) return `${sum} ${aver}`;
        sum += input[i];
        aver = Math.round(sum / (i+1)).toFixed(1);
    }
    return `${sum} ${aver}`;
}

console.log(getValue())