function toggleTours(){
    let links = document.getElementById('toursLinks');

    if(links.style.display === 'block'){
        links.style.display = 'none';
    } else {
        links.style.display = 'block';
    }
}

function toggleIcons(){
    let links = document.getElementById('socialsDiv');

    if(links.style.display === 'flex'){
        links.style.display = 'none';
    } else {
        links.style.display = 'flex';
    }
}

const icon = document.getElementById('rightArrow');

icon.addEventListener('click', function() {
  icon.classList.toggle('is-active');
});


