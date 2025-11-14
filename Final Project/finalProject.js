function toggleTours(){
    let links = document.getElementById('toursLinks');

    if(links.style.display === 'block'){
        links.style.display = 'none';
    } else {
        links.style.display = 'block';
    }
}

function toggleIcons(){
    const pTag = document.getElementById('socialsNames');

    const pTagDisplayState = pTag.style.display;

    if(pTagDisplayState === 'none'){
        pTag.style.display = 'inline';
    } else {
        pTag.style.display = 'none';
    }
}


