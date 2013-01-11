$(document).ready(function(){
   
    var resetWord = "filler";
   
    var safariArray = new Array("hipster","fupa","muffin top","fixed gear bicycle","VW Bug","parking fail","motorcycle",
        "nose-picking","suit","red shirt","political shirt","messy eater","nerd","crying baby","soccer mom");
    var usedSafariArray = {"hipster":false,"fupa":false,"muffin top":false,"fixed gear bicycle":false,"VW Bug":false,"parking fail":false,"motorcycle":false,
    "nose-picking":false,"suit":false,"red shirt":false,"political shirt":false,"messy eater":false,"nerd":false,"crying baby":false,"soccer mom":false};

    init();

   
    function init(){
        for(var i = 0; i<18; i++){
            fillCard(i);
        }
    }
       
    function fillCard(i){
        wordBase = Math.floor(Math.random() * (safariArray.length));
        word = safariArray[wordBase];
        if(usedSafariArray[word] != true){
            $('#cell'+i).html(word);
            usedSafariArray[word] = true;
        }else{
            fillCard(i);
        }
    }
    


    function resetUsedSafariArray(){
        alert("hipster");
    }
 


});

