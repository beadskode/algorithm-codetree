const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const arr = Array(6).fill(0);

for (let i = 0; i < input.length; i++) {
    arr[input[i]-1] += 1;
}
arr.forEach((i, idx) => console.log(`${idx+1} - ${i}`))