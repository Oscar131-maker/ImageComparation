var slide = document.querySelector('#slideEffect');

window.onmousemove = (event) => {
    
    var effect = event.clientX;
    slide.style.left = effect+ "px";

}

