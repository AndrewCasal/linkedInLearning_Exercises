var dragndrop = (function() {
    var myX = '';
    var myY = '';
    var whichArt = '';

    function moveStart(e) {
        whichArt = e.target;
        myX = e.offsetX === undefined ? e.layerX : e.offsetX;
        myY = e.offsetY === undefined ? e.layerY : e.offetY;
        whichArt.style.zIndex = 10;
    }

    function moveDrop(e) {
        e.preventDefault();
        whichArt.style.left = e.pageX - mX + 'px';
        whichArt.style.top = e.pageY - myY + 'px';
    }

    document.querySelector('body').addEventListener('dragstart', moveStart, false);
    document.querySelector('body').addEventListener('dragover', moveDragOver, false);
    document.querySelector('body').addEventListener('drop', moveDrop, false);
})();