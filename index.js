var questionBank = [
    { 
        question : 'Which was not one of Voldemort s Horcruxes?',
        option   : [' Harry',' Nagini',' Helga s Diadem',' Tom Riddle Diary'], 
        answer   : ' Helga s Diadem'
    },

    {
        question : 'Which of these are not one of Hagrid s many pets?',
        option   : [' Grawp',' Fluffy',' Aragog',' Noberta'],
        answer   : 'Grawp'
    },

    {
        
        question : 'Which class did Severus Snape always want to teach?',
        option   : [' Potions',' Charms',' Defense Against Dark Arts',' Transfiguration'],
        answer   : ' Potions'
    },

    {
      
        question : 'Which Hogwarts house did Moaning Myrtle belong in?',
        option   : [' Gryffindor',' Slytherin',' Ravenclaw',' Hufflepuff'],
        answer   : ' Ravenclaw'
    },

    {
        
        question : 'What class did Neville end up teaching at Hogwarts?',
        option   : [' Astronomy',' Charms',' Muggle Studies',' Herbology'],
        answer   : ' Herbology'
    }
]

var question = document.getElementById("question");
var option0 = document.getElementById("option0");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");

var question1 = document.getElementById("question1");
var option10 = document.getElementById("option10");
var option11 = document.getElementById("option11");
var option12 = document.getElementById("option12");
var option13 = document.getElementById("option13");

var question2 = document.getElementById("question2");
var option20 = document.getElementById("option20");
var option21 = document.getElementById("option21");
var option22 = document.getElementById("option22");
var option23 = document.getElementById("option23");

var question3 = document.getElementById("question3");
var option30 = document.getElementById("option30");
var option31 = document.getElementById("option31");
var option32 = document.getElementById("option32");
var option33 = document.getElementById("option33");

var question4 = document.getElementById("question4");
var option40 = document.getElementById("option40");
var option41 = document.getElementById("option41");
var option42 = document.getElementById("option42");
var option43 = document.getElementById("option43");

var submit =document.getElementById("submit")
var result = document.getElementById("result")





question.innerHTML='Q1. Which was not one of Voldemort s Horcruxes?';
option0.innerHTML=' Harry';
option1.innerHTML=' Nagini';
option2.innerHTML =' Helga s Diadem';
option3.innerHTML=' Tom Riddle Diary';


question1.innerHTML='Q2. Which of these are not one of Hagrid s many pets?';
option10.innerHTML=' Grawp';
option11.innerHTML=' Fluffy';
option12.innerHTML =' Aragog';
option13.innerHTML=' Noberta';

question2.innerHTML='Q3. Which class did Severus Snape always want to teach?';
option20.innerHTML=' Potions';
option21.innerHTML=' Charms';
option22.innerHTML =' Defense Against Dark Arts';
option23.innerHTML=' Transfiguration';



question3.innerHTML='Q4. Which Hogwarts house did Moaning Myrtle belong in?';
option30.innerHTML=' Gryffindor';
option31.innerHTML=' Slytherin';
option32.innerHTML =' Ravenclaw';
option33.innerHTML=' Hufflepuff';

question4.innerHTML='Q5. What class did Neville end up teaching at Hogwarts?';
option40.innerHTML=' Astronomy';
option41.innerHTML=' Charms';
option42.innerHTML =' Muggle Studies';
option43.innerHTML =' Herbology';

submit.innerHTML='Submit'




/* function myFunction() {
    
   
   
  } */

  let Score = 0;
  var a,b,c,d,e;

  /* a=0;
  b=0;
  c=0;
  d=0;
  e=0; */

  
/*   if( prem == qsfn ){
    console.log("Click same")
}
else{
    console.log("Not click same")
} */

/* var result = document.getElementById("result"); */


function finder(prk) {

   
    

   /*  result.innerHTML = pp; */
 
    
    if(prk == 13){
        totalq.innerHTML = "5";
        a = 1;
    }
    else{
        totalq.innerHTML = "5"; 
        a = 0;
    }
  
    
}


function finder1(kp) {
    /* result.innerHTML = kp; */
    
    if(kp == 21){
        totalq.innerHTML = "5";
        b = 1;
    }
    else{
        totalq.innerHTML = "5";
        b = 0;
    }
  
    
}

function finder2(pkp) {
   /*  result.innerHTML = pkp; */
   
    if(pkp == 31){
        totalq.innerHTML = "5";
        c = 1;
    }
    else{
        totalq.innerHTML = "5";
        c = 0;
    }
  
    
}

function finder3(ckp) {
    /* result.innerHTML = ckp; */
   
    if(ckp == 43){
        totalq.innerHTML = "5";
        d = 1;
    }
    else{
        totalq.innerHTML = "5";
        d = 0;
    }
  
    
}

function finder4(jkp) {
    /* result.innerHTML = jkp; */
  
    if(jkp == 54){
        totalq.innerHTML = "5";
        e = 1;
    }
    else{
        totalq.innerHTML = "5"; 
        e = 0;
    }
  
    
}















/* var output = document.getElementById("premji")

if(a == b && b == c && c == d && d == e ){
    output.innerHTML= 5;
}
else{
    output.innerHTML= 0;
}
 */



function out(){



/* if(a = 13){
    result.innerHTML= "1";
}
else if(b = 21){
    result.innerHTML = "2"
}
else if(c = 31){
    result.innerHTML = "3"
}
else if(d =43){
    result.innerHTML = "4"
}
else if(e = 54){
    result.innerHTML = "5"
} */


if(a&&b&&c&&d&&e&&a){
    result.innerHTML= "5";
    
}
else if(a&&b&&c&&d || a&&b&&c&&e || a&&b&&d&&e || a&&c&&d&&e || b&&c&&d&&e)
{
    result.innerHTML = "4"
    
}
else if(a&&b&&c || a&&b&&d || a&&b&&e || a&&c&&d || a&&c&&e || a&&d&&e || b&&c&&d || b&&c&&e || b&&d&&e || c&&d&&e )
{
    result.innerHTML= "3";
   
}
else if(a&&b || a&&c || a&&d || a&&e || b&&c || b&&d || b&&e || c&&d || c&&e || d&&e )
{
    result.innerHTML= "2";
    
}
else 
{
    result.innerHTML= "1";
    
   
}



}







var totalq = document.getElementById("totalquestion")
 



  
      
       /* submit.querySelectorAll("click", function () {

        for(Score=0;result>Score;Score++){
            Score++;
            result.innerHTML = Score ;
        }
            
            
        }); */

       /* submit.addEventListener("click", function () {

        for(Score=0;result>Score;Score++){
            Score++;
            result.innerHTML = Score ;
        }
            
            
        }); */
    

