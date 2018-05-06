setTimeout(progressBar, 1000);

function progressBar(){
    document.querySelector(".main_page__loading").style.display = "none";
    document.querySelector(".main_page__heading-text").style.display = "block";
    document.querySelector(".main_page__sub-links").style.display = "block";
}