
$.ajax({
    type: "GET",
    url: "https://opentdb.com/api.php?amount=1&category=9&encode=base64",
    data: "data",
    dataType: "json",
}).done(function(data){

    console.log(data)
    $.each(data.results, function(index) {
        $("#question").text(atob(data.results[index].question));
        console.log((data.results[index].question))
        /// do stuff
    });

}).fail(function(){
    alert("Something went wrong, please try again");
});
