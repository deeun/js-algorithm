/*
11399 ATM
[문제]
인하은행에는 ATM이 1대밖에 없다. 지금 이 ATM앞에 N명의 사람들이 줄을 서있다.
사람은 1번부터 N번까지 번호가 매겨져 있으며, i번 사람이 돈을 인출하는데 걸리는 시간은 Pi분이다.
사람들이 줄을 서는 순서에 따라서, 돈을 인출하는데 필요한 시간의 합이 달라지게 된다.
줄을 서 있는 사람의 수 N과 각 사람이 돈을 인출하는데 걸리는 시간 Pi가 주어졌을 때,
각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 구하는 프로그램을 작성하시오.

[입력]
첫째 줄에 사람의 수 N(1 ≤ N ≤ 1,000)이 주어진다.
둘째 줄에는 각 사람이 돈을 인출하는데 걸리는 시간 Pi가 주어진다. (1 ≤ Pi ≤ 1,000)

[출력]
첫째 줄에 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 출력한다.
 */
// 'dev/stdin'
let input = require('fs').readFileSync('./input.txt').toString().split('\n');
let n = input[0];
let p = input[1].split(' ');

p.sort((a,b) => {
    return (a - b)
});

let result = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        result += Number(p[j]);
    }
}
console.log(result);
