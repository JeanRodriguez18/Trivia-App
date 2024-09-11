import { getcounter, shuffle, getconfetti, showLoading, hideLoading, disableBtn, ableBtn } from "./script.js";


let answers = [];

function calltriviapi(){


    showLoading();
    disableBtn();
    setTimeout(() => {

        $.ajax({
            type: "GET",
            url: "https://opentdb.com/api.php?amount=1&category=25&encode=base64",
            data: "data",
            dataType: "json",
        }).done(function(data){
            hideLoading();
            ableBtn();
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
                    var append_me = '<button id="art" class="btn-answers '+answers[index].value+'"> '+ atob(answers[index].text) +' </button>'
                    $("#Answers").append(append_me);
                });
            });
        
        }).fail(function(){
            alert("Something went wrong, please try again");
            hideLoading();
            ableBtn();
        });

    }, 5000)
    
    
}

calltriviapi();
getconfetti('art');



$("#div-btn-question").on( "click", 'button.btn-next' ,function() {
    $('#question').html('');
    $('#Answers').empty();
    calltriviapi();
    getcounter();
    getconfetti('art');
});


$("#reset").on("click", function () { 

    $("#popup").hide();
    $("#canvas").hide();
    localStorage.removeItem('art');
    getcounter();
    
});


