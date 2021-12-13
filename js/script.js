const botoomsub = document.querySelector('.botoomsub');
const principal = document.querySelector('#principal')
var height = principal.offsetTop
window.addEventListener('scroll',()=>{
if (window.pageYOffset > height) {
    botoomsub.classList.add('active')
} else {
    botoomsub.classList.remove('active')
}
})