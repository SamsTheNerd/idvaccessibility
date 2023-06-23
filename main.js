
var calcScrollChangePoints = () => {
    var studentNeedsTop = document.getElementById("studentNeeds").offsetTop-100;
    document.documentElement.style.setProperty('--navShiftPoint', studentNeedsTop);
}

var onloadHandler = () => {
    calcScrollChangePoints();
    genChart1();
    genChart3();
    genChart4();
}

var resizeListener = () => {
    calcScrollChangePoints();
}

var scrollListener = () => {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    document.documentElement.style.setProperty('--scrollPos', scrollTop);

}


window.onload = onloadHandler;
window.onscroll = scrollListener;
window.onresize = resizeListener;