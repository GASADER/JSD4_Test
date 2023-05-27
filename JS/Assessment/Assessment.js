// 1
// const test = {
//     a: 50,
//     b: 100,
//     c: 250
// }


// const sum = obj => {
//     let sumall = 0
//     for (const result in obj){
//          sumall = sumall + obj[result] 
//     }
//     return sumall
// }

// let result = sum(test)
// console.log(result)

// 2

// const arr = [2,3,4,8,12];
// // const result = arr.map(i => i ** 2)
// // console.log(result)

// function sum(a){

//     const muti = [...a]
//     for (let j = 0; j < arr.length; j++) {
//         muti[j] = muti[j] ** 2
//     }
//     return muti
// }
// console.log(sum(arr))

// 3.
// const sports = ['boxing','football','swimming','biking']
// sports.splice(3, 0, 'kendo','judo','basketball')
// console.log(sports)

// 4
// const arr = [
//     {name: 'Bemji',age: 30},
//     {name: 'Nas',age: 20},
//     {name: 'Sayo',age: 22},
//     {name: 'Sapari',age: 16},
//     {name: 'Stom',age: 27},
// ]
// const olderPersons = arr.filter((person) =>{
//     return person.age >= 25;
// })
// console.log('Older:',olderPersons);

// 5
// const tasks = [
//     {id:1, name: 'Fishing'},
//     {id:2, name: 'Shoping'},
//     {id:3, name: 'Swimming'},
//     {id:4, name: 'Football'}
// ]
// const Index = tasks.findIndex((e) => {
//     return e.id === 3;
// })
// console.log(Index)

// 6
// const arr = [2,4,3]
// const result = arr.map(i => i ** 2)
// console.log(result)

// let sum = result.reduce(myFuc)
// function myFuc(total, num){
//     return total+num
// }
// console.log(sum)
const todos = [
    { id: 1, title: 'reading' , completed: false},
    { id: 2, title: 'workout' , completed: true},
    { id: 3, title: 'cooking' , completed: true},
    { id: 4, title: 'coding' , completed: false}
  ]
  
const deleteTodo = (arr,n) => {
    let Index = arr.findIndex(e => e.id === n)
    const deleteArr = arr.splice(Index,1)
    return arr
    }
let sum = deleteTodo(todos,2)
console.log(sum)
    