var menu = document.getElementById('menu')
var sideMenu = document.getElementById('side_nav_bar')
menu.onclick = function(){
    if (sideMenu.style.right == "-250px") {
        sideMenu.style.right = "0px"
        // menu.src = "./images/icon-close-menu.svg "
    } else{
        sideMenu.style.right = "-250px"
        // menu.src = "./images/icon-menu.svg"
    }
}