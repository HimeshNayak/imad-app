console.log('Loaded!');

// move madi
var marginLeft = 0;
var img = document.getElementById('madi'); 
function moveRight(){
    marginLeft += 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function moveMadi() {
    var interval = setInterval(moveRight , 50);
};