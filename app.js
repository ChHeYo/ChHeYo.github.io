setTimeout(loadingDisappear, 1000);

function loadingDisappear(){
    document.querySelector(".loadingGif").style.display = "none";
    document.querySelector(".title").style.display = "block";
}

// let last_known_scroll_position = 0;

// function doSomething(scroll_pos){
//     if ((scroll_pos <= 400) && (scroll_pos > 350)){
//         document.getElementById("projects").style.color = "red";
//         document.getElementById("main-body").style.background = "radial-gradient(circle,#3A99D9, #2D78AA)";
//     } else if ((scroll_pos >= 400) && (scroll_pos < 450)) {
//         // console.log('more than 500');
//         document.getElementById("main-body").style.background = "white";
//         document.getElementById("projects").style.color = "black";
//     }
// }

// document.addEventListener("scroll", function(e){
//     last_known_scroll_position = window.scrollY;
//     doSomething(last_known_scroll_position);
// })