var baudio = require('baudio');
var b = baudio(function (t) {
    var xs = [
        Math.sin(tau * t * 800), 1,
        Math.sin(tau * t * 400) + Math.sin(tau * t * 402), 1,
        Math.sin(tau * t * 1600), 1,
        Math.sin(tau * t * 500) + Math.sin(tau * t * 520), 1,
    ];
    var x = xs[Math.floor(t / 2) % xs.length];
    return wubs(t) * x;
});
b.play();

var tau = 2 * Math.PI;

function wubs (t) {
    var ds = [ 4, 6, 2 ];
    var d = ds[Math.floor(t * 2) % ds.length];
    
    var ns = [ 3, 3.5, 2.5, 3, 0.5, 0.25, -1, -1 ]
        .map(function (x) { return 50 * Math.pow(2, 1 + x / 5) })
    ;
    var n = ns[Math.floor(t) % ns.length];
    
    var a = Math.sin(tau * t * n);
    var b = Math.sin(tau * t * (n + d));
    var c = Math.sin(tau * t * (n + d + 0.1));
    
    var bc = (b + c) * Math.floor(t + 2) % 1;
    if (Math.abs(bc) < 0.2) bc = 1 / bc;
    return a + bc;
}
