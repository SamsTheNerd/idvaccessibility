


var onloadHandler = () => {

}

var scrollListener = () => {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    document.documentElement.style.setProperty('--scrollPos', scrollTop);
}

window.onload = onloadHandler;
window.onscroll = scrollListener;