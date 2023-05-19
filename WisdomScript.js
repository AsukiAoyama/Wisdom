/*Copyright © AsukiAoyama 2023*/
/*****************************************Start-GreetingText-Change*****************************************/
const Answer = document.getElementById("Answer");

Answer.classList.add("GreetingClass");
document.getElementById("Answer").innerHTML = "Hello, I'm Wisdom";
setTimeout(Help, 5000);

function Help(){
document.getElementById("Answer").innerHTML = "What do you want to know?";
}

/*****************************************Start-Button-Delay+Start-Ask-Text*****************************************/
window.onload = function() {
setTimeout(StartAskText, 9000);
setTimeout(enableButton, 12500);
}

function StartAskText() {
Answer.classList.remove("GreetingClass");
Answer.classList.add("AskClass");
document.getElementById("Answer").innerHTML = "Ask?";
}

function enableButton() {
document.getElementById("Button").disabled = false;
Answer.classList.remove("GreetingClass");
Answer.classList.add("AskClass");
document.getElementById("Answer").innerHTML = "Ask?";
}

/*****************************************Random-Number-Generator+Dankeschön*****************************************/
let t = 0;

function myfunction(){
let x = Math.floor((Math.random() * 1024) +1);
t++;

if (x > 450) {
        document.getElementById("Number").innerHTML = x;
        document.body.style.background = "#ffa64d";
        generatePositiveAnswer();
    }

if(x < 450){
        document.getElementById("Number").innerHTML = x;
        document.body.style.background = "#884dff";
        generateNegativeAnswer();
    }
    
if(x > 900){
        document.getElementById("Number").innerHTML = x;
        document.body.style.background = "#ff5050";
        generateNeutralAnswer() ;
    }

if(t==5){
        alert("Hello there!\nThank you for using my website!\n-Asuki");
    }
}

/*****************************************Create-Random-Answers*****************************************/
function generatePositiveAnswer() {
			var PositiveAnswers = ["Yes", "Definitely", "Absolutely", "Certainly", "Positive"];
			var randomIndex = Math.floor(Math.random() * PositiveAnswers.length);
			var answerPositive = PositiveAnswers[randomIndex];
			document.getElementById("Answer").innerHTML = answerPositive;
		}

function generateNegativeAnswer() {
			var NegativeAnswers = ["No", "Negative", "Of course not", "Nope", "Absolutely not"];
			var randomIndex2 = Math.floor(Math.random() * NegativeAnswers.length);
			var answerNegative = NegativeAnswers[randomIndex2];
			document.getElementById("Answer").innerHTML = answerNegative;
		} 


function generateNeutralAnswer() {
			var NeutralAnswers = ["Maybe", "I'm not sure", "Perhaps", "Possibly", "It could be"];
			var randomIndex3 = Math.floor(Math.random() * NeutralAnswers.length);
			var answerNeutral = NeutralAnswers[randomIndex3];
			document.getElementById("Answer").innerHTML = answerNeutral;  
		}

/*****************************************Key-Inputs+Dankeschön*****************************************/
window.onkeydown = function(event) {

   if (event.keyCode === 81) {
      alert("1-450 = Negative-Answers\n450-900 = Positive-Answers\n900-1024 = Neutral-Answers");
   }

   if (event.keyCode === 68) {
    alert("Thank you for using my website!\n -Asuki");
   }

   if (event.keyCode === 84) {
    alert("Thank you for using my website!\n -Asuki");
   }

};