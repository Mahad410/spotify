const ham = document.getElementById('ham');
window.onresize = () => {
    if (window.innerWidth <= '900') {
        ham.style.display = 'block';
    } else {
        ham.style.display = 'none';
    }
    console.log(window.innerWidth);
}