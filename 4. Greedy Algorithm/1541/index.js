/*
1541 잃어버린 괄호
[문제]
세준이는 양수와 +, -, 그리고 괄호를 가지고 식을 만들었다. 그리고 나서 세준이는 괄호를 모두 지웠다.
그리고 나서 세준이는 괄호를 적절히 쳐서 이 식의 값을 최소로 만들려고 한다.
괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.

[입력]
첫째 줄에 식이 주어진다. 식은 ‘0’~‘9’, ‘+’, 그리고 ‘-’만으로 이루어져 있고, 가장 처음과 마지막 문자는 숫자이다.
그리고 연속해서 두 개 이상의 연산자가 나타나지 않고, 5자리보다 많이 연속되는 숫자는 없다. 수는 0으로 시작할 수 있다.
입력으로 주어지는 식의 길이는 50보다 작거나 같다.

[출력]
첫째 줄에 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 출력한다.
 */
// 'dev/stdin'
// 풀이 1 : eval 함수 사용
let input = require('fs').readFileSync('./input.txt').toString().trim();
if (!(input.includes('+') && input.includes('-'))) {
    console.log(eval(input));
} else {
    const combinedArr = input.split('-')
        .map((item) => `(${item.split('+').map((i) => Number(i)).join('+')})`).join('-');
    console.log(eval(combinedArr));
}

// 풀이 2 : reduce 함수 사용
if (!(input.includes('+') && input.includes('-'))) {
    if (input.includes('+')) {
        console.log(input.split('+').reduce(((a,b) => Number(a) + Number(b))))
    } else {
        console.log(input.split('-').reduce(((a,b) => Number(a) - Number(b))))
    }
} else {
    const plusArr = input.split('-')
        .map((item) => item.split('+'));
    const minusArr = []
    plusArr.map((item) => {
        minusArr.push(item.reduce((a, b) => Number(a) + Number(b)))
    })
    console.log(minusArr.reduce((a,b) => a-b))
}
