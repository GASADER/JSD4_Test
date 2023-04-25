//DOM Manipulation
function appendImage(keyword, index){
    // const newImg  = document.createElement('img');
    // newImg.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;
    const parent = document.createElement('div');

    const galleryElem = document.querySelector('.gellery');
    // galleryElem.appendChild(newImg)
    galleryElem.appendChild(parent)
}

function run(){
    appendImage('dog', 1)
}
run()