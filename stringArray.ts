const aiueo :string[] = ["あ", "い", "う", "え", "お"];

const result2: string = aiueo.reduce((val:string, answer: string) =>  val + answer )
console.log(result2)
