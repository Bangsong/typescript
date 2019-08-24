> `typescript`基本支持`javascript`的最新特性，即你可以使用许多最新特性，秀翻全场。加油吧！！！

> `typescript`中一共有 12 种基础类型

- `布尔值-boolean`
- `数字-number`
- `字符串-string`
- `数组-array`
- `元组-array`
- `枚举-enum`
- `任意类型-any`
- `空-void`
- `null`
- `undefined`
- `never`
- `Object`

## 变量声明

> 声明变量的关键字有：`var`、`let`、`const`

`var`的缺陷就是变量可以重复定义，而且其声明的变量其作用域是函数作用域，没有块级作用域，也没有常量。

`let`声明的变量不可当前作用域中不可再次声明，其作用域是块级作用域。

`const`声明的变量其值不可修改，一般都是声明并初始化，用于定义常量。

在`typescript`中声明变量可以指定类型，若不指定类型则根据其值自动推断。

`typescript`是一个静态类型语言，即：变量只能赋值其指定的类型。在使用变量之前一定要初始化，否则会报错。

格式：let 变量名: 类型 = 变量值

```typescript
// 声明变量flag，并指定类型为boolean
let flag: boolean

// 声明变量num，并初始化为1，其类型会被自动推断为number
let num = 1

// 完整的声明及初始化
// 声明变量str，指定类型为string，并初始化为`欢迎来到XBLOG`
let str: string = '欢迎来到XBLOG'

//num = '1' // error 不能将类型“"1"”分配给类型“number”
```

## boolean

> 取值只有`true`、`false`，用于真假判断

## number

> 只有浮点数

## 字符串

> 在 ES6 中新增一个字符串模板，通过` `` `可以定义字符串模板，然后通过`${变量名}`可以将变量值插入其中

```typescript
let title: string = 'XBLOG'
let strTemplate: string = `欢迎来到${title}` // strTemplate：欢迎来到XBLOG
```

## 数组

> 格式：let 变量名: 类型[]

```typescript
// 声明一个只能存放number的数组的变量numArr
let numArr: number[]
```

## 元组

> 数组中只能存放指定的类型及个数，且顺序不能变

```typescript
let tuple: [number, string] = [1, '1']

// let tuple: [number, string] = ['1', 1] //error 顺序不对

// let tuple: [number, string] = [1, '1', 1] //error 个数不对
```

## enum

> 格式：enum 变量名 {}

> 指定值则通过`=`赋值，若不指定值则默认从 0 开始，依次递增。访问枚举值则通过`.`符号来访问

```typescript
enum Status {
  OK = 200,
  ERRROR = 500,
  NOTFOUND = 404,
}

console.log(Status.OK)
```

## any

> 此类型表示任意类型，可以理解为 javascript 中定义的变量，即其为动态类型变量，可以将任何类型的值赋给此类型的变量

```typescript
console.log(Status.OK)

let anyVariable: any

anyVariable = 1

anyVariable = '1'

anyVariable = false
```

## void

> 没有类型，一般用于指定没有返回值的函数返回类型

## null、undefined

> 默认`null`和`undefined`是所有类型的子类型。 就是说你可以把`null`和`undefined`赋值给其他类型的变量。

## never

> 表示永远不存在的值。`never`类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型

## Object

> 除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型

## 类型断言

> 其意思就是告诉编译器：我知道这个变量在运行时的类型，你别管了，报错我背锅。需要注意的是，被断言的变量其类型必须指定为 any

> 格式：<断言的类型>变量 或 变量 as 断言的类型

```typescript
let numIsStr: number = 1

let asStr: string = <string>numIsStr
```

## 额外的 ES6 知识

### 解构赋值

> 解构赋值是非常好用的特性，即将一个对象或数组拆解

规则：

- 左右解构一致
- 右边必须是数组或对象

解构时重新命名，则通过`:`来指定新名字。也可设置默认值，通过`=`来指定默认值

```typescript
let strArr: string[] = ['a', 'b']

let [a, b] = strArr

console.log(a, b)

let obj = { sex: '男', age: 18 }

let { sex, age } = obj

console.log(sex, age)

let { sex: newSex, age: newAge } = obj

console.log(newSex, newAge)
```

### 展开操作符号

> `...`可以展开数组或对象

```typescript
let oneArr = [1, 2, 3]

let twoArr = [...oneArr, 4]

let oneObj = { a: 1, b: 2 }

let twoObj = { ...oneObj, c: 3 }
```
