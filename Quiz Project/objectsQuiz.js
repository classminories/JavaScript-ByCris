
function question(question, answer1, answer2, answer3, correctAnswer){//OBJECT CONSTRUCTOR
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.correctAnswer = correctAnswer;
}

var questionList = [];//Array for que questions and answers

var question1 = new question("What is the year that Napoleon was born?:", "1.-1769", "2.-1802", "3.-1756", 1);//OBJECTS.answer 1769

var question2 = new question("How many countries states has E.U.?:", "1.-24", "2.-32", "3.-28", 3);//answer: 28

var question3 = new question("How many miles has got U.K. in width?:", "1.-183", "2.-168", "3.-181", 3);//answer: 181

questionList.push(question1.correctAnswer, question2.correctAnswer, question3.correctAnswer);//push the OBJCTS INTO THE ARRAY

//////declare question in array=======================================================

var tagListQuestions = ["q1","q2","q3"];//
var tagListAnswers = ["q1AnswerList", "q2AnswerList", "q3AnswerList" ];
var tagListInputs = ["q1Answer", "q2Answer", "q3Answer"];

//===========================================================================================    
  
//For loop to print questions and answers on the HTML---------------------------------------
        //var n = 0;
    for (var i = 0; i < 3; i++)
    {
 document.getElementById("q1").innerHTML = question1.question;
 document.getElementById("q2").innerHTML = question2.question;
 document.getElementById("q3").innerHTML = question3.question;
    
 document.getElementById("q1AnswerList").innerHTML = question1.answer1+"</br>" +question1.answer2 + "</br>" + question1.answer3;
 document.getElementById("q2AnswerList").innerHTML = question2.answer1+"</br>" +question2.answer2 + "</br>" +question2.answer3;
 document.getElementById("q3AnswerList").innerHTML = question3.answer1+"</br>" +question3.answer2 + "</br>" +question3.answer3;

    }
 //================================================================================================
    var button1 = document.getElementById("finishQuiz");//declare button to make the quiz work
    button1.addEventListener('click', sumitQuiz, false);//add listener that waits for click then runs through the loopparray function.

//pass all the answers from the user to variables=================================
function sumitQuiz(){

    var userAnswer1 = parseInt(document.getElementById("q1Answer").value);
    var userAnswer2 = parseInt(document.getElementById("q2Answer").value);
    var userAnswer3 = parseInt(document.getElementById("q3Answer").value);
//================================================================================
    var score=0;
    
    //If statements to check every answer of the quiz================================================================
    if(question1.correctAnswer==userAnswer1){
        document.getElementById("result").innerHTML = "You are right! The year that Napoleon was born was 1769";
        score ++;
    }
    else(document.getElementById("result").innerHTML ="Wrong answer, please try to do the 1st one again")
        
     if(question2.correctAnswer==userAnswer2){
             document.getElementById("result1").innerHTML = "</br>"+"You are right! EU has got 28 countries states";
             score ++;
     }
    else(document.getElementById("result").innerHTML ="Wrong answer, please try to do the 2nd one again")
    if(question3.correctAnswer==userAnswer3)
            {
                document.getElementById("result2").innerHTML = "</br>"+"You are right! and U.K. has got 181 miles in width";
                score ++;
            }
    else(document.getElementById("result").innerHTML ="Wrong answer, please try to do the 3rd one again")
        
    console.log(score);
     document.getElementById("score").innerHTML = "</br>"+"You scored" +' ' +score;
    }
    


