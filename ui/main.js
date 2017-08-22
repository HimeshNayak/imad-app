console.log('Loaded!');

// move madi
var moveLeft = 0;
var img = getElementById('madi'); 
img.onclick('moveMadi');
function moveMadi() {
    moveLeft += 10;
    img.style.marginLeft = 'px';
}