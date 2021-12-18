const ArrayList: (string|number)[] = ["a", 1, "i", 2, "u", 3];

const extractNumberList: any = ArrayList.filter((val : any) => !isNaN(val))
.reduce((val: any, result: any) => val + result);
console.log(extractNumberList)
