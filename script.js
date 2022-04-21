const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
let slideIndex = [1,1];
          viewSlides(1);
         function changeSlide(n) {
            viewSlides(slideIndex[0] += n);
         }
         function viewSlides(n) {
            let ele = document.getElementsByClassName("slide");
            if (n > ele.length) {
               slideIndex[0] = 1
            }
            if (n < 1) {
               slideIndex[0] = ele.length
            }
            for (i = 0; i < ele.length; i++) {
               ele[i].style.display = "none";
            }
            ele[slideIndex[0]-1].style.display = "block";
         }
         