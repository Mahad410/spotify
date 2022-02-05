const ham = document.getElementById('ham');
const overlay = document.querySelector('.overlay');
const sidenav = document.querySelector('.sidenav');
const sidemenu = document.querySelector('.sidemenu');
const x_btn = document.querySelector('.x_b');
const sidelink = document.querySelector('.sidelist');
if (window.innerWidth <= '900') {
    ham.style.display = 'block';
    x_btn.style.display = 'block';
    sidelink.style.display = 'block';
    sidemenu.style.display = 'block';
} else {
    ham.style.display = 'none';
    x_btn.style.display = 'none';
    sidelink.style.display = 'none';
    sidemenu.style.display = 'none';
    overlay.style.display = 'none';
}
window.onresize = () => {
    if (window.innerWidth <= '900') {
        ham.style.display = 'block';
        x_btn.style.display = 'block';
        sidelink.style.display = 'block';
        sidemenu.style.display = 'block';
    } else {
        ham.style.display = 'none';
        x_btn.style.display = 'none';
        sidelink.style.display = 'none';
        sidemenu.style.display = 'none';
        overlay.style.display = 'none';
    }
}

function toggle() {
    overlay.classList.toggle('show_or');
    sidenav.classList.toggle('show_s');
}

ham.addEventListener('click', toggle);
overlay.addEventListener('click', toggle);
x_btn.addEventListener('click', toggle);