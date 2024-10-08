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

export function showLoading() {
    document.getElementById('loading').style.display = 'flex';
}

export function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

export function disableBtn(){
    document.getElementById('nextButton').disabled = true;
}

export function ableBtn()
{
    document.getElementById('nextButton').disabled = false;
}

$("#Answers").on( "click", 'button.btn-answers' ,function() {

    if ($(this).hasClass("correct_answer")) {
        $(this).addClass("correct");

        setcounter(this.id)
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


let counter;
function setcounter(id){
    switch(id){
        case 'anime' :
            counter = localStorage.getItem('anime') || 0;
            counter++;
            localStorage.setItem('anime', counter);
            console.log(counter);
            break;
        case 'art' :
            counter = localStorage.getItem('art') || 0;
            counter++;
            localStorage.setItem('art', counter);
            console.log(counter);
            break;
        case 'books' :
            counter = localStorage.getItem('books') || 0;
            counter++;
            localStorage.setItem('books', counter);
            console.log(counter);
            break;
        case 'comics' :
            counter = localStorage.getItem('comics') || 0;
            counter++;
            localStorage.setItem('comics', counter);
            console.log(counter);
            break;
            
        case 'films' :
            counter = localStorage.getItem('films') || 0;
            counter++;
            localStorage.setItem('films', counter);
            console.log(counter);
            break;
            
        case 'generalknowledge' :
            counter = localStorage.getItem('generalknowledge') || 0;
            counter++;
            localStorage.setItem('generalknowledge', counter);
            console.log(counter);
            break;
            
        case 'geography' :
            counter = localStorage.getItem('geography') || 0;
            counter++;
            localStorage.setItem('geography', counter);
            console.log(counter);
            break;
            
        case 'history' :
            counter = localStorage.getItem('history') || 0;
            counter++;
            localStorage.setItem('history', counter);
            console.log(counter);
            break;
            
        case 'music' :
            counter = localStorage.getItem('music') || 0;
            counter++;
            localStorage.setItem('music', counter);
            console.log(counter);
            break;
            
        case 'scienceandnature' :
            counter = localStorage.getItem('scienceandnature') || 0;
            counter++;
            localStorage.setItem('scienceandnature', counter);
            console.log(counter);
            break;
            
        case 'sports' :
            counter = localStorage.getItem('sports') || 0;
            counter++;
            localStorage.setItem('sports', counter);
            console.log(counter);
            break;

        case 'videogames' :
            counter = localStorage.getItem('videogames') || 0;
            counter++;
            localStorage.setItem('videogames', counter);
            console.log(counter);
            break;
    }
}

export function getcounter(){
    
    counter = localStorage.getItem('anime') || 0;
    $("#anime_counter").html(' '+ counter +' / 10')


    counter = localStorage.getItem('art') || 0;
    $("#art_counter").html(' '+ counter +' / 10')


    counter = localStorage.getItem('books') || 0;
    $("#books_counter").html(' '+ counter +' / 10')


    counter = localStorage.getItem('comics') || 0;
    $("#comics_counter").html(' '+ counter +' / 10')

    counter = localStorage.getItem('films') || 0;
    $("#films_counter").html(' '+ counter +' / 10')


    counter = localStorage.getItem('generalknowledge') || 0;
    $("#general_knowledge_counter").html(' '+ counter +' / 10')


    counter = localStorage.getItem('geography') || 0;
    $("#geography_counter").html(' '+ counter +' / 10')



    counter = localStorage.getItem('history') || 0;
    $("#history_counter").html(' '+ counter +' / 10')



    counter = localStorage.getItem('music') || 0;
    $("#music_counter").html(' '+ counter +' / 10')


    counter = localStorage.getItem('scienceandnature') || 0;
    $("#science_nature_counter").html(' '+ counter +' / 10')



    counter = localStorage.getItem('sports') || 0;
    $("#sports_counter").html(' '+ counter +' / 10')


    counter = localStorage.getItem('videogames') || 0;
    $("#video_games_counter").html(' '+ counter +' / 10')

}

getcounter();



function confetti(){
    var confettiSettings = { target: 'canvas' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}





export function getconfetti(type){

    switch(type){
        case 'anime' :
            counter = localStorage.getItem('anime') || 0;
            if(counter == 10){
                $("#popup").show("slow");
                $("#canvas").show("slow");
                confetti()
            }
            break;
        case 'art' :
            counter = localStorage.getItem('art') || 0;
            if(counter == 10){
                $("#popup").show("slow");
                $("#canvas").show("slow");
                confetti()
            }
            break;
        case 'books' :
            counter = localStorage.getItem('books') || 0;
            if(counter == 10){
                $("#popup").show("slow");
                $("#canvas").show("slow");
                confetti()
            }
            break;
        case 'comics' :
            counter = localStorage.getItem('comics') || 0;
            if(counter == 10){
                $("#popup").show("slow");
                $("#canvas").show("slow");
                confetti()
            }
            break;
            
        case 'films' :
            counter = localStorage.getItem('films') || 0;
            if(counter == 10){
                $("#popup").show("slow");
                $("#canvas").show("slow");
                confetti()
            }
            break;
            
        case 'generalknowledge' :
            counter = localStorage.getItem('generalknowledge') || 0;
            if(counter == 10){
                $("#popup").show("slow");
                $("#canvas").show("slow");
                confetti()
            }
            break;
            
        case 'geography' :
            counter = localStorage.getItem('geography') || 0;
            if(counter == 10){
                $("#popup").show("slow");
                $("#canvas").show("slow");
                confetti()
            }
            break;
            
        case 'history' :
            counter = localStorage.getItem('history') || 0;
            if(counter == 10){
                $("#popup").show("slow");
                $("#canvas").show("slow");
                confetti()
            }
            break;
            
        case 'music' :
            counter = localStorage.getItem('music') || 0;
            if(counter == 10){
                $("#popup").show("slow");
                $("#canvas").show("slow");
                confetti()
            }
            break;
            
        case 'scienceandnature' :
            counter = localStorage.getItem('scienceandnature') || 0;
            if(counter == 10){
                $("#popup").show("slow");
                $("#canvas").show("slow");
                confetti()
            }
            break;
            
        case 'sports' :
            counter = localStorage.getItem('sports') || 0;
            if(counter == 10){
                $("#popup").show("slow");
                $("#canvas").show("slow");
                confetti()
            }
            break;

        case 'videogames' :
            counter = localStorage.getItem('videogames') || 0;
            if(counter == 10){
                $("#popup").show("slow");
                $("#canvas").show("slow");
                confetti()
            }
            break;
    }
}