window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// Show/hide nav menu

const menu = document.querySelector(".nav_menu");
const menuBtn = document.getElementById("open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

//open
menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)


export function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  
}

$("#Answers").on( "click", 'button.btn-answers' ,function() {

    if ($(this).hasClass("correct_answer")) {
        $(this).addClass("correct");

        $('.btn-answers').each(function(i, obj) {

            $(this).addClass("disable");
            $(this).removeClass("btn-answers");

        });
    }  
    else{
        $(this).addClass("wrong");
        $('.btn-answers').each(function(i, obj) {

            if($(this).hasClass("correct_answer")){
                $(this).addClass("correct");
            }
            $(this).addClass("disable");
            $(this).removeClass("btn-answers");

        });
    }

  
});
