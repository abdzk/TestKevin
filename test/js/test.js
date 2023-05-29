/* burger menu*/

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

/* Set the width of the side navigation to 250px */
function openNav() {
    sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    sidenav.classList.remove("active");
}
/*scroll*/
window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition >= (0.25 * document.documentElement.scrollHeight)) {
        document.querySelector('.burger-icon').classList.add('black');
    } else {
        document.querySelector('.burger-icon').classList.remove('black');
    }
});
