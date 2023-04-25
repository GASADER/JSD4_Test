const readingList = document.querySelectorAll('#reading-list li .name')
readingList.forEach(function(list) {
    console.log(list.textContent)
    list.textContent += 'booktitle '
})

//better way for element.addEventListener()
const list = document.querySelector('#reading-list ul');

//Interacting with Form -- add readinglist
const addForm = document.forms['add-list'];
addForm.addEventListener('submit',function(e){
    e.preventDefault(); // prevent from refresh
    const value = addForm.querySelector('input[type="text"]').value; 
    //add new reading list in the text box
   console.log(value);

//create element
const createLi = document.createElement('li')
const createSpanTEXT = document.createElement('span') 
const createSpanDEL = document.createElement('span') 
//add content 
createSpanDEL.innerHTML = 'delete'
createSpanTEXT.textContent = `${value}`
//add classes
createSpanTEXT.classList.add('name')
createSpanDEL.classList.add('delete')
//append to DOM
const parentElement = document.querySelector('ul');
createLi.appendChild(createSpanDEL)
createLi.appendChild(createSpanTEXT)
parentElement.appendChild(createLi)
});


const deleteSpans = document.getElementsByTagName('li');
deleteSpans.addEventListener('click', () => {
          // Get the li element to remove
        const liToRemove = span.parentElement;
        
        // Remove the li element from the ul list
        liToRemove.remove();
    });