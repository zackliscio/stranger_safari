$(document).ready(function(){
   
    var usedArray = new Array(76);
    var baseArray = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
    var number = 0; 
    // var number = "hipster";
    var base = 0;
   
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
        // base = baseArray[i] * 15;
        // number = base + Math.floor(Math.random()*15)+1;
        
        wordBase = Math.floor(Math.random() * (safariArray.length));

        word = safariArray[wordBase];
     
        if(usedSafariArray[wordBase] != true){
            $('#cell'+i).html(word);
            usedSafariArray[word] = true;
        }else{
            fillCard(i);
        }
    }
   
    // function resetUsedNumbersArray(){
    //     for(var j = 0; j < usedArray.length; j++){
    //         usedArray[j] = false;
    //     }
    // }
   
    function resetUsedNumbersArray(){
        for(var j = 0; j < usedSafariArray.length; j++){
            usedSafariArray[j] = false;
        }
    }
   
    $('#newCard').click(function(){
        resetUsedNumbersArray();
        init();
    });
   
    $('td').click(function(){
    
        var toggle = this.style;
        toggle.backgroundColor = toggle.backgroundColor? "":"#333";
        toggle.color = toggle.color? "":"#fff";
    });

});