var  nav = document.getElementById('nav');
window.onscroll = function(){
    if (window.pageYOffset >1) {
        document.getElementById('nav').style.background = "#c6d4e1";
    }
    else{
        document.getElementById('nav').style.background = "transparent";
    }
}

