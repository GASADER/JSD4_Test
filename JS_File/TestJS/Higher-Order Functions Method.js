const persons = [
    { name: "john", age: 17},
    { name: "jane", age: 10},
    { name: "jim", age: 15}
];

// filter คัดออก
// const kids = [];
// for (let i = 0; i < persons.length; i++){
//     const person = persons[i]
//     if (person.age <= 15){
//         kids.push(person);
//     }
// }
const kids = persons.filter((person) =>{
    return person.age <= 15;
})
console.log('Kids:',kids);

// map ยัดเข้าทั้งหมด
// const olderPersons = [];
// for (let i = 0; i < persons.length; i++) {
//     const person = persons[i];
//     olderPersons.push({
//         ...person,
//         age: person.age * 2
//     });
// }
const olderPersons = persons.map((person)=>{
    return {
        ...person,
        age: person.age * 2
    }
})
console.log('olderPersons:',olderPersons);

// reduce รวมผล
// let totalAge = 0;
// for (let i=0; i < persons.length; i++) {
//     const person = persons[i];
//     totalAge += person.age;
// }

const totalAge = persons.reduce((age,person) => {
    return age +person.age;
},0)
console.log('Total age:', totalAge)

// forEach เลือกมาดู ไม่เปลี่ยนค่า
// for (let i = 0; i < persons.length; i++){
//     const person = persons[i];
//     console.log(`Name ${person.name},Age ${person.age}`);
// }
persons.forEach((person) => {
    console.log(`Name ${person.name},Age ${person.age}`);
})

//find, findIndex เลือกมาดูข้อมูลมindex
// let jane;
// for (let i = 0; i < persons.length; i++) {
//     const person = persons[i];
//     if (person.name === 'jane'){
//         jane = person;
//         break;
//     }
// }
const jane = persons.find((person) => {
    return person.name === 'jane';
})
const janeIndex = persons.findIndex((person) => {
    return person.name === 'jane';
})
console.log('Jane',jane)
console.log('Jane Index',janeIndex)

// every, some เช็ค Boolean everyถูก,ผิด ทั้งหมด(And &&) some บ่้างส่วน (Or ||)
// let isKid = true;
// for (let i = 0; i < persons.length; i++){
//     const person = persons[i];
//     if (person.age>15){
//         isKid = false;
//         break;
//     }
// }
const isKidEvery = persons.every((person) => {
    return person.age<=15;
})
console.log('iskid:',isKidEvery);
const isKidSome = persons.some((person) => {
    return person.age<=15;
})
console.log('iskid:',isKidSome);