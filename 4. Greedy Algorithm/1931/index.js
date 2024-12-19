/*
1789 수들의 합
[문제]
한 개의 회의실이 있는데 이를 사용하고자 하는 N개의 회의에 대하여 회의실 사용표를 만들려고 한다.
각 회의 I에 대해 시작시간과 끝나는 시간이 주어져 있고, 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 회의의 최대 개수를 찾아보자.
단, 회의는 한번 시작하면 중간에 중단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다.
회의의 시작시간과 끝나는 시간이 같을 수도 있다. 이 경우에는 시작하자마자 끝나는 것으로 생각하면 된다.

[입력]
첫째 줄에 회의의 수 N(1 ≤ N ≤ 100,000)이 주어진다.
둘째 줄부터 N+1 줄까지 각 회의의 정보가 주어지는데 이것은 공백을 사이에 두고 회의의 시작시간과 끝나는 시간이 주어진다.
시작 시간과 끝나는 시간은 231-1보다 작거나 같은 자연수 또는 0이다.

[출력]
첫째 줄에 최대 사용할 수 있는 회의의 최대 개수를 출력한다.
 */
// 'dev/stdin'
let input = require('fs').readFileSync('./input.txt').toString().split('\n');

/*
모든 회의를 다 넣어주는 것이 아니라
한 회의실에 배정 가능한 최대 회의 수를 찾는 것임에 집중
=> 종료 시간이 이른 회의부터 확인해서 겹치지않게 배정
*/

// 총 회의 수
const n = Number(input[0]);

// const meetings = input.map((m) => m.split(' ')).sort((a, b) => input[a] - input[b]).slice(1,);
const meetings = input.map((m) => m.split(' ')).slice(1,);
meetings.sort(function(a,b) {
    if(a[1] != b[1]) return a[1] - b[1];
    else return a[0]-b[0];
})
console.log(meetings)
let cnt = 1;
let cur = 0;
for (i = 1; i < n; i++) {
   if (Number(meetings[cur][1]) <= Number(meetings[i][0])) {
    cur = i;
    cnt += 1;
   }
}

console.log(cnt);