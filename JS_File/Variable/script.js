const password = 'pas$word';

  password.length >= 12 ? console.log('password is vary strong so WELCOME!!!') 
: password.length >= 8  ? console.log(`WELCOME!!!`) 
:                         console.log('SORRY!!! the password is too short');
// console.log(`${password}`);


const myinfo = name => {
    console.log(`my name ${name}`);
}
myinfo('jill');

run = (a,b) =>   a + b;
console.log(run(5,3));