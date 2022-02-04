const ham = document.getElementById('ham');
const overlay = document.querySelector('.overlay');
const sidenav = document.querySelector('.sidenav');
if (window.innerWidth <= '900') {
    ham.style.display = 'block';
} else {
    ham.style.display = 'none';
}
window.onresize = () => {
    if (window.innerWidth <= '900') {
        ham.style.display = 'block';
    } else {
        ham.style.display = 'none';
    }
}

function toggle() {
    overlay.classList.toggle('show_or');
    sidenav.classList.toggle('show_s');
}

ham.addEventListener('click', toggle);
overlay.addEventListener('click', toggle);