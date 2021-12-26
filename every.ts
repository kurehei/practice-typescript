const evenArray = [2, 4, 6, 8];

const result:boolean = evenArray.every((val:number) => val % 2 === 0);

console.log(result ? '全て偶数です' : '奇数が混ざってます');
