$("#game_text").hide();
$("#difficulty_text").hide();
$("#game_text").slideDown(1000);
$("#difficulty_text").fadeIn(3000);
$("#won").hide();
$("#lost").hide();
$("#Guess").hide();         
$("#GoodLuck").hide();


 
$("#Difficulty").on("change",function () {
    var Type = $("#Difficulty option:selected").val();
    
    if(Type=="Very_Easy"){
        $("#Guess").show();              
        $("#GoodLuck").show();
        $("#RandomValue").val(Math.round(Math.random() * 10));
        $('#GuessValue').attr('placeholder','1-10');
    };
    if(Type=="Easy"){       
        $("#Guess").show();         
        $("#GoodLuck").show();
        $("#RandomValue").val(Math.round(Math.random() * 10));
        $('#GuessValue').attr('placeholder','1-10');
    };
    if(Type=="Medium"){
        $("#Guess").show();         
        $("#GoodLuck").show();;
        $("#RandomValue").val(Math.round(Math.random() * 100));
        $('#GuessValue').attr('placeholder','1-100');
    };
    if(Type=="Difficult"){
        $("#Guess").show();         
        $("#GoodLuck").show();
        $("#RandomValue").val(Math.round(Math.random() * 500));
        $('#GuessValue').attr('placeholder','1-500');
    };
    if(Type=="Very_Difficult"){
        $("#Guess").show();           
        $("#GoodLuck").show();
        $("#RandomValue").val(Math.round(Math.random() * 1000));
        $('#GuessValue').attr('placeholder','1-1000');
    };
});

function goodluck() {
    var num = document.getElementById("GuessValue");
    var ran = document.getElementById("RandomValue");

    if (num === ran) {
        $("#won").show();
    }

}
