console.log('Loaded!');

// move madi
var moveLeft = 0;
var img = document.getElementById('madi'); 
img.onclick('moveMadi');
function moveMadi() {
    moveLeft += 10;
    img.style.marginLeft = 'px';
}