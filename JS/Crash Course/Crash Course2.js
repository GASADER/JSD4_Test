//DOM Manipulation
function appendImage(keyword, index){
    const imgElem = document.createElement('img');
    imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

    const galleryElem = document.querySelector('.gellery');
    galleryElem.appendChild(imgElem)
}

function run(){
    appendImage('dog', 1)
}
run()