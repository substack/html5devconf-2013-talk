var blinks = document.querySelectorAll('blink');
[].slice.call(blinks).forEach(function (blink) {
    var hidden = false;
    blink.style.visibility = 'hidden';
    setInterval(function () {
        blink.style.visibility = hidden ? 'hidden' : 'visible';
        hidden = !hidden;
    }, 1000);
});
