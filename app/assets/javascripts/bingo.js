$(document).ready(function(){
   


    var number = 0; 
    // var number = "hipster";

    var resetWord = "filler";
   
    var safariArray = new Array("hipster","fupa","muffin top","fixed gear bicycle","VW Bug","test","motorcycle","nose-picking","suit","red shirt","political shirt","messy eater");
    var usedSafariArray = {"hipster":false,"fupa":false,"muffin top":false,"fixed gear bicycle":false,
    "VW Bug":false,"test":false,"motorcycle":false,"nose-picking":false,"suit":false,"red shirt":false,"political shirt":false,"messy eater":false};

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
   
    // function resetUsedSafariArray(){
    //     for(var j = 0; j < SafariArray.length; j++){
    //         resetWord = SafariArray[j];

    //         usedSafariArray[resetWord] = false;
    //     }
    // }
    function resetUsedSafariArray(){
        alert("hipster");
    }
 

});