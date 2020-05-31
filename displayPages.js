let mainPage=document.getElementsByClassName('main')[0];
let favoriPage=document.getElementsByClassName('favori')[0];
let favoriBtn=document.querySelector('.star-btn');
let homeBtn=document.querySelector('.home');

function displayPages(displayStyleHome,displayStyleFavori){
    mainPage.style.display=displayStyleHome;
    favoriPage.style.display=displayStyleFavori;
}

function showHomePage(e){
    if(e.target.classList.contains('home')){
        displayPages('block','none');
    }
}

function showFavoriPage(e){
    if(e.target.parentElement.classList.contains('star-btn')){
        displayPages('none','grid');
    }
}

function displayButtonHomeEventClick(){
    homeBtn.addEventListener('click',showHomePage);
}

function displayButtonFavoriEventClick(){
    favoriBtn=addEventListener('click',showFavoriPage);
}

function displayButtonEventClick(){
    displayButtonFavoriEventClick();
    displayButtonHomeEventClick();
}