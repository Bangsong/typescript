// 声明变量flag，并指定类型为boolean
let flag: boolean

// 声明变量num，并初始化为1，其类型会被自动推断为number
let num = 1

// 完整的声明及初始化
// 声明变量str，指定类型为string，并初始化为`欢迎来到XBLOG`
let str: string = '欢迎来到XBLOG'

//num = '1' // error 不能将类型“"1"”分配给类型“number”

let title: string = 'XBLOG'
let strTemplate: string = `欢迎来到${title}`

let numArr: number[]

let tuple: [number, string] = [1, '1']

// let tuple: [number, string] = ['1', 1] //error

// let tuple: [number, string] = [1, '1', 1] //error

enum Status {
  OK = 200,
  ERRROR = 500,
  NOTFOUND = 404,
}

console.log(Status.OK)

let anyVariable: any

anyVariable = 1

anyVariable = '1'

anyVariable = false

let numIsStr: any = 1

let asStr: string = <string>numIsStr

let strArr: string[] = ['a', 'b']

let [a, b] = strArr

console.log(a, b)

let obj = { sex: '男', age: 18 }

let { sex, age } = obj

console.log(sex, age)

let { sex: newSex, age: newAge } = obj

console.log(newSex, newAge)

let oneArr = [1, 2, 3]

let twoArr = [...oneArr, 4]

let oneObj = { a: 1, b: 2 }

let twoObj = { ...oneObj, c: 3 }
