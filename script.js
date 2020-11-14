
$(document).ready(function(){
    classColor();
});

//Dynamically showing present day and present time.
var currentDate=moment().format("dddd")+ " " + moment().format("Do MMM YYYY");
var currentHour=moment().format("h:mm:ss a");


var interval=setInterval(function() {
var  momentNow=moment();
$("#currentDay").html(momentNow.format("YYYY   MMMM DD")) ;
  $("#currentDay").html(currentDate + " " + momentNow.format("hh:mm:ss"));
         
},100);



var time = new Date().getHours();


 var nineText=document.getElementById("writeareafor9");

 var tenText=document.getElementById("writeareafor10");

 var elevText=document.getElementById("writeareafor11");

 var twelText=document.getElementById("writeareafor12");
 var oneText= document.getElementById("writeareafor1");

 var twoText= document.getElementById("writeareafor2");

 var threeText=document.getElementById("writeareafor3");
 var fourText= document.getElementById("writeareafor4");

 var fiveText= document.getElementById("writeareafor5");
 var clear=document.getElementById("clearbtn");







$(".saveBtn") .on("click",function(event) {
  event.preventDefault();

  var nine= nineText.value;
  var ten=tenText.value;
  var eleven= elevText.value;
  var twelve=twelText.value;
  var one=oneText.value;
  var two=twoText.value;
  var three=threeText.value;
  var four=fourText.value;
  var five=fiveText.value;

localStorage.setItem("9text", JSON.stringify(nine));
localStorage.setItem("10text", JSON.stringify(ten));
localStorage.setItem("11text", JSON.stringify(eleven));
localStorage.setItem("12text", JSON.stringify(twelve));
localStorage.setItem("1text", JSON.stringify(one));
localStorage.setItem("2text", JSON.stringify(two));
localStorage.setItem("3text", JSON.stringify(three));
localStorage.setItem("4text", JSON.stringify(four));
localStorage.setItem("5text", JSON.stringify(five));


});
showTextarea();

function showTextarea(){


var ninth=JSON.parse(localStorage.getItem("9text"));
var tenth=JSON.parse(localStorage.getItem("10text"));
var eleventh=JSON.parse(localStorage.getItem("11text"));
var twelveth=JSON.parse(localStorage.getItem("12text"));
var oneth=JSON.parse(localStorage.getItem("1text"));
var twoth=JSON.parse(localStorage.getItem("2text"));
var threeth=JSON.parse(localStorage.getItem("3text"));
var fourth=JSON.parse(localStorage.getItem("4text"));
var fiveth=JSON.parse(localStorage.getItem("5text"));




    nineText.value = ninth;
   tenText.value=tenth;
 elevText.value=eleventh;

   twelText.value=twelveth;
   oneText.value=oneth;
   twoText.value=twoth;
   threeText.value=threeth;
   fourText.value=fourth;
   fiveText.value=fiveth;

}

       




function classColor(){

    if(time > 9){
        $("#writeareafor9").addClass("past");
    } else if( time >=9 && time < 10){
        $("#writeareafor9").addClass("present");
    }else if(time < 9) {
        $("#writeareafor9").addClass("future");
    } 
    
 if(time >10){
    $("#writeareafor10").addClass("past");

 }else if (time >=10 && time < 11){
    $("#writeareafor10").addClass("present");
 
 }else if(time < 10){
    $("#writeareafor10").addClass("future");
 }

 if(time > 11){
    $("#writeareafor11").addClass("past");
 }else if(time >=11 && time < 12){
 $("#writeareafor11").addClass("present");

 }else if(time < 11){
    $("#writeareafor11").addClass("future");
}

if(time > 12){
    $("#writeareafor12").addClass("past");
    
    }else if(time >=12 && time < 13){
    $("#writeareafor12").addClass("present");
} else if(time < 12){
    $("#writeareafor12") .addClass("future");
}

if(time > 13){
    $("#writeareafor1") .addClass("past");
    
}else if(time >=13 && time < 14){
    $("#writeareafor1") .addClass("present");
    
}else if( time < 13){
    $("#writeareafor1") .addClass("future");
    
}
if(time > 14){
    $("#writeareafor2") .addClass("past");
    
}else if(time >=14 && time < 15){
    $("#writeareafor2") .addClass("present");
    
}else if( time < 14){
    $("#writeareafor2") .addClass("future");
    
}
if(time > 15){
    $("#writeareafor3") .addClass("past");
    
}else if(time >=15 && time < 16){
    $("#writeareafor3") .addClass("present");
    
}else if( time < 15){
    $("#writeareafor3") .addClass("future");
    
}
if(time > 16){
    $("#writeareafor4") .addClass("past");
    
}else if(time >=16 && time < 17){
    $("#writeareafor4") .addClass("present");
    
}else if( time < 16){
    $("#writeareafor4") .addClass("future");
    
}
if(time > 17){
    $("#writeareafor5") .addClass("past");
    
}else if(time >=17 && time < 18){
    $("#writeareafor5") .addClass("present");
    
}else if( time < 17){
    $("#writeareafor5") .addClass("future");
    
}

}


//  function clear(id){
//      console.log('CLICKED ON THE CLEAR BUTTON!!!!!!!');
//     window.localStorage.clear();
//     $("#writeareafor9").html("");
//  }
 
//  $("#clearbtn-9").on("click",function(event) {
//     var id = event.target.id
//     var idSplit = id.split('-')
//     var idToClear = `writeareafor${idSplit[1]}`
//     console.log(idToClear)
//     document.getElementById(idToClear).value="";



//  }) 

//  $("#clear-9").on("click",function(event) {
//     var id = event.target.id
//     var idSplit = id.split('-')
//     var idToClear = `writeareafor${idSplit[1]}`
//     console.log(idToClear)
//     document.getElementById(idToClear).value="";
//  }) 

 

// function myfunc(){
//     textarea.innerHTML=" ";
// }
