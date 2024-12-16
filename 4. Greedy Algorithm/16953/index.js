/*
16953 A → B
[문제]
정수 A를 B로 바꾸려고 한다. 가능한 연산은 다음과 같은 두 가지이다.
- 2를 곱한다.
- 1을 수의 가장 오른쪽에 추가한다.
A를 B로 바꾸는데 필요한 연산의 최솟값을 구해보자.

[입력]
첫째 줄에 A, B (1 ≤ A < B ≤ 109)가 주어진다.

[출력]
A를 B로 바꾸는데 필요한 연산의 최솟값에 1을 더한 값을 출력한다. 만들 수 없는 경우에는 -1을 출력한다.
 */
// 'dev/stdin'
let input = require('fs').readFileSync('./input.txt').toString().trim().split(' ');
const a = Number(input[0]);
let b = input[1];

let operations = 1;
while (Number(b) > a) {
    operations += 1;

    if (Number(b) % 2 === 0) {
        b = Number(b)/2
    } else {
        if (String(b)[String(b).length-1] === '1') {
            b = String(b).slice(0, String(b).length-1)
        } else {
            break;
        }
    }
}
if (Number(b) === a) {
    console.log(operations)
} else {
    console.log(-1)
}
