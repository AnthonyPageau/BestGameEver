$("#game_text").hide();
$("#difficulty_text").hide();
$("#game_text").slideDown(1000);
$("#difficulty_text").fadeIn(3000);
$("#Hint").hide();
$("#Lost").hide();
$("#Guess").hide();        
$("#Tries").hide();        
$("#GoodLuck").hide();
$("#Random").hide();
$("#New").show();
$("#End").show();


var Guess = document.getElementById('GuessValue');
var Ran = document.getElementById('RandomValue');
var Hi = document.getElementById('Hint');
var Tries = document.getElementById('TriesValue')


 
$("#Difficulty").on("change",function () {
    $("#Guess").show();           
    $("#GoodLuck").show();
    $("#Tries").show();        
    var Type = $("#Difficulty option:selected").val();
    
    if(Type=="Very_Easy"){
        $("#RandomValue").val(Math.ceil(Math.random() * 10));
        $('#GuessValue').attr('placeholder','1-10');
        $('#TriesValue').val(1000000);
    };
    if(Type=="Easy"){       
        $("#RandomValue").val(Math.ceil(Math.random() * 10));
        $('#GuessValue').attr('placeholder','1-10');
        $('#TriesValue').val(5);
    };
    if(Type=="Medium"){
        $("#RandomValue").val(Math.ceil(Math.random() * 100));
        $('#GuessValue').attr('placeholder','1-100');
        $('#TriesValue').val(5);
    };
    if(Type=="Difficult"){
        $("#RandomValue").val(Math.ceil(Math.random() * 500));
        $('#GuessValue').attr('placeholder','1-500');
        $('#TriesValue').val(8);
    };
    if(Type=="Very_Difficult"){
        $("#RandomValue").val(Math.ceil(Math.random() * 1000));
        $('#GuessValue').attr('placeholder','1-1000');
        $('#TriesValue').val(9);
    };
});



function goodluck() {
    $("#Hint").show();
    var guessedNumber = Guess.value;

    if (guessedNumber === Ran.value) {
        Hi.textContent = 'WOW YOU WON!!!!!!';
        $("#New").show();

  
        

    } else if (guessedNumber > Ran.value) {
        Tries.value = Tries.value - 1;
        console.log(Tries.value);
        Hi.textContent = 'LOWER';   
            if (Tries.value < 1) {
                Hi.textContent = `SORRY YOU LOSE! THE NUMBER IS ${Ran.value}`}
                $("#New").show();
               

    } else if (guessedNumber < Ran.value) {
        Tries.value = Tries.value - 1;
        console.log(Tries.value);
        Hi.textContent = 'HIGHER';
            if (Tries.value < 1) {
                Hi.textContent = `SORRY YOU LOSE! THE NUMBER IS ${Ran.value}`}
                $("#New").show();
               
    };
};

function endGame() {
    $("#Hint").hide();
    $("#Lost").hide();
    $("#Guess").hide();        
    $("#Tries").hide();        
    $("#Random").hide();
    $("#GoodLuck").hide();

};


