(()=>{
    function displayError(elem,message){
        const errorElement = elem.parentElement.querySelector("small")
        errorElement.innerHTML = message
        elem.classList.add('invalid')
        form.classList.add('invalid')
    }

    function validateLength(elem,min,max){
        const val = elem.value
        console.log(val)
        if (val.length < min || val.length > max){
            const eleName = elem.getAttribute('placeholder');
            displayError(elem, `${eleName} length must be between ${min} and ${max}`)
        }
    }
    
    function validateEmail(elem){
        const regex = /\S+@\S+\.\S+/

         if (regex.test(email.value)){
            displayError(elem,message)
         }
    }

    function validateForm(event) {
        event.preventDefault()

        const fname = document.getElementById("fname");
        const lname = document.getElementById("lname");
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        validateLength(fname,3,20)
        validateLength(lname,3,20)
        validateLength(email,10,20)
        validateLength(password,8,12)

        validateEmail(email)
    }
    function run(){
        const form = document.getElementById("form");
        form.addEventListener('submit',validateForm)
    }
    run()
})()


// form.addEventListener('submit',(e) =>{
//     let message = [];
//     if (fname.value === '' && fname.value === null){
//         message.push('Name is required');
//         alert('Name is req')
//         console.log("alert")
//     }
//     e.preventDefault();
//         if(message.length > 0){
//         e.preventDefault();
//         errorElement.innerHTML = message.join(',');
//         }
//     return
//     console.log(message);
// })

// const fname = document.getElementById("fname");
// const lname = document.getElementById("lname");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const form = document.getElementById("form");
// const errorElement = document.getElementById("error");
// ​
// form.addEventListener('submit', (e) =>{
//     let message = [];
//     if(fname.value === '' || fname.value === null){
//         message.push('Name is required');
//     }
// ​
//     if(message.length > 0){
//     e.preventDefault();
//     errorElement.innerHTML = message.join(',');
//     }
//     console.log(fname);
// })