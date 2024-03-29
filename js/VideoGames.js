import { getcounter, shuffle, getconfetti } from "./script.js";

let answers = [];

function calltriviapi(){

    $.ajax({
        type: "GET",
        url: "https://opentdb.com/api.php?amount=1&category=15&encode=base64",
        data: "data",
        dataType: "json",
    }).done(function(data){
        $.each(data.results, function(index) {
    
            // changing text of button id question to match what the api gives
            $("#question").text(atob(data.results[index].question));
    
            //add correct_answer to the array
            answers = [{value: 'correct_answer', text: data.results[index].correct_answer}]
            
            //add every incorrect answer to the array
            $.each(data.results[index].incorrect_answers, function(index, value){
                answers.push({value: 'Incorrect_answer', text: value})
            })
            
            answers = shuffle(answers);
    
            $.each(answers, function(index){
                var append_me = '<button id="videogames" class="btn-answers '+answers[index].value+'"> '+ atob(answers[index].text) +' </button>'
                $("#Answers").append(append_me);
            });
        });
    
    }).fail(function(){
        alert("Something went wrong, please try again");
    });
    
}

calltriviapi();
getconfetti('videogames');



$("#div-btn-question").on( "click", 'button.btn-next' ,function() {
    $('#question').html('');
    $('#Answers').empty();
    calltriviapi();
    getcounter();
    getconfetti('videogames');

});

$("#reset").on("click", function () { 

    $("#popup").hide();
    $("#canvas").hide();
    localStorage.removeItem('videogames');
    getcounter();
    
});


