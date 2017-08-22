console.log('Loaded!');

// move madi
var moveLeft = 0;
var img = document.getElementById('madi'); 
function moveRight(){
    moveLeft += 10;
    img.style.marginLeft = 'px';
}
img.onclick = function moveMadi() {
    var interval = setInterval(moveRight , 10);
};